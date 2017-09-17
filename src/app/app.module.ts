import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { HttpModule } from '@angular/http';

// import pages
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { CoinsPage } from '../pages/coins/coins';
import { ProfilePage } from '../pages/profile/profile';
// _________________________________________________________________//
//import providers
import { StocksProvider } from '../providers/stocks/stocks';
import { AuthService } from '../providers/auth-service/auth-service';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { ForumsProvider } from '../providers/forums/forums';
import { UsersService } from "../services/users";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    CoinsPage,
    SignupPage,
    ProfilePage
    
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    CoinsPage,
    SignupPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    ToastController,
    SplashScreen,
    StocksProvider,
    Network,
    AuthService,
    ForumsProvider,
    UsersService

    
  ]
})
export class AppModule {}
