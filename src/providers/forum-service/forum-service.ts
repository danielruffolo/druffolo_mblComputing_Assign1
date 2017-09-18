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

  constructor(public http: Http) {
    console.log('Hello ForumServiceProvider Provider');
  }

  public currency: any = [];

  public datastore_addThreadUrl = 'http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid=';
  public datastore_addThreadUrl2 = '&data=';
  public datastore_ViewThreadUrl = 'http://introtoapps.com/datastore.php?action=listall&prefix=thread&appid=214231656';

    

  postThreadData(threadData, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      let thread_objectID = ('thread' +'-'+ threadData.title)
      console.log(thread_objectID);

      this.http.post(this.datastore_addThreadUrl + thread_objectID + this.datastore_addThreadUrl2 + JSON.stringify(threadData), {headers: headers})
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
    return this.http.get(this.datastore_ViewThreadUrl)
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
