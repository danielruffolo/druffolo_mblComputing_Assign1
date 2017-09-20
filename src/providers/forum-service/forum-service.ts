import { Injectable } from '@angular/core';
import { Http, Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ForumServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

 

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
         // Call map on the response observable to get the parsed object.
    // Subscribe to the observable to get the parsed object and use it.
    .subscribe((res) => {
      resolve(res);      
    }, (err) => {
	    console.log(err);
    });
    });

  }

  getThreadData(){
    return this.http.get('http://introtoapps.com/datastore.php?action=listall&prefix=thread&appid=214231656')
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

  private catchError(error : Response | any){
    console.log(error);
    console.log("something went very wrong");
    return Observable.throw(error.json().error || "network error.");
    }

    private logResponse( res : Response){
      console.log(res);
    }

   private extractData(res:Response){
      return res.json();
     
      }

}
