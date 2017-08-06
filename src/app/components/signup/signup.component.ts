import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  rForm: FormGroup;
  post:any;
  email:string = '';
  username:string = '';
  password:string = '';
  password2:string = '';
  inputAlert:string = 'This field is required';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'email'    : [null, Validators.required],
      'username' : [null, Validators.required],
      'password' : [null, Validators.required],
      'password2': [null, Validators.required],
      'validate' : ''
    })
  }

  ngOnInit() {
  }

  addPost(post) {
    this.email = post.email;
    this.username = post.username;
    this.password = post.password;
    this.password2 = post.password2;
  }
}
