import {Component, Injectable, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import Post from '../../classes/Post';
import Reaction from '../../classes/Reaction';
import User from '../../classes/User';
import {NgIf} from '@angular/common';
import {DatePipePipe} from '../../pipes/date/date-pipe.pipe';
import {LikePipePipe} from '../../pipes/like/like-pipe.pipe';
import {DislikePipePipe} from '../../pipes/dislike/dislike-pipe.pipe';
import {Service} from '../../../service/service';
import {Auth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-post',
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    MatButton,
    NgIf,
    DatePipePipe,
    LikePipePipe,
    DislikePipePipe,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input({ required: true }) postId!: string;

  constructor(private service: Service, private auth: Auth) {}

  user: User = new User();
  isUserPost: boolean = false;
  post: Post = new Post();
  reactions: Reaction[] = [];

  ngOnInit() {
    this.service.getPost(this.postId).then(data => {
      this.isUserPost = data.post.userId === this.auth.currentUser?.uid;
      this.post = data.post;
      this.reactions = data.reactions;
      this.user = data.user;
    })
  }

  deletePost() {
    this.service.deletePost(this.postId, this.post.attachment).then(() => {
      window.location.reload();
    })
  }

  /*get dateString() {
    const date = new Date(this.post.date);
    return date.getFullYear() + "." + date.getMonth() + 1 + "." + date.getDay() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

  get likeCount() {
    let likes = 0;

    this.reactions.forEach(reaction => {
      if (reaction.isLike) {
        likes++;
      }
    })

    return likes;
  }

  get dislikeCount() {
    let disLikes = 0;

    this.reactions.forEach(reaction => {
      if (!reaction.isLike) {
        disLikes++;
      }
    })

    return disLikes;
  }*/
}
