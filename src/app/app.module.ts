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
import { ForumPage } from '../pages/forum/forum';
import { AddForumPage } from '../pages/add-forum/add-forum';
import { ViewForumPage } from '../pages/view-forum/view-forum';
import { CoinsPage } from '../pages/coins/coins';
import { ProfilePage } from '../pages/profile/profile';
// _________________________________________________________________//
//import providers
import { ForumService } from "../services/forums";
import { StocksProvider } from '../providers/stocks/stocks';
import { AuthService } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    CoinsPage,
    ForumPage,
    AddForumPage,
    ViewForumPage,
    SignupPage,
    ProfilePage
    

  ],
  imports: [
    BrowserModule,
    HttpModule,
    
   
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    CoinsPage,
    ForumPage,
    AddForumPage,
    ViewForumPage,
    SignupPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    ToastController,
    SplashScreen,
    ForumService,
    StocksProvider,
    Network,
    AuthService
  ]
})
export class AppModule {}
