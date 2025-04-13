import { Component } from '@angular/core';
import { MatTabLink, MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import {MatIcon} from '@angular/material/icon';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-bottom-navigation',
  imports: [
    MatIcon,
    MatTabNavPanel,
    MatTabNav,
    MatTabLink,
    NgStyle,
  ],
  templateUrl: './bottom-navigation.component.html',
  styleUrl: './bottom-navigation.component.css'
})
export class BottomNavigationComponent {
  show = (window.location.href.includes("login") || window.location.href.includes("register")) ? false : true;
}
