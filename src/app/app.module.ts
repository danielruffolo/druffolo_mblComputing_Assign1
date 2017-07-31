import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ForumPage } from '../pages/forum/forum';
import { AddForumPage } from '../pages/add-forum/add-forum';
import { ViewForumPage } from '../pages/view-forum/view-forum';
// _________________________________________________________________//
//import providers
import { ForumService } from "../services/forums";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ForumPage,
    AddForumPage,
    ViewForumPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ForumPage,
    AddForumPage,
    ViewForumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ForumService
  ]
})
export class AppModule {}
