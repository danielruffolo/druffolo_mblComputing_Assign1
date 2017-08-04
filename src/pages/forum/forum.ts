import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddForumPage } from '../add-forum/add-forum';
import { ViewForumPage } from '../view-forum/view-forum';
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

  params: Object;
 pushPage: any;

  AddForumPage = AddForumPage;
  forums: Forum[]=[]



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private forumsService: ForumService,
              private modalCtrl: ModalController

            ) {
  }


  ionViewWillEnter() {
    console.log('ionViewDidLoad ForumPage');
    this.forums = this.forumsService.loadForums();

  }

  onOpenForum(forum: Forum, index: number){
    const modal = this.modalCtrl.create(ViewForumPage, {forum: forum, index: index});
    modal.present();
  }

  goToCreate(){
    this.pushPage = AddForumPage;
      this.navCtrl.setRoot(AddForumPage) }



}
