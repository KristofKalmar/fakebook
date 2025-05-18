import {Component, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import {Service} from '../../../service/service';
import User from '../../classes/User';
import Post from '../../classes/Post';
import {MatInput, MatLabel} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';

@Component({
  selector: 'app-create-post',
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<CreatePostComponent>, private service: Service) {}

  user: User = new User();
  post: Post = new Post();
  date: string = "";
  image: File | null = null;

  ngOnInit() {
    this.service.fetchCurrentUser().then(user => {
      this.user = user;
    });

    this.post.attachment = '../../../assets/images/placeholder_post.svg';

    const date = new Date(Date.now());
    this.date = date.getFullYear() + "." + date.getMonth() + 1 + "." + date.getDay() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

  closeModal() {
    this.dialogRef.close();
  }

  onChangeBody(event: Event) {
    const input = event.target as HTMLInputElement;
    this.post.body = input.value;
  }

  onImagePicked(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      this.image = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.post.attachment = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  createPost() {
    this.service.post(this.post, this.image);
    this.closeModal();
  }
}
