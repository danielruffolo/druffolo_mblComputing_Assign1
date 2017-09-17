import { Component } from '@angular/core';
import { NavController,NavParams,ToastController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { CoinsPage } from "../coins/coins";
import { ProfilePage } from "../profile/profile";
import { CreateThreadPage } from "../create-thread/create-thread";
import { ThreadsPage } from "../threads/threads";
import { Network } from '@ionic-native/network';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    params: Object;
    pushPage: any;

  constructor(private toast: ToastController,private network: Network, public navCtrl: NavController, public navParams: NavParams) {

  }

  displayNetworkUpdate(connectionState: string){

        let networkType = this.network.type
        this.toast.create({
        message: `you are now ${connectionState} via ${networkType}`,
      }).present();
  }

  ionViewDidEnter(){
      
        this.network.onConnect().subscribe(data => {
          console.log(data)
          this.displayNetworkUpdate(data.type);

      }, error => console.error(error));

      this.network.onDisconnect().subscribe(data => {
          console.log(data)
          this.displayNetworkUpdate(data.type);
      }, error => console.error(error));
      
  }


  // this is where we navigate to and from app elements
  // the main dashboard
  // notice the use of set.Root on the logout function method. this is because we essentially dont want
  //users to be able to press the back button on the sign in page once the jwt is destoryed later on


  create_thread(){
     this.navCtrl.push(CreateThreadPage);
  }

  coins_menu(){
    this.navCtrl.push(CoinsPage);
  }

  view_threads(){
     this.navCtrl.push(ThreadsPage);
  }

  account_menu(){
    this.navCtrl.push(ProfilePage);
  }


  logout_menu(){

    this.pushPage = LoginPage;  
    localStorage.clear();
    
      this.navCtrl.setRoot(LoginPage);

  }


}
