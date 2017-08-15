import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class DataService {
  isAuthenticated: boolean;

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwtToken'));
  }

  registerNewUser(data:any) {
    let body = JSON.stringify(data);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('/api/users/signup', body, options)
  }

  authenticateUser(data:any) {
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let options = new RequestOptions({headers: headers});

    return this.http.post('/api/users/login', body, options).subscribe(
      (data) => { 
        const token = data.json().token;
        localStorage.setItem('jwtToken', token);
        this.isAuthenticated = true;
      }
    );
  }
}
