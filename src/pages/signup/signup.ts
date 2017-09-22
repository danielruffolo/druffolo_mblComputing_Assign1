import { Component } from '@angular/core';
import {  NavController, ToastController,LoadingController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import {Http, Headers} from '@angular/http';
import { NgForm } from "@angular/forms";
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import CryptoJS from 'crypto-js';


import 'rxjs/add/operator/map';


  /**Summary
  *signup is the component that allows you to create a user object to login to the app
*/

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  //declare date object so we can record date of registration
  RegDate: String = new Date().toISOString();
  responseData : any;
  //declare type user data so we can handle the form data
  userData = {"username": "","password": "", "fname": "","lname": "","email": "","membersince":this.RegDate };


  constructor(public http: Http,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              public authService: AuthServiceProvider) {
  }

  signup(){

    //first step is to take the input password and hash it using SHA256
    //this will ensure no one can see whats in the db password
    let hashpass = CryptoJS.SHA256(this.userData.password).toString(CryptoJS.enc.Hex);
    this.userData.password = hashpass;



    //we overwrote the type so now we can access our hash password in the userdata type
    this.authService.postUserLoginData(this.userData,'signup').then((result) => {

      //now we save the response data so that we can post that data to the auth service
     this.responseData = result;

     //if success after the authservice has ran, login

     this.navCtrl.push(LoginPage);
   }, (err) => {
    
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