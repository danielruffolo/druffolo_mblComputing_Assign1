import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from "../login/login";



  /**Summary
   * Profile page shows how we can see data stored in the user local storage
   * users can view their account details from here as well as deactivate their accoint
*/

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  pushPage: any;

   currentUser = JSON.parse(localStorage.getItem('userData'));
  //import local user data

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public authService: AuthServiceProvider) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
     console.log(this.currentUser);
    
    

  }

  Deactivate(){
    this.presentConfirmDeactivate();
  }

  presentConfirmDeactivate() {
    //grab the object id of the person we want to delete
    let intent = this.currentUser.username;
    console.log(intent);
    //post a allert letting the user know your about to delete 
    let alert = this.alertCtrl.create({
      title: 'Deactivate Account',
      message: 'Are you sure? This will remove your account!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
 
          }
        },
        {
          text: 'Remove',
          handler: () => {
      
        //request from the authservice to delete the account currently logged in as
        //pass in the intent variable which is the uder object id
            this.authService.DeleteAccount(intent)

            this.pushPage = LoginPage;  
            localStorage.clear();
            //delete the local storage
            
              this.navCtrl.setRoot(LoginPage);
              //clrear the page stack and start fresh

          }
        }
      ]
    });
    alert.present();
  }

}
