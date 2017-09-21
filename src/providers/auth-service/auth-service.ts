import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import CryptoJS from 'crypto-js';


let datastore_addUserUrl = 'http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid=';
let datastore_addUserUrl2 = '&data=';



@Injectable()
export class AuthServiceProvider {

  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

  
  

  postData(credentials, type) {

  

    return new Promise((resolve, reject) => {
      let headers = new Headers();


      this.http.post(datastore_addUserUrl + credentials.username + datastore_addUserUrl2 + JSON.stringify(credentials), {headers: headers})
         // Call map on the response observable to get the parsed object.
    // Subscribe to the observable to get the parsed object and use it.
    .subscribe((res) => {
      resolve(res);      
    }, (err) => {
	    console.log(err);
    });
    });

  }

}




