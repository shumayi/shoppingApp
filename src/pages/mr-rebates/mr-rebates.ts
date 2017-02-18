import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacebookService } from './../../providers/facebook-service'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
/*
  Generated class for the MrRebates page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mr-rebates',
  templateUrl: 'mr-rebates.html',
  providers: [FacebookService]
})
export class MrRebatesPage {

  public posts: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public facebookService: FacebookService) {
    this.posts = this.facebookService
      .getPosts('mrrebates')
      .map(data => data.map(this.mapPosts));
  }

  mapPosts = (post) => {
    return {
      from: post.from,
      time: post.created_time * 1000,
      message: post.message,
      photos: this.getPhotos(post),
      link: post.link
    };
  }

  getPhotos = (post) => {
    if (!post.attachments) {
      return [];
    }

    let attachments = post.attachments.data[0].subattachments || post.attachments;

    return attachments.data
      .map(x => x.media.image);
  }

}
