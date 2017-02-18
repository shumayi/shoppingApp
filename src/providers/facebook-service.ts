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
  private accessToken = '384084705293234|wSPHeNducv92NCFwNL27aGGCrXU';

  private graphUrl = 'https://graph.facebook.com/';
  private graphQuery = `?access_token=${this.accessToken}&date_format=U&fields=posts{from,created_time,message,attachments,link}`;

  constructor(public http: Http) {
    console.log('Hello FacebookService Provider');
  }

  getPosts(pageName: string): Observable<any[]> {
    let url = this.graphUrl + pageName + this.graphQuery;

    return this.http
      .get(url)
      .map(response => response.json().posts.data);
  }
}
