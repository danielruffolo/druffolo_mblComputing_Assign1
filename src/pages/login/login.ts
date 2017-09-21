import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { Http, Headers } from '@angular/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
import 'rxjs/add/operator/map';
import CryptoJS from 'crypto-js';



let login_API_URL = 'http://introtoapps.com/datastore.php?action=load&appid=214231656&objectid=';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  params: Object;
 pushPage: any;

 responseData : any;
 userData : any;
 
 userLoginData = {"username": "","password": ""};



  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {


  }
  login(){

   


    this.http.get(login_API_URL + this.userLoginData.username)
    // console.log(this.userLoginData.username)
      .map(res => res.json()).subscribe(responseData => {

        let hashpass = CryptoJS.SHA256(this.userLoginData.password).toString(CryptoJS.enc.Hex);
        console.log(hashpass);
        this.userLoginData.password = hashpass;
        console.log(hashpass);
    
   
    

     
        if (responseData.password == hashpass &&
           responseData.username == this.userLoginData.username)
          {

          this.navCtrl.setRoot(HomePage)
          console.log(responseData);
       
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
