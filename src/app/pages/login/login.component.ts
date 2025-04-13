import { Component } from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCard} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {NgOptimizedImage} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {LogoAnimationDirective} from '../../directives/logoAnimation/logo-animation.directive';
import {RouterLink} from "@angular/router";

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
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
