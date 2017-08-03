import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AddForumPage } from "../add-forum/add-forum";
import { ForumPage } from "../forum/forum";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  params: Object;
 pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  create_menu(){
    this.pushPage = AddForumPage;
      this.navCtrl.setRoot(AddForumPage)

  }

  view_menu(){
    this.pushPage = AddForumPage;
      this.navCtrl.setRoot(ForumPage)

  }


}
