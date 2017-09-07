webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forum_forum__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coins_coins__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(200);
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
    function HomePage(toast, network, navCtrl, navParams) {
        this.toast = toast;
        this.network = network;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.displayNetworkUpdate = function (connectionState) {
        var networkType = this.network.type;
        this.toast.create({
            message: "you are now " + connectionState + " via " + networkType,
        }).present();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.network.onConnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
        this.network.onDisconnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
    };
    // this is where we navigate to and from app elements
    // the main dashboard
    // notice the use of set.Root on the logout function method. this is because we essentially dont want
    //users to be able to press the back button on the sign in page once the jwt is destoryed later on
    HomePage.prototype.create_menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */]);
    };
    HomePage.prototype.coins_menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__coins_coins__["a" /* CoinsPage */]);
    };
    HomePage.prototype.view_menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forum_forum__["a" /* ForumPage */]);
    };
    HomePage.prototype.account_menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.logout_menu = function () {
        this.pushPage = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/'<!-- this is the home page layout\ntried to experament and achieve a grid style dashboard with clickable grid items\nwe use ionic grid to achieve the desired look as each clickable item is a row\nthis makes styling very easy and is the bootstrap alternative for ionic -->\n\n<!-- the div elements here are clickable events, i built it this way as the look of buttons inside grid elements\ndid not suit the styling as much -->\n\n<ion-header>\n\n  <ion-navbar >\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n\n<!--  -->\n<div padding class="dash-create" style="color: white;" (click)="create_menu()">\n\n\n  <div>  <h1>Create a Post</h1>\n    <p>contribute to the community</p></div>\n</div>\n\n<div padding class="dash-view" style="color: white;" (click)="view_menu()">\n\n\n  <div>  <h1>Browse Posts</h1>\n    <p>View Other Members posts</p></div>\n</div>\n\n\n\n    <div class="dash-trending">\n      <ion-row padding style="color:white;">\n        <div>\n          <h1>Trending</h1>\n          <p>Todays most popular thread</p>\n        </div>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-card >\n\n  <ion-item>\n    <!-- here we are viewing the most viewed forum thread -->\n    <!-- this is hardcoded to show example but requies a backend to function  -->\n    <!-- we will be collecting frequency of clicked threads from user accounts -->\n    <ion-avatar item-start>\n      <img src="http://via.placeholder.com/50x50">\n    </ion-avatar>\n    <h2>Random Name</h2>\n    <p>November 5, 2017</p>\n  </ion-item>\n  <ion-card-content>\n    <p>Dummy Crypto Currency stock information</p>\n  </ion-card-content>\n</ion-card>\n      </ion-row>\n\n    </div>\n\n\n<!-- our forum will need a context, Cryptocurrency , this will lead to a view of live coin prices\nhowever given we are not at the stage of building a server side, this has been left out -->\n<!-- the intention is to dynamically show updated proces on the dashboard with anamation -->\n    <div padding class="dash-coinUpdates" (click)="coins_menu()">\n        <h1  style="color:white;">Coin Prices</h1>\n          <ion-row >\n            <ion-card class="dash_cardUpdates">\n            <ion-card-content>\n              <div class="ion-col col-12 item item-text-wrap"><p>Coin: BTC   Price: 2010.30</p></div>\n            </ion-card-content>\n          </ion-card>\n      </ion-row>\n    </div>\n\n    <div class="dash_lower" padding>\n          <ion-row>\n\n            <!-- left lower dash -->\n            <ion-col>\n              <div padding class="dash_lower" (click)="account_menu()">\n\n\n                <div>  <h1>Account</h1>\n                  <p>View your account and settings</p></div>\n              </div>\n            </ion-col>\n\n              <!-- right lower dash -->\n            <ion-col>\n              <div padding class="dash_lower" (click)="logout_menu()">\n\n\n                <div>  <h1>Log-out</h1>\n                  <p>Leave the Forums</p></div>\n              </div>\n            </ion-col>\n\n      </ion-row>\n    </div>\n\n\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_forums__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewForumPage = (function () {
    function ViewForumPage(navCtrl, navParams, viewCtrl, forumsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.forumsService = forumsService;
        this.forum = this.navParams.get('forum');
        this.index = this.navParams.get('index');
    }
    ViewForumPage.prototype.onLeave = function () {
        this.viewCtrl.dismiss();
    };
    ViewForumPage.prototype.onDelete = function () {
        this.forumsService.deleteForum(this.index);
        this.viewCtrl.dismiss();
    };
    ViewForumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewForumPage');
    };
    return ViewForumPage;
}());
ViewForumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-forum',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/view-forum/view-forum.html"*/'<!-- this is our modal view layout -->\n<!-- this will show the selected Forum thread to be viewed, populate the layout and also provide the\nability to comment on the thread -->\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>View Thread</ion-title>\n\n      <ion-buttons end>\n          <button ion-button icon-only (click)="onLeave()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n\n          <button ion-button icon-only (click)="onDelete()">\n              <ion-icon name="trash"></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="container" >\n  <ion-grid>\n\n    <div class="thread_box">\n\n      <ion-card>\n\n  <ion-card-content>\n    <ion-list>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="http://via.placeholder.com/350x150">\n          </ion-avatar>\n          <h2>{{forum.author}}</h2>\n          <h3>{{forum.title}}</h3>\n\n        </ion-item>\n    </ion-list>\n\n    <div class="thread_content" align="left">\n      <ion-card>\n    <ion-card-content>\n    <h3>Content</h3>\n    <hr>\n\n      <p>{{forum.description}}</p>\n    </ion-card-content>\n\n  </ion-card>\n\n    </div>\n\n\n  </ion-card-content>\n\n  <ion-card-content>\n    <div class="comment_content" align="left">\n      <hr>\n      <h3>Comments:</h3>\n      <ion-list>\n          <ion-card>\n        <ion-card-content>\n          <!-- Add card content here! -->\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="http://via.placeholder.com/350x150">\n            </ion-avatar>\n            <h2>Replier</h2>\n          </ion-item>\n            <p>some random comment content, blah blah blah</p>\n        </ion-card-content>\n\n      </ion-card>\n    </ion-list>\n\n      <hr>\n    </div>\n  </ion-card-content>\n\n  <ion-card-content>\n    <h3>Comment:</h3>\n    <form #f="ngForm" (ngSubmit)="onSubmit_Comment(f)">\n    <ion-list>\n      <ion-item>\n        <ion-input\n          type="text"\n          placeholder="Comment something:"\n          name="thread comment"\n          ngModel\n          required>\n          </ion-input>\n      </ion-item>\n\n    </ion-list>\n    <ion-grid>\n\n\n      <ion-row>\n        <ion-col>\n          <button\n            ion-button\n            color="secondary"\n            block\n            type="submit"\n             (click)="onSubmit()"\n            [disabled]="!f.valid">\n            Comment\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  </ion-card-content>\n</ion-card>\n    </div>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/view-forum/view-forum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_forums__["a" /* ForumService */]])
], ViewForumPage);

//# sourceMappingURL=view-forum.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function () {
    function SignupPage(http, navCtrl, authService, toastCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.userData = { "username": "", "password": "", "name": "", "email": "" };
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.authService.postData(this.userData, 'signup').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            _this.presentToast();
        }, function (err) {
            // Error log
        });
    };
    SignupPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'You have Registered Successfully',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SignupPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container" padding>\n\n    <ion-card>\n        <ion-card-header>\n          Registration\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <ion-label stacked>Name</ion-label>\n              <ion-input type="text" [(ngModel)]="userData.name"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label stacked>Email</ion-label>\n              <ion-input type="text" [(ngModel)]="userData.email"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label stacked>Username</ion-label>\n              <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label stacked>Password</ion-label>\n              <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n            </ion-item>\n    \n            <button ion-button full color="success" (click)="signup()">Sign up</button>\n            <a href="#" (click)="login()">Login Page</a>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            console.log(credentials.username);
            console.log(credentials);
            _this.http.post(' http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid=' + (credentials.username) + '&data=' + JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve();
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stocks_stocks__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoinsPage = (function () {
    function CoinsPage(navCtrl, navParams, stocksProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stocksProvider = stocksProvider;
        this.loadingCtrl = loadingCtrl;
        this.currency = [];
    }
    CoinsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad coin page');
    };
    CoinsPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        this.stocksProvider.getItem().subscribe(function (data) {
            console.log(data);
            _this.currency = data;
            loader.dismiss();
        });
    };
    return CoinsPage;
}());
CoinsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-coins',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/coins/coins.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coins</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- populate list from API -->\n	<ion-list>\n		<ion-item *ngFor="let coin of currency">\n			<h2 style="text-transform: uppercase;">\n        {{coin.id}}\n        {{coin.symbol}}</h2>\n        <p>\n          Price :{{coin.price_usd}}\n        </p>\n        <p>\n          Change: {{coin.percent_change_1h}}\n        </p>\n		</ion-item>\n	</ion-list>\n    <!--  end populate list from API -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/coins/coins.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_stocks_stocks__["a" /* StocksProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* LoadingController */]])
], CoinsPage);

//# sourceMappingURL=coins.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StocksProvider = (function () {
    function StocksProvider(http) {
        this.http = http;
        this.currency = [];
        console.log('Hello HttpProvider Provider');
    }
    StocksProvider.prototype.getItem = function () {
        return this.http.get('https://api.coinmarketcap.com/v1/ticker/').map(function (res) { return res.json(); });
    };
    return StocksProvider;
}());
StocksProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], StocksProvider);

//# sourceMappingURL=stocks.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- begin page content -->\n<ion-content >\n\n  <div class="page_container">\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Your Profile\n              <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <!-- Add card content here! -->\n              <p>Full Name</p>\n              <p>Member since</p>\n\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Your Account\n                  <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p>Username</p>\n              <p>Password</p>\n              <p>Email</p>\n              <p>Phone</p>\n\n\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Coins\n                  <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <!-- Add card content here! -->\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Recent Activity\n                  <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <!-- Add card content here! -->\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Deactivate\n                  <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <!-- Add card content here! -->\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_forum_forum__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_forum_add_forum__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_view_forum_view_forum__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_coins_coins__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_forums__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_stocks_stocks__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__ = __webpack_require__(203);
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
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_coins_coins__["a" /* CoinsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forum_forum__["a" /* ForumPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_add_forum_add_forum__["a" /* AddForumPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_view_forum_view_forum__["a" /* ViewForumPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_coins_coins__["a" /* CoinsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_forum_forum__["a" /* ForumPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_add_forum_add_forum__["a" /* AddForumPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_view_forum_view_forum__["a" /* ViewForumPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_16__services_forums__["a" /* ForumService */],
            __WEBPACK_IMPORTED_MODULE_17__providers_stocks_stocks__["a" /* StocksProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__["a" /* AuthService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forum_forum__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_forum_add_forum__ = __webpack_require__(50);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
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

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forum; });
var Forum = (function () {
    function Forum(title, author, description, dateCreated, coins) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.dateCreated = dateCreated;
        this.coins = coins;
    }
    return Forum;
}());

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_forums__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forum_forum__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        // on submit of the forum , we send the data from the form to our forums service class which acts as a
        //middle man between client and server side
        this.forumsService.addForum(form.value.title, form.value.author, form.value.description, form.value.date, form.value.coins);
        //i have included key words here as im experamenting with python a way to extract key words
        //from the form . work in progress and difficult to do so behind the scenes in a non manual manner
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
        selector: 'page-add-forum',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/add-forum/add-forum.html"*/'<!--\nDaniel Ruffolo\nthis page is what writes data to our forum model\nwe use a form to submit data to our forum service which then becomes\npart of our forums array\n -->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create a Post</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- Ng Form is a ionic package which we use to process the form data on submit\nwe parse the argument \'f as our form data when the onsubmit method is called\' -->\n<ion-content padding class="container">\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label fixed>Title:</ion-label>\n      <ion-input\n        type="text"\n        placeholder="Name of your post"\n        name="title"\n        ngModel\n        required>\n        </ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label fixed>Author:</ion-label>\n      <ion-input\n        type="text"\n        placeholder="created by"\n        name="author"\n        ngModel\n        required>\n        </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>content:</ion-label>\n      <ion-textarea\n        name="description"\n        ngModel\n        required></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>date:</ion-label>\n      <ion-input\n        type="text"\n        placeholder="date created"\n        name="date"\n        ngModel\n        required>\n        </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Coins Related to:</ion-label>\n      <ion-input\n        type="text"\n        placeholder="coin related to?"\n        name="coins"\n        ngModel\n        required>\n        </ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-grid>\n\n\n    <ion-row>\n      <ion-col>\n        <button\n          ion-button\n          color="secondary"\n          block\n          type="submit"\n           (click)="onSubmit()"\n          [disabled]="!f.valid">\n          Create!\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/add-forum/add-forum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__services_forums__["a" /* ForumService */]])
], AddForumPage);

//# sourceMappingURL=add-forum.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_forum__ = __webpack_require__(275);

var ForumService = (function () {
    function ForumService() {
        this.forums = [];
    }
    ForumService.prototype.addForum = function (title, author, description, dateCreated, coins) {
        var forum = new __WEBPACK_IMPORTED_MODULE_0__models_forum__["a" /* Forum */](title, author, description, dateCreated, coins);
        this.forums.push(forum);
    };
    ForumService.prototype.loadForums = function () {
        return this.forums.slice();
    };
    ForumService.prototype.deleteForum = function (index) {
        this.forums.slice(index, 1);
    };
    return ForumService;
}());

//# sourceMappingURL=forums.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_forum_view_forum__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_forums__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForumPage = (function () {
    function ForumPage(navCtrl, navParams, forumsService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forumsService = forumsService;
        this.modalCtrl = modalCtrl;
        this.AddForumPage = __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */];
        //declaration of our empty forums array
        this.forums = [];
    }
    ForumPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad ForumPage');
        //here we are populating the page with the data from our forums service .
        //we call the load forums method to do so
        this.forums = this.forumsService.loadForums();
    };
    //here we are allowing the open of a forum thread by making each thread a clickable model.
    //a moel is a dynamic page that can be generated , it is less memory and is destroyed on close
    ForumPage.prototype.onOpenForum = function (forum, index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__view_forum_view_forum__["a" /* ViewForumPage */], { forum: forum, index: index });
        modal.present();
    };
    ForumPage.prototype.goToCreate = function () {
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */];
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */]);
    };
    return ForumPage;
}());
ForumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forum',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/forum/forum.html"*/'<!-- this page is where you view the many forum threads that will populate\nit should be noted that its on a scroll view so the more you add, their will not be unexpected behaviour-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>forum</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="page_container">\n  <ion-scroll class="forum_scroll" scrollX="true" scrollY="true">\n\n<!-- upon  creation of a forum , we are traversing our forum service array and populating a ion-list with\nclickable forum threads to view we pass index so that we can click on specific forum threads of the array -->\n  <ion-list padding>\n  <ion-item ion-item *ngFor="let forum of forums; let i = index" (click)="onOpenForum(forum, i)">\n\n    <ion-thumbnail item-start>\n      <img src="http://via.placeholder.com/350x150">\n    </ion-thumbnail>\n    <!-- this is the syntax used to pass js from server/backend side to client side -->\n    <h2> Topic: {{forum.title}}</h2>\n    <h2> Coin: {{forum.coins}}</h2>\n\n\n  </ion-item>\n</ion-list>\n\n\n\n</ion-scroll>\n  <!-- align to the bottom of the page -->\n  <ion-footer>\n\n    <div  style=" width: 100%; background-color: #1abc9c;">\n        <div style="text-align: center">\n\n          <ion-grid>\n  <ion-row>\n    <ion-col>\n      <button ion-button full (click)="goToCreate()">Create a post</button>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n        </div>\n    </div>\n\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/forum/forum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_forums__["a" /* ForumService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
], ForumPage);

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(202);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.logincall = function () {
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.signupCall = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]); };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- start of login template-->\n<ion-content class="login_template" >\n  <div class="page_container">\n\n    <!-- start of login page grid -->\n    <ion-grid>\n\n\n    <!-- start of logo box -->\n    <div padding align="center">\n      <ion-row text-center>\n\n        <ion-card>\n          <img  src="http://via.placeholder.com/150x50"/>\n        </ion-card>\n\n\n             <ion-col>\n               <h1 class="app_title">Crypto-Forums</h1>\n               <p class="app_title">Keeping you in the loop</p>\n\n             </ion-col>\n\n\n\n\n\n      </ion-row>\n    </div>\n    <!-- end logo box -->\n\n\n\n\n    <!-- start of password box -->\n    <div padding align="center">\n      <ion-row>\n        <ion-list>\n\n          <ion-item>\n          <ion-label>Username:</ion-label>\n          <ion-input type="text"></ion-input>\n          </ion-item>\n\n          <br>\n\n          <ion-item>\n          <ion-label>Password:</ion-label>\n          <ion-input type="password"></ion-input>\n          </ion-item>\n\n          <br>\n\n          <ion-label><p class="reset_label">forgot your password?</p></ion-label>\n\n        </ion-list>\n\n      </ion-row>\n    </div>\n    <!-- end of passowrd box -->\n\n\n      <!-- ROW for login/sign up button -->\n      <div class="login_buttons">\n        <ion-row>\n          <ion-col>\n\n          <button ion-button block (click)="logincall()">login</button>\n\n          </ion-col>\n          <ion-col><button ion-button block (click)="signupCall()">Sign Up</button></ion-col>\n\n        </ion-row>\n      </div>\n\n      <!-- end of row for button -->\n\n    </ion-grid>\n\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map