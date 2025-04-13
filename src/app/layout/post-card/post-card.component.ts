import {Component} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-post-card',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
}
