import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { emailValidator, matchingPasswords } from '../../_validators/validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  rForm: FormGroup;
  post:any;
  email:string = '';
  username:string = '';
  password:string = '';
  confirmPassword:string = '';
  inputAlert:string = 'This field is required.';
  usernameAlert:string = 'Usernames must be at least 3 characters.';
  uniqueAlert:string = 'Username must be unique.';
  emailAlert:string = 'Email is invalid.';
  passwordAlert:string = 'Passwords must be at least 8 characters.';
  matchAlert:string = 'Passwords do not match.';


  constructor(private fb: FormBuilder, private dataService: UserService) {

    this.rForm = fb.group({
      'email'    : [null, Validators.compose([Validators.required, emailValidator])],
      'username' : [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirmPassword': [null, Validators.required]
    }, {validator: matchingPasswords('password', 'confirmPassword')})
  }

  ngOnInit() {
    
  }

  addPost(post) {
    this.email = post.email;
    this.username = post.username;
    this.password = post.password;
    this.confirmPassword = post.confirmPassword;

    this.dataService.registerNewUser(this.rForm.value).subscribe(
      (data) => console.log(data)
    );
  }
}
