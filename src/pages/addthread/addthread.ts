import { Component } from '@angular/core';
import {  NavController, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { ViewthreadsPage } from '../viewthreads/viewthreads';
import {Http, Headers} from '@angular/http';
import { NgForm } from "@angular/forms";
import { ForumServiceProvider } from '../../providers/forum-service/forum-service';
import 'rxjs/add/operator/map';

var threadArray = [];


@Component({
  selector: 'page-addthread',
  templateUrl: 'addthread.html',
})
export class AddthreadPage {
  RegDate: String = new Date().toISOString();
  responseData : any;
  threadData = {"title": "","topic": "", "content": ""};


  constructor(public http: Http,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              public forumserviceProvider: ForumServiceProvider) {
  }

  create_Thread(){

    var newThread  = {
      title: this.threadData.title,
      topic: this.threadData.topic,
      content: this.threadData.content
    };


    threadArray.push([newThread]);
     console.log (newThread);
     console.log (threadArray);

    this.forumserviceProvider.postThreadData(threadArray,'addthread').then((result) => {
     this.responseData = result;
     console.log(this.responseData);
     this.navCtrl.push(ViewthreadsPage);
   }, (err) => {
     // Error log
   });

 }


  // presentToast() {
  //   let toast = this.toastCtrl.create({
  //     message: 'You have Registered Successfully',
  //     duration: 3000,
  //     position: 'top'
  //   });
  
  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed toast');
  //   });
  
  //   toast.present();
  // }



  // login(){
  //   //Login page link
  //   this.navCtrl.push(LoginPage);
  // }
}