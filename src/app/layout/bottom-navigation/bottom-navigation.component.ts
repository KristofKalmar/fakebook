import {Component, Injectable, OnInit} from '@angular/core';
import { MatTabLink, MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import {MatIcon} from '@angular/material/icon';
import {NgIf, NgStyle} from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import {Auth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-bottom-navigation',
  imports: [
    MatIcon,
    MatTabNavPanel,
    MatTabNav,
    MatTabLink,
    NgStyle,
    NgIf,
  ],
  templateUrl: './bottom-navigation.component.html',
  styleUrl: './bottom-navigation.component.css'
})
export class BottomNavigationComponent implements OnInit {
  show: boolean = true;
  isLoggedIn: boolean = false;

  constructor(private router: Router, private auth: Auth) {
    this.isLoggedIn = this.auth.currentUser != null;
  }

  reload() {
    this.show = !((window.location.href.includes("login") || window.location.href.includes("register")));
    this.isLoggedIn = this.auth.currentUser != null;
  }

  ngOnInit() {
    this.reload();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.reload();
      });
  }
}
