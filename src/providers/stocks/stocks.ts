/** Summary-Author:DanielRuffolo-214231656
 * the following is a provider for getting the coin data from the coin api whic is a public api .
 * more information in readme
 * again, this acts as a callable service to grab the data from the components of the app
 */


 /**relevent imports for libraries. HEAVY use of observables and rxjs for handeling the response 
of http requests
*/
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class StocksProvider {

  //declare a array to put all the data from the response 
  public currency: any = [];
  //url for calling data
  private curr_url: string = "https://api.coinmarketcap.com/v1/ticker/";

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  /**Observable
   * this returns in the response payload the cryptocurrency data to a list view
   * we reused the code here from the other service as observables are efficient
*/

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
/**the methods are predefied as part of RXJS
 * each handles errors, logs the response and converts the response data into readable JSON array format
*/
   private extractData(res:Response){
      return res.json();
     
      }


}
