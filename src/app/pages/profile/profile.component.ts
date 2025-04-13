import { Component } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {PostComponent} from '../../layout/post/post.component';
import {PostCardComponent} from '../../layout/post-card/post-card.component';
import server from '../../../server_mock/server';
import {NgForOf} from '@angular/common';
import {PageBackgroundDirective} from '../../directives/pageBackground/page-background.directive';

@Component({
  selector: 'app-profile',
  imports: [
    MatCard,
    MatCardContent,
    PostComponent,
    PostCardComponent,
    NgForOf,
    PageBackgroundDirective,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userId: string = "8";
  protected readonly server = server;
  user = server.getUser(this.userId)!;
}
