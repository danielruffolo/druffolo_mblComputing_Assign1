import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,ModalController,LoadingController,ToastController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { ForumService } from "../../services/forums";
import { ForumPage } from "../forum/forum";



@Component({
  selector: 'page-add-forum',
  templateUrl: 'add-forum.html',
})
export class AddForumPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
               private loadingCtrl: LoadingController,
               private toastCtrl: ToastController,
               private forumsService: ForumService) {
  }


  onSubmit(form: NgForm){
// on submit of the forum , we send the data from the form to our forums service class which acts as a
//middle man between client and server side

    this.forumsService.addForum(form.value.title,
      form.value.author,
      form.value.description,
      form.value.dateCreated,
      form.value.coins,
      form.value.keyword1,
      form.value.keyword2,
      form.value.keyword3);
      //i have included key words here as im experamenting with python a way to extract key words
      //from the form . work in progress and difficult to do so behind the scenes in a non manual manner

this.navCtrl.push(ForumPage);
    console.log(form.value)
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad AddForumPage');
  }

}
