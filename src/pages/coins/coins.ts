import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, LoadingController,ModalController,AlertController} from 'ionic-angular';
import {StocksProvider} from "../../providers/stocks/stocks";
import { ThreadsService } from '../../services/threads';
import { Thread } from "../../models/thread";
import { ForumServiceProvider } from '../../providers/forum-service/forum-service';
import { ViewthreadsPage } from "../viewthreads/viewthreads";
import { HomePage } from "../home/home";






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
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public forumserviceProvider: ForumServiceProvider,
    private alertCtrl: AlertController
  )
     {
       
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad coin page');
  }


  ngOnInit(){

    let loader = this.loadingCtrl.create({
      content: 'Getting latest entries...',
      duration: 10000
    });
  
    loader.present().then(() => {
      this.stocksProvider.getCryptStocks()
        .subscribe(data => {
          this.currencyList = data;
        });
      loader.dismiss();
      
    });
  }

  on_ClickCoin(currencyList, index:number){
     
    let title = currencyList.name + ' is currently at' + currencyList.percent_change_1h;
    let description = 'this is a generated topic relating to ' + currencyList.name + 
    ' regarding the change of ' + currencyList.percent_change_1h + ' in the past hour ' ;
    
    this.addThread(title,description);
    


  }

  addThread(title: string,description: string)
  
  {
       const thread = new Thread(title, description);
       console.log(thread);
       this.presentConfirm(thread);

      
      

   
     
       
   }

   presentConfirm(thread) {
    let alert = this.alertCtrl.create({
      title: 'Create a Thread',
      message: 'Do you want to create a thread for the following: ' + thread.title,
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.navCtrl.push(HomePage);
            
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.forumserviceProvider.postThreadData(thread)
            this.forumserviceProvider.bindThreadComment(thread)
            this.navCtrl.push(ViewthreadsPage);
            
     
          }
        }
      ]
    });
    alert.present();
  }
  
}

