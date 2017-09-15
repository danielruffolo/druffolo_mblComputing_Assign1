import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  currentUser = JSON.parse(localStorage.getItem('userData'));

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // const currentUser = JSON.parse(localStorage.getItem('userData'));


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log(this.currentUser);
    
    

  }

  Deactivate(){
    console.log('your account has been deactivated')
  }

}
