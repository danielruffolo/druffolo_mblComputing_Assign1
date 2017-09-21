import { Component } from '@angular/core';
import {  NavController, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { ViewthreadsPage } from '../viewthreads/viewthreads';
import {Http, Headers} from '@angular/http';
import { NgForm } from "@angular/forms";
import { ForumServiceProvider } from '../../providers/forum-service/forum-service';
import { ThreadsService } from '../../services/threads';
import { Thread } from "../../models/thread";



import 'rxjs/add/operator/map';


@Component({
  selector: 'page-addthread',
  templateUrl: 'addthread.html',
})

export class AddthreadPage {



 
  
  constructor(public http: Http,
              public navCtrl: NavController,
              public toastCtrl: ToastController,
              public forumserviceProvider: ForumServiceProvider,
              public threadsService: ThreadsService) {
  }

  onSubmit(form: NgForm) {
        
        this.addThread(form.value.title, form.value.description);
       
        form.reset();
    
    }

    addThread(title: string,description: string)
     
     {
          const thread = new Thread(title, description);
          console.log(thread);

          this.forumserviceProvider.postThreadData(thread)
          this.forumserviceProvider.bindThreadComment(thread)
          

          //lets to the http post
        

          
          
      }
}