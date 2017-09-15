import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class StocksProvider {

  public currency: any = [];
  private curr_url: string = "https://api.coinmarketcap.com/v1/ticker/";

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

    getCryptStocks(){
    return this.http.get(this.curr_url)
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
