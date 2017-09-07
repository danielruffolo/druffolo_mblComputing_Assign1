import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class AuthService {
  


  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
   
      console.log(credentials.username);
      console.log(credentials);
      this.http.post(' http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid='+(credentials.username)+'&data=' + JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });

  }

}