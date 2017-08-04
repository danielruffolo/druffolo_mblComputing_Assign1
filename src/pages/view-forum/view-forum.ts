import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Forum } from "../../models/forum";
import { ForumService } from "../../services/forums"

@Component({
  selector: 'page-view-forum',
  templateUrl: 'view-forum.html',
})
export class ViewForumPage {
  // this is the modal for the forum page
  // here we are passing the forum object, recieving the object specific to the index passed
  // it should be noted that delete and coment functions are not added in as they require a profile service
  //to bind to. this has been left until the project requires development of a server/API
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
