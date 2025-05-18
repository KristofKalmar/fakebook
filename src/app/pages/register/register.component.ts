import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard} from '@angular/material/card';
import {MatInput, MatLabel} from '@angular/material/input';
import {NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {MatFormField} from '@angular/material/form-field';
import {Router, RouterLink} from '@angular/router';
import {LogoAnimationDirective} from '../../directives/logoAnimation/logo-animation.directive';
import User from '../../classes/User';
import {Service} from '../../../service/service';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatDivider,
    MatFormField,
    MatInput,
    MatLabel,
    NgOptimizedImage,
    ReactiveFormsModule,
    RouterLink,
    LogoAnimationDirective
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private service: Service) {
    this.profileForm = fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  register() {
    const user = new User();

    const email = this.profileForm.get('email')!.value;
    const password = this.profileForm.get('password')!.value;
    const username = this.profileForm.get('name')!.value;

    user.email = email;
    user.password = password;
    user.fullName = username;

    this.service.register(user);
  }
}
