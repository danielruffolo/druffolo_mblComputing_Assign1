import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddForumPage } from '../add-forum/add-forum';
import { Forum } from "../../models/forum";
import { ForumService } from "../../services/forums";

/**
 * Generated class for the ForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  AddForumPage = AddForumPage;
  forums: Forum[]=[]



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private forumsService: ForumService) {
  }


  ionViewWillEnter() {
    console.log('ionViewDidLoad ForumPage');
    this.forums = this.forumsService.loadForums();

  }

  goToCreate(){ this.navCtrl.push(AddForumPage); }



}
