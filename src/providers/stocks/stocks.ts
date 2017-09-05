import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';



@Injectable()
export class StocksProvider {

  public currency: any = [];

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getItem(){
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/').map(res => res.json());
  }


}
