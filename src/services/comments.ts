import { Comment } from "../models/comment";
import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';


@Injectable()
export class ThreadsService {

    constructor(public http: Http) {
        console.log('Hello ForumServiceProvider Provider');
      }



    addThread(comment_content: string,comment_author: string)
            
            {
                
                 const comment = new Comment(comment_content,comment_author);
                 
               
     
                 
                 
             }

             

            //  loadThreads(){
            //      return this.threads.slice();
            //  }
}

