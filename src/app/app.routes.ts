import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {CommentPageComponent} from './pages/comment-page/comment-page.component';
import {RegisterComponent} from './pages/register/register.component';
import {FriendsComponent} from './pages/friends/friends.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'post', component: CommentPageComponent },
  { path: 'friendrequests', component: FriendsComponent },
];
