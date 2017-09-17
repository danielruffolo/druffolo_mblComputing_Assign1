import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from "../../models/user";




@Injectable()
export class AuthService {
  
  private Users: User[] = [];
  
  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

  addUser(username: string,password: string,firstname: string,lastname: string,email: string,timestamp: string)
  
              {
                   const user = new User(
                       
                      username,
                      password,
                      firstname,
                      lastname,
                      email,
                      timestamp);
                   this.Users.push(user);
                   console.log(user);
  
               }



  postData(user) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
   
      this.http.post(' http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid='+(user.username)+'&data=' + JSON.stringify(user) , {headers: headers})
        .subscribe(res => {
          resolve();
        }, (err) => {
          reject(err);
        });
    });

  }

}