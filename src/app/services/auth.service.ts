import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isAuthenticated: boolean;
  token: any;

  constructor(private router: Router, private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('jwtToken'));
  }

  authenticateUser(data:any) {
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let options = new RequestOptions({headers: headers});

    return this.http.post('/api/users/login', body, options).subscribe(
      (data) => {
        if (data) {
          const token = data.json().token;
          localStorage.setItem('jwtToken', token);
          this.isAuthenticated = true;
          this.token = token;
          this.router.navigate(['/']);
        }
      }
    );
  }

  logout() {
    console.log('ds testing')
    localStorage.removeItem('jwtToken')
    this.isAuthenticated = false;
  }
}
