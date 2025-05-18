import {Component, Injectable, OnInit} from '@angular/core';
import {PostComponent} from '../../layout/post/post.component';
import {PostCardComponent} from '../../layout/post-card/post-card.component';
import {NgForOf} from '@angular/common';
import {PageBackgroundDirective} from '../../directives/pageBackground/page-background.directive';
import {Service} from '../../../service/service';

@Injectable({
  providedIn: 'root'
})
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
export class HomeComponent implements OnInit {
  posts: string[] = [];

  constructor(private service: Service) {}

  ngOnInit() {
    this.service.getAllPosts().then(posts => this.posts = posts);
  }
}
