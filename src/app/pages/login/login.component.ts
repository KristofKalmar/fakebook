import { Component } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {LogoAnimationDirective} from '../../directives/logoAnimation/logo-animation.directive';
import {Router, RouterLink} from "@angular/router";
import {Service} from '../../../service/service';
import User from '../../classes/User';

@Component({
  selector: 'app-login',
  imports: [
    MatFormField,
    MatInput,
    FormsModule,
    MatLabel,
    MatCard,
    MatDivider,
    NgOptimizedImage,
    MatButton,
    LogoAnimationDirective,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private service: Service) {
    const params = new URLSearchParams(window.location.search);

    if (params.get('logout') === 'true') {
      this.service.logout();
    }

    this.profileForm = fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    const email = this.profileForm.get('email')!.value;
    const password = this.profileForm.get('password')!.value;

    this.service.login(email, password);
  }
}
