import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StocksProvider} from "../../providers/stocks/stocks";


@Component({
  selector: 'page-create-thread',
  templateUrl: 'create-thread.html',
})
export class CreateThreadPage {


  currentUser = JSON.parse(localStorage.getItem('userData'));
  
  currencyList: string;
  RegDate: String = new Date().toISOString();
  responseData : any;
  thread = {"title": "","createdBy_username": this.currentUser.username,"content": "","created": this.RegDate};

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private stocksProvider: StocksProvider,) {
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad CreateThreadPage');

  }

  ngOnInit(){
    // this.stocksProvider.getCryptStocks()
    // .subscribe( data => this.currencyList = data);
    // console.log (this.currencyList);  
}

    createThread_Form() {
    console.log(this.thread);

  }

  

}
