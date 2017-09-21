import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { ForumServiceProvider} from "../../providers/forum-service/forum-service";
import { Thread } from "../../models/thread";
import {ThreadPage} from "../thread/thread";

/**
 * Generated class for the ViewthreadsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-viewthreads',
  templateUrl: 'viewthreads.html',
})
export class ViewthreadsPage {

  public threadList: any = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public forumServiceProvider: ForumServiceProvider,
              public modalCtrl: ModalController,
              

              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewthreadsPage');
  }

  ngOnInit(){
     this.forumServiceProvider.getThreadData().subscribe( data => this.threadList = data);
  
}

on_Viewthread(threadList, index:number){
  const modal = this.modalCtrl.create(ThreadPage, {threadList,index:index});
  modal.present();
}

}
