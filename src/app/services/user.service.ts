import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  constructor(private http: Http, private authService: AuthService) { }

  registerNewUser(data:any) {
    let body = JSON.stringify(data);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('/api/users/signup', body, options)
  }

  getUsers() {
    let token = this.authService.token;
    let headers = new Headers();
    this.authService.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers })

    return this.http.get('/api/users', options)
  }

}
