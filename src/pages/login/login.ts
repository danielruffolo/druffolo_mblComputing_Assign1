import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { Http, Headers } from '@angular/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import 'rxjs/add/operator/map';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

let login_API_URL = 'http://introtoapps.com/datastore.php?action=load&appid=214231656&objectid=Users';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  params: Object;
 pushPage: any;

 responseData : any;
 userLoginData = {"username": "","password": ""};



  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public http: Http,
              public logServiceProvider:LogServiceProvider) {


  }
  login(){

    this.http.get(login_API_URL)
      .map(res => res.json()).subscribe(responseData => {
        console.log(responseData);
     
        if (responseData.password == this.userLoginData.password &&
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
