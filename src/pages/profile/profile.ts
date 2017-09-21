import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from "../login/login";




@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  pushPage: any;

   currentUser = JSON.parse(localStorage.getItem('userData'));

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public authService: AuthServiceProvider) {


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
     console.log(this.currentUser);
    
    

  }

  Deactivate(){
    console.log('your account has been deactivated')
    this.presentConfirmDeactivate();
  }

  presentConfirmDeactivate() {
    let intent = this.currentUser.username;
    console.log(intent);
    let alert = this.alertCtrl.create({
      title: 'Deactivate Account',
      message: 'Are you sure? This will remove your account!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            console.log('Buy clicked');
        
            this.authService.DeleteAccount(intent)

            this.pushPage = LoginPage;  
            localStorage.clear();
            
              this.navCtrl.setRoot(LoginPage);

          }
        }
      ]
    });
    alert.present();
  }

}
