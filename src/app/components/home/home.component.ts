import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { YelpService } from '../../services/yelp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService, YelpService]
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private yelpService: YelpService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(user => {
      console.log(user);
    });
  }

  yelpAccessToken() {
    this.yelpService.yelpAccessToken();
  }

}
