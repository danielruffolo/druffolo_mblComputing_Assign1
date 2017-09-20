import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ForumServiceProvider } from '../../providers/forum-service/forum-service';
import { ThreadsService } from '../../services/threads';
import { Thread } from "../../models/thread";
import 'rxjs/add/operator/map';
import {Http, Headers} from '@angular/http';




@Component({
  selector: 'page-thread',
  templateUrl: 'thread.html',
})


export class ThreadPage {


  index: number;
  threadList: any = [];
  string_obj:any;


  

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private viewCtrl: ViewController,
               public forumserviceProvider: ForumServiceProvider,
               public threadsService: ThreadsService
              
              ) {
    this.threadList = this.navParams.get('threadList');
    this.index = this.navParams.get('index');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThreadPage');
    this.RequestThread_Instance(this.string_obj);
 

    }

  RequestThread_Instance(string_obj) {
    string_obj = this.threadList;
    this.forumserviceProvider.getThreadData_Instance(string_obj).subscribe( data => this.threadList = data);
    console.log(this.index);
    console.log(this.threadList);
   
    console.log(string_obj);
    
    
  }

  onLeave() {
    this.viewCtrl.dismiss();
  }

}
