import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {CommentPageComponent} from './pages/comment-page/comment-page.component';
import {RegisterComponent} from './pages/register/register.component';
import {FriendsComponent} from './pages/friends/friends.component';
import {AuthGuard} from './guard/auth/auth.guard';
import {CreatePostComponent} from './pages/create-post/create-post.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'createpost',
        outlet: 'modal',
        component: CreatePostComponent
      }
    ] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'createpost',
        outlet: 'modal',
        component: CreatePostComponent
      }
    ] },
  { path: 'post', component: CommentPageComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'createpost',
        outlet: 'modal',
        component: CreatePostComponent
      }
    ] },
  { path: 'friendrequests', component: FriendsComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'createpost',
        outlet: 'modal',
        component: CreatePostComponent
      }
    ] },
];
