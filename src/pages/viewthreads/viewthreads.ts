import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ForumServiceProvider} from "../../providers/forum-service/forum-service";


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

  constructor(public navCtrl: NavController, public navParams: NavParams,public forumServiceProvider: ForumServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewthreadsPage');
  }

  ngOnInit(){
    this.forumServiceProvider.getThreadData().subscribe( data => this.threadList = data);
    
  
}

}
