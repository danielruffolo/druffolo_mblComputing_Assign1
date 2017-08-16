import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {StocksProvider} from "../../providers/stocks/stocks";

@Component({
  selector: 'page-coins',
  templateUrl: 'coins.html'
})
export class CoinsPage implements OnInit{

  private currency: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private stocksProvider: StocksProvider

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad coin page');
  }


  ngOnInit(){
    this.stocksProvider.getItem().subscribe(data=>{
      console.log(data);
      this.currency=data;
    })

}
}
