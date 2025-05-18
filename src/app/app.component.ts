import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {BottomNavigationComponent} from './layout/bottom-navigation/bottom-navigation.component';
import {MatAnchor} from '@angular/material/button';
import {MatTabNavPanel} from '@angular/material/tabs';
import {filter} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CreatePostComponent} from './pages/create-post/create-post.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BottomNavigationComponent, MatAnchor, MatTabNavPanel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'webkert';

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects.includes('/(modal:createpost)')) {
        this.openCreatePostModal(event.url);
      }
    });
  }

  openCreatePostModal(url: string) {
    const dialogRef = this.dialog.open(CreatePostComponent, {
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(() => {
      const cleanUrl = url.replace(/\(modal:[^)]+\)/, '');
      this.router.navigate([cleanUrl])
    });
  }
}
