import {Component, Injectable, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {PostCardComponent} from '../../layout/post-card/post-card.component';
import {PageBackgroundDirective} from '../../directives/pageBackground/page-background.directive';
import User from '../../classes/User';
import {Service} from '../../../service/service';
import {Auth} from '@angular/fire/auth';
import {PostComponent} from '../../layout/post/post.component';
import {NgForOf} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-profile',
  imports: [
    MatCard,
    MatCardContent,
    PostCardComponent,
    PageBackgroundDirective,
    PostComponent,
    NgForOf,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  queryObject: Record<string, string> = {};
  user: User = new User();
  posts: string[] = [];

  constructor(private service: Service, private auth: Auth) {
    const url = window.location.href;
    const params = new URLSearchParams(new URL(url).search);
    params.forEach((value, key) => {
      this.queryObject[key] = value;
    })

    this.service.fetchUserProfile(params.get("user") ?? auth.currentUser!.uid).then((user: User) => {
      this.user = user;
    })
  }

  ngOnInit() {
    this.service.fetchUserPosts().then(posts => {
      this.posts = posts;
    })
  }

  onImagePickedBanner(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      this.service.updateProfileImage(true, file);

      const reader = new FileReader();
      reader.onload = () => {
        this.user.bannerImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onImagePickedProfile(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      this.service.updateProfileImage(false, file);

      const reader = new FileReader();
      reader.onload = () => {
        this.user.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
