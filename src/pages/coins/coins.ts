import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
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
    private stocksProvider: StocksProvider,
    public loadingCtrl: LoadingController)
     {
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad coin page');
  }


  ngOnInit(){

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000

    });

    loader.present();



    this.stocksProvider.getItem().subscribe(data=>{
      console.log(data);
      this.currency=data;
        loader.dismiss();
    })

}
}
