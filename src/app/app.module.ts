import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import pages
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';

import { ForumPage } from '../pages/forum/forum';
import { AddForumPage } from '../pages/add-forum/add-forum';
import { ViewForumPage } from '../pages/view-forum/view-forum';
// _________________________________________________________________//
//import providers
import { ForumService } from "../services/forums";
import { StocksProvider } from '../providers/stocks/stocks';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,

    ForumPage,
    AddForumPage,
    ViewForumPage,
    SignupPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,

    ForumPage,
    AddForumPage,
    ViewForumPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ForumService,
    StocksProvider
  ]
})
export class AppModule {}
