import { Component } from '@angular/core';
import {  NavController, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service/auth-service';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  RegDate: String = new Date().toISOString();
  responseData : any;
  userData = {"username": "","password": "", "fname": "", "lname": "","email": "","membersince": this.RegDate};


  constructor(public http: Http,public navCtrl: NavController, public authService:AuthService,public toastCtrl: ToastController ) {
  }

  signup(){
      this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      this.navCtrl.push(LoginPage);
      this.presentToast();
   }, (err) => {
     // Error log
   });

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'You have Registered Successfully',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }



  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }
}