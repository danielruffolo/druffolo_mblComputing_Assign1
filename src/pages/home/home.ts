import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AddForumPage } from "../add-forum/add-forum";
import { ForumPage } from "../forum/forum";
import { LoginPage } from "../login/login";
import { CoinsPage } from "../coins/coins";
import { ProfilePage } from "../profile/profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  params: Object;
 pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  // this is where we navigate to and from app elements
  // the main dashboard
  // notice the use of set.Root on the logout function method. this is because we essentially dont want
  //users to be able to press the back button on the sign in page once the jwt is destoryed later on

  create_menu(){

      this.navCtrl.push(AddForumPage);

  }

  coins_menu(){

      this.navCtrl.push(CoinsPage);

  }

  view_menu(){

      this.navCtrl.push(ForumPage);

  }

  account_menu(){

      this.navCtrl.push(ProfilePage);

  }


  logout_menu(){

    this.pushPage = LoginPage;
      this.navCtrl.setRoot(LoginPage);

  }


}
