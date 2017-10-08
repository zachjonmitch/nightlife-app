import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  post:any;
  email:string = '';
  password:string = '';
  notFoundAlert:string = 'This email and password combination does not match our records';
  

  constructor(private fb: FormBuilder, private dataService: AuthService) {

    this.rForm = fb.group({
      'email'    : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  ngOnInit() {
    
  }

  authenticateUser(post) {
    this.email = post.email;
    this.password = post.password;

    console.log(this.rForm)

    this.dataService.authenticateUser(this.rForm.value)
    
  }

  logout() {
    this.dataService.logout()
  }
}
