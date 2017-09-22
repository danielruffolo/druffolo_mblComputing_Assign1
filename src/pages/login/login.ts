import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import CryptoJS from 'crypto-js';
//crypto.js houses the hashing algorithm 

  /**Summary
   * Login Component handles both the login request and processing the hashed password
   * to login, we request from the auth service the user object and check to see is the input variables
   * match those in the db
   * if they do, then login is granted
*/


//declaration of the API URL
let login_API_URL = 'http://introtoapps.com/datastore.php?action=load&appid=214231656&objectid=';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  params: Object;
 pushPage: any;

 //data that we get back from login request (we check to see if its a match)
 responseData : any;
 //data that we get from the user form,Input
 userData : any;
 
 userLoginData = {"username": "","password": ""};
//the user login type


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {

  }
  login(){
    //request
    this.http.get(login_API_URL + this.userLoginData.username)
    //json response
      .map(res => res.json()).subscribe(responseData => {
        

        let hashpass = CryptoJS.SHA256(this.userLoginData.password).toString(CryptoJS.enc.Hex);
        //now we hash the login passowrd and compare it to whats in the db
        console.log(hashpass);
        this.userLoginData.password = hashpass;
        console.log(hashpass);
    
        //if they are the same, login
        if (responseData.password == hashpass &&
           responseData.username == this.userLoginData.username)
          {
          
          this.navCtrl.setRoot(HomePage)
          //we set root so that we cannot go back on login
          console.log(responseData);
            //we use browser storage here to store the respose (credentials) in the browser
          localStorage.setItem('userData', JSON.stringify(responseData));
          
          }
      
        else
          console.log('wrong password');
      
    });

  
  }

    signupCall(){ this.navCtrl.push(SignupPage); }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    

  }



}
