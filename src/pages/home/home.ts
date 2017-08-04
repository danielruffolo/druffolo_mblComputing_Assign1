import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AddForumPage } from "../add-forum/add-forum";
import { ForumPage } from "../forum/forum";
import { LoginPage } from "../login/login";

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

      this.navCtrl.push(AddForumPage);

  }

  view_menu(){

      this.navCtrl.push(ForumPage);

  }

  logout_menu(){

    this.pushPage = LoginPage;
      this.navCtrl.setRoot(LoginPage);

  }


}
