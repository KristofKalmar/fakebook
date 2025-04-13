import { Component } from '@angular/core';
import {PostComponent} from '../../layout/post/post.component';
import {PostCardComponent} from '../../layout/post-card/post-card.component';
import {NgForOf} from '@angular/common';
import Server from '../../../server_mock/server';
import {PageBackgroundDirective} from '../../directives/pageBackground/page-background.directive';

@Component({
  selector: 'app-home',
  imports: [
    PostComponent,
    PostCardComponent,
    NgForOf,
    PageBackgroundDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected readonly server = Server;
}
