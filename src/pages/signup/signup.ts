import { Component } from '@angular/core';
import {  NavController, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service/auth-service';
import {Http, Headers} from '@angular/http';
import { NgForm } from "@angular/forms";
import { UsersService } from "../../services/users";

import 'rxjs/add/operator/map';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  RegDate: String = new Date().toISOString();
  user: any;


  constructor(public http: Http,public navCtrl: NavController, public authService:AuthService,public toastCtrl: ToastController, private usersService: UsersService, ) {
  }

  onSubmit(form: NgForm) {
    
    
        this.authService.addUser(form.value.firstname,
                                   form.value.lastname, 
                                   form.value.email,
                                   form.value.username,
                                   form.value.password,
                                   form.value.timestamp);
        
        form.reset();

        this.authService.postData(this.user);
       
        
        console.log('user added');
    
    this.navCtrl.push(LoginPage);
    this.presentToast();
    
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