import { Comment } from "../models/comment";
import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';


@Injectable()
export class ThreadsService {

    constructor(public http: Http) {
        console.log('Hello ForumServiceProvider Provider');
      }

/**The following Services act as thread initialisers for the app.
 * we extract the form data and using a modal, bind the data to a object of thread or comment
*/

    addThread(comment_content: string,comment_author: string)
            
            {
               
                 const comment = new Comment(comment_content,comment_author);     
             }
}

