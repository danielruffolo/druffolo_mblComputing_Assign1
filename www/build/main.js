webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_forum__ = __webpack_require__(265);

var ForumService = (function () {
    function ForumService() {
        this.forums = [];
    }
    ForumService.prototype.addForum = function (title, description) {
        var forum = new __WEBPACK_IMPORTED_MODULE_0__models_forum__["a" /* Forum */](title, description);
        this.forums.push(forum);
    };
    ForumService.prototype.loadForums = function () {
        return this.forums.slice();
    };
    return ForumService;
}());

//# sourceMappingURL=forums.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      \n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n\n<!--  -->\n    <div padding class="dash-coinUpdates">\n\n      <h1  style="color:white;">Coin Prices</h1>\n\n\n      <ion-row >\n\n            <ion-card class="dash_cardUpdates">\n            <ion-card-content>\n\n              <!-- <ion-col col-12></ion-col> -->\n\n              <div class="ion-col col-12 item item-text-wrap"><p>Coin: BTC   Price: 2010.30</p></div>\n\n            </ion-card-content>\n\n          </ion-card>\n\n      </ion-row>\n\n    </div>\n\n    <div class="dash-trending">\n      <ion-row padding style="color:white;">\n        <div>\n          <h1>Trending</h1>\n          <p>most popular</p>\n        </div>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="http://via.placeholder.com/50x50">\n    </ion-avatar>\n    <h2>Marty McFly</h2>\n    <p>November 5, 1955</p>\n  </ion-item>\n\n  <img src="http://via.placeholder.com/110x110">\n\n  <ion-card-content>\n    <p>Dummy Crypto Currency stock information</p>\n  </ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="thumbs-up"></ion-icon>\n        <div>12 Likes</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="text"></ion-icon>\n        <div>4 Comments</div>\n      </button>\n    </ion-col>\n    <ion-col center text-center>\n      <ion-note>\n        11h ago\n      </ion-note>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n      </ion-row>\n\n    </div>\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_forum_forum__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_forum_add_forum__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_view_forum_view_forum__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_forums__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import pages






// _________________________________________________________________//
//import providers

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_forum_forum__["a" /* ForumPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_forum_add_forum__["a" /* AddForumPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_view_forum_view_forum__["a" /* ViewForumPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_forum_forum__["a" /* ForumPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_forum_add_forum__["a" /* AddForumPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_view_forum_view_forum__["a" /* ViewForumPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__services_forums__["a" /* ForumService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forum_forum__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_forum_add_forum__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Forum', component: __WEBPACK_IMPORTED_MODULE_6__pages_forum_forum__["a" /* ForumPage */] },
            { title: 'Create a Post', component: __WEBPACK_IMPORTED_MODULE_7__pages_add_forum_add_forum__["a" /* AddForumPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forum; });
var Forum = (function () {
    function Forum(title, description) {
        this.title = title;
        this.description = description;
    }
    return Forum;
}());

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ViewForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ViewForumPage = (function () {
    function ViewForumPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewForumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewForumPage');
    };
    return ViewForumPage;
}());
ViewForumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-forum',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/view-forum/view-forum.html"*/'<!--\n  Generated template for the ViewForumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>viewForum</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/view-forum/view-forum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ViewForumPage);

//# sourceMappingURL=view-forum.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_forums__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForumPage = (function () {
    function ForumPage(navCtrl, navParams, forumsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forumsService = forumsService;
        this.AddForumPage = __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */];
        this.forums = [];
    }
    ForumPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad ForumPage');
        this.forums = this.forumsService.loadForums();
    };
    ForumPage.prototype.goToCreate = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */]); };
    return ForumPage;
}());
ForumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forum',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/forum/forum.html"*/'<!--\n  Generated template for the ForumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>forum</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-scroll class="forum_scroll" scrollX="true" scrollY="true">\n\n    <ion-row>\n\n         <ion-card padding *ngFor="let forum of forums; let i = index" (click)="onOpenForum(forum, i)">\n\n      <ion-item>\n      <ion-avatar item-start>\n       <img src="http://via.placeholder.com/50x50">\n      </ion-avatar>\n      <h2>{{ forum.title }}</h2>\n      <p>November 5, 1955</p>\n      </ion-item>\n\n      <img src="http://via.placeholder.com/110x110">\n\n      <ion-card-content>\n      <p>{{ forum.description }}</p>\n      </ion-card-content>\n\n      <ion-row>\n      <ion-col>\n       <button ion-button icon-left clear small>\n         <ion-icon name="thumbs-up"></ion-icon>\n         <div>12 Likes</div>\n       </button>\n      </ion-col>\n      <ion-col>\n       <button ion-button icon-left clear small>\n         <ion-icon name="text"></ion-icon>\n         <div>4 Comments</div>\n       </button>\n      </ion-col>\n      <ion-col center text-center>\n       <ion-note>\n         11h ago\n       </ion-note>\n      </ion-col>\n      </ion-row>\n\n      </ion-card>\n    </ion-row>\n\n\n</ion-scroll>\n\n\n\n\n\n\n\n  <!-- align to the bottom of the page -->\n\n  <ion-footer>\n\n    <!-- <button ion-button block color="primary" (click)="goToCreate()">\n      Create a new forum post\n    </button> -->\n\n\n\n    <div  style=" width: 100%; background-color: #1abc9c;">\n        <div style="text-align: center">\n\n          <ion-grid>\n  <ion-row>\n    <ion-col>\n      <button ion-button full (click)="goToCreate()">Create a post</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button full>Options</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n        </div>\n    </div>\n\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/forum/forum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_forums__["a" /* ForumService */]])
], ForumPage);

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_forums__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forum_forum__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddForumPage = (function () {
    function AddForumPage(navCtrl, navParams, modalCtrl, loadingCtrl, toastCtrl, forumsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.forumsService = forumsService;
    }
    AddForumPage.prototype.onSubmit = function (form) {
        this.forumsService.addForum(form.value.title, form.value.description);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forum_forum__["a" /* ForumPage */]);
        console.log(form.value);
    };
    AddForumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddForumPage');
    };
    return AddForumPage;
}());
AddForumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-forum',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/add-forum/add-forum.html"*/'<!--\n  Generated template for the AddForumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create a Post</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Title</ion-label>\n      <ion-input\n        type="text"\n        placeholder="Name of your post"\n        name="title"\n        ngModel\n        required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>content</ion-label>\n      <ion-textarea\n        name="description"\n        ngModel\n        required></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n\n\n    <ion-row>\n      <ion-col>\n        <button\n          ion-button\n          color="secondary"\n          block\n          type="submit"\n           (click)="onSubmit()"\n          [disabled]="!f.valid">\n          Store It!\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/add-forum/add-forum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__services_forums__["a" /* ForumService */]])
], AddForumPage);

//# sourceMappingURL=add-forum.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map