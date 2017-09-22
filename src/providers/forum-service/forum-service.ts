


/** Summary-Author:DanielRuffolo-214231656
 * the following is a provider for the forum threads inside deakin
 * datastore. each observable and http function acts as a callable function from the app to 
 * return the desired json data
 */


/**relevent imports for libraries. HEAVY use of observables and rxjs for handeling the response 
of http requests
*/
import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ForumServiceProvider {
  
/**
 * importing the local storage for the current user (this is who is currently logged in)
*/
    currentUser = JSON.parse(localStorage.getItem('userData'));
    constructor(public http: Http) {
    console.log('Hello ForumServiceProvider Provider');
  }

  /**
 * Create a thread function takes the form data and posts data into a thread object.
 * each object is then saved to db 
 * the title of the thread is used in the object ID , hence the need to remove any blank spaces
 * this throws a url error otherwise
*/

  postThreadData(thread) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      let raw_threadTitle = thread.title;
      let cleaned_threadTitle = raw_threadTitle.split(' ').join('_');
      let objID = 'thread-' + this.currentUser.username +'-'+ cleaned_threadTitle;

    this.http.post('http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid='+ objID + '&data=' +JSON.stringify(thread), {headers: headers})
    .subscribe((res) => {
      resolve(res);      
    }, (err) => {
	    console.log(err);
    });
    });

  }

    /**
 * the following saves the comment object to the DB upon creation.
 * the delimiter is used to allow for posting only inside the threads comment object
*/

  postThreadCommentData(comment,cleaned_commentReq_obj) {

    
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let objID = 'threadComments-' + cleaned_commentReq_obj;
      let data=JSON.stringify(comment);
      return this.http.post('http://introtoapps.com/datastore.php?action=append&appid=214231656&objectid='+ objID + '&data=' + data,headers)
      .subscribe((res) => {
      resolve(res);  
    }, (err) => {
	    console.log(err);
    });
  });

  }

      /**
 * the following upon creation of a thread, creates a comment object for that specific thread.
 * notice we grab the thread title, this is the object id for the correct thread under comments
 * we then post a array on init ready for use
*/
  
  bindThreadComment(thread) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      let raw_threadTitle = thread.title;
      let cleaned_threadTitle = raw_threadTitle.split(' ').join('_');
      let objID = 'threadComments'+'-'+ cleaned_threadTitle;
      let comment_init = '[]';

    this.http.post('http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid='+ objID + '&data=' +comment_init, {headers: headers})
    .subscribe((res) => {
      resolve(res);      
    }, (err) => {
	    console.log(err);
    });
    });

  }

        /**
 * the following is a observable using the imported library and rxjs. mainly used for get requests
 * each function calals a specific method to hendle the response data. a very clean approach
 * unfortunately my atempt to use this with post didnt work as well
*/

        /**
 * the following will return the list of objects for threads in the app. we use a prefix to fetch only 
 * the object ID's with the delimiter(thread-) which is automatically appended to the thread object id
 * this then serves the select thread as we pass this id through a index
*/

  getThreadData(){
    return this.http.get('http://introtoapps.com/datastore.php?action=listall&prefix=thread-&appid=214231656')
    .do(this.logResponse)
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError) 
    }

            /**
 * the following will return the relevent thread data on click of the thread in threadlist.
 * the threadlist is a list of all the object ID's and on click, the index is passed and on 
 * load of the modal, the data is loaded in
*/

  getThreadData_Instance( string_obj){
    return this.http.get('http://introtoapps.com/datastore.php?action=load&appid=214231656&objectid=' + string_obj)
    .do(this.logResponse)
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError)      
    }

               /**
 * the following will return the relevent thread data comments on click of the thread .
 * the identifier and the id are passed from the thread instance itself which ensures we load the correct
 * comment response
*/

    getThreadComments( formattedId,identifier){
      console.log (formattedId + identifier);
      return this.http.get('http://introtoapps.com/datastore.php?action=load&appid=214231656&objectid=' + identifier + formattedId)
      .do(this.logResponse)
      .map(this.extractData)
      .do(this.logResponse)
      .catch(this.catchError)      
      }

  private catchError(error : Response | any){
    console.log(error);
    console.log("an error occured");
    return Observable.throw(error.json().error || "network error.");
    }

    private logResponse( res : Response){
      console.log(res);
    }

   private extractData(res:Response){
      return res.json();
     
      }

}
