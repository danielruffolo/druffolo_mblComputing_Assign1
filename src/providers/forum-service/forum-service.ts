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
  

    currentUser = JSON.parse(localStorage.getItem('userData'));
    constructor(public http: Http) {
    console.log('Hello ForumServiceProvider Provider');
  }

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

  getThreadData(){
    return this.http.get('http://introtoapps.com/datastore.php?action=listall&prefix=thread-&appid=214231656')
    .do(this.logResponse)
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError) 
    }

  getThreadData_Instance( string_obj){
    return this.http.get('http://introtoapps.com/datastore.php?action=load&appid=214231656&objectid=' + string_obj)
    .do(this.logResponse)
    .map(this.extractData)
    .do(this.logResponse)
    .catch(this.catchError)      
    }

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
