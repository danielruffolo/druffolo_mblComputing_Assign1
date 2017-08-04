import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddForumPage } from '../add-forum/add-forum';
import { ViewForumPage } from '../view-forum/view-forum';
import { Forum } from "../../models/forum";
import { ForumService } from "../../services/forums";

@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

// the following code is a work around for page navigation. we use push page as a way of
//reseting the page object to allow the navigation stack to clear
//soemtimes we dont want the user to click back
  params: Object;
 pushPage: any;

  AddForumPage = AddForumPage;
  //declaration of our empty forums array
  forums: Forum[]=[]

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private forumsService: ForumService,
              private modalCtrl: ModalController

            ) {
  }


  ionViewWillEnter() {
    console.log('ionViewDidLoad ForumPage');
    //here we are populating the page with the data from our forums service .
    //we call the load forums method to do so
    this.forums = this.forumsService.loadForums();

  }
//here we are allowing the open of a forum thread by making each thread a clickable model.
//a moel is a dynamic page that can be generated , it is less memory and is destroyed on close
  onOpenForum(forum: Forum, index: number){
    const modal = this.modalCtrl.create(ViewForumPage, {forum: forum, index: index});
    modal.present();
  }

  goToCreate(){
    this.pushPage = AddForumPage;
      this.navCtrl.setRoot(AddForumPage) }



}
