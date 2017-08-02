import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Forum } from "../../models/forum";
import { ForumService } from "../../services/forums"

/**
 * Generated class for the ViewForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-forum',
  templateUrl: 'view-forum.html',
})
export class ViewForumPage {
  forum: Forum;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private forumsService: ForumService

            ) {
    this.forum = this.navParams.get('forum');
    this.index = this.navParams.get('index');
  }

  onLeave(){
    this.viewCtrl.dismiss();
  }

  onDelete(){
    this.forumsService.deleteForum(this.index);
    this.viewCtrl.dismiss();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewForumPage');
  }

}
