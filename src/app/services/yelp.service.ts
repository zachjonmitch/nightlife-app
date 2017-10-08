import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class YelpService {

  constructor(private http: Http) { }

  yelpAccessToken() {
    const ID = 'a742sGfFzgpayb0msNepug';
    const secret = 'WL6HOo4Tt3P0h6OVgXB5qhG21tDDQA70jF6qBDhCpC9sKzaSOOK18Vh3hBgHDRyu';
    const grant = "client_credentials";
    const endpoint = 'https://api.yelp.com/oauth2/token';
    const data = "grant_type=client_credentials&client_id=a742sGfFzgpayb0msNepug&client_secret=WL6HOo4Tt3P0h6OVgXB5qhG21tDDQA70jF6qBDhCpC9sKzaSOOK18Vh3hBgHDRyu";
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers })

    this.http.post(endpoint, data, options).subscribe((test) => {
      console.log(test)
    })
  }
}
