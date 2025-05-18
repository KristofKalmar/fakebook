import {Component, Injectable} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {Router, RouterLink} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-post-card',
  imports: [
    MatCard,
    MatCardContent,
    RouterLink,
  ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  constructor(private router: Router) {}
}
