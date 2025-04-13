import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCard} from '@angular/material/card';
import {MatInput, MatLabel} from '@angular/material/input';
import {NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatDivider} from '@angular/material/divider';
import {MatFormField} from '@angular/material/form-field';
import {RouterLink} from '@angular/router';
import {LogoAnimationDirective} from '../../directives/logoAnimation/logo-animation.directive';

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

}
