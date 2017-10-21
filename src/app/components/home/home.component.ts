import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { YelpService } from '../../services/yelp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService, YelpService]
})
export class HomeComponent implements OnInit {
  rForm: FormGroup;
  city:string = '';
  state:string= '';
  yelpData:any;

  constructor(private fb: FormBuilder, private userService: UserService, private yelpService: YelpService) { 
    this.rForm = fb.group({
      'city'    : [null, Validators.required],
      'state' : [null, Validators.required]
    });
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(user => {
      console.log(user);
    });
  }

  yelpSearchAPI(data) {
    console.log(data)
    this.yelpService.yelpSearchAPI(data).subscribe((yelpData) => {
      const body = JSON.parse(yelpData["_body"])
      this.yelpData = body
      console.log(this.yelpData)
    });
  }

}
