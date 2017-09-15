import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {StocksProvider} from "../../providers/stocks/stocks";

@Component({
  selector: 'page-coins',
  templateUrl: 'coins.html'
})
export class CoinsPage implements OnInit{

   currencyList = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private stocksProvider: StocksProvider,
    public loadingCtrl: LoadingController)
     {
       
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad coin page');
  }


  ngOnInit(){
    this.stocksProvider.getCryptStocks().subscribe( data => this.currencyList = data);
  
}

}
