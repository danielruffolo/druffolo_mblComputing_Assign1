import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  params: Object;
 pushPage: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createCall(){
    this.pushPage = HomePage;
    this.navCtrl.setRoot(HomePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
