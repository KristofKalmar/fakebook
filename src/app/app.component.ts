import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BottomNavigationComponent} from './layout/bottom-navigation/bottom-navigation.component';
import {MatAnchor} from '@angular/material/button';
import {MatTabNavPanel} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BottomNavigationComponent, MatAnchor, MatTabNavPanel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webkert';
}
