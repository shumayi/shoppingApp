import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the FacebookService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FacebookService {

  constructor(public http: Http) {
    console.log('Hello FacebookService Provider');
  }

  getPosts(pageName: string): Observable<any[]> {
    let url = `http://localhost:3000/${pageName}`;

    return this.http
      .get(url)
      .map(response => response.json().posts.data);
  }
}
