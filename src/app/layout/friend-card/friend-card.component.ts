import { Component } from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-friend-card',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatIcon
  ],
  templateUrl: './friend-card.component.html',
  styleUrl: './friend-card.component.css'
})
export class FriendCardComponent {

}
