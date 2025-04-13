import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import Post from '../../classes/Post';
import Comment from '../../classes/Comment';
import Reaction from '../../classes/Reaction';
import User from '../../classes/User';
import {NgIf} from '@angular/common';
import {DatePipePipe} from '../../pipes/date/date-pipe.pipe';
import {LikePipePipe} from '../../pipes/like/like-pipe.pipe';
import {DislikePipePipe} from '../../pipes/dislike/dislike-pipe.pipe';

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
export class PostComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) post!: Post;
  @Input({ required: true }) comments!: Comment[];
  @Input({ required: true }) reactions!: Reaction[];
  @Input({ required: true }) isFriends!: boolean;

  get dateString() {
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
  }
}
