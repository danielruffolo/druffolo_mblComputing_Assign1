import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ForumServiceProvider } from '../../providers/forum-service/forum-service';
import { ThreadsService } from '../../services/threads';
import { Thread } from "../../models/thread";
import { Comment } from "../../models/comment";
import 'rxjs/add/operator/map';
import {Http, Headers} from '@angular/http';
import { NgForm } from "@angular/forms";





@Component({
  selector: 'page-thread',
  templateUrl: 'thread.html',
})


export class ThreadPage {
  

  currentUser = JSON.parse(localStorage.getItem('userData'));
  


  index: number;
  threadList: any = [];
  commentList: any= [];
  
  string_obj:string;
  identifier:string;
  commentReq_obj:any;
  comment_author:any;


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
    this.RequestThread_Instance_comments(this.string_obj,this.identifier);
    

    }



  RequestThread_Instance(string_obj) {
    string_obj = this.threadList;
    console.log(string_obj);
    
    this.forumserviceProvider.getThreadData_Instance(string_obj).subscribe( data => this.threadList = data);
    
  }

  RequestThread_Instance_comments(string_obj,identifier) {
    identifier = "threadComments-";
    string_obj = this.threadList;
    console.log(string_obj);
    
    var formattedId = string_obj.split("-").pop();
    console.log(formattedId);
    this.forumserviceProvider.getThreadComments(formattedId,identifier).subscribe( data => this.commentList = data);
    
    
    
    
  }



  onSubmitComment(form: NgForm) {
    this.addThreadComment(form.value.comment_content,this.commentReq_obj,this.comment_author);
    form.reset();

}

addThreadComment(comment_content: string,comment_author: string,commentReq_obj )

{
    
    commentReq_obj = this.threadList.title  ;  
    let cleaned_commentReq_obj = commentReq_obj.split(' ').join('_'); 
    comment_author = this.currentUser.username;
    const comment = new Comment(comment_content,comment_author);
    console.log(comment);
    console.log(cleaned_commentReq_obj);
    
     this.forumserviceProvider.postThreadCommentData(comment,cleaned_commentReq_obj)
    
     
 }

  onLeave() {
    this.viewCtrl.dismiss();
  }

}
