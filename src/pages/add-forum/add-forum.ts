import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,ModalController,LoadingController,ToastController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { ForumService } from "../../services/forums";
import { ForumPage } from "../forum/forum";

/**
 * Generated class for the AddForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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


    this.forumsService.addForum(form.value.title, form.value.description);


this.navCtrl.push(ForumPage);


    console.log(form.value)
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad AddForumPage');
  }

}
