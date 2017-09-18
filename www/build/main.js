webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coins_coins__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewthreads_viewthreads__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addthread_addthread__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(209);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addthread_addthread__["a" /* AddthreadPage */]);
    };
    HomePage.prototype.coins_menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__coins_coins__["a" /* CoinsPage */]);
    };
    HomePage.prototype.view_menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__viewthreads_viewthreads__["a" /* ViewthreadsPage */]);
    };
    HomePage.prototype.account_menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.logout_menu = function () {
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        localStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/'<!-- this is the home page layout\ntried to experament and achieve a grid style dashboard with clickable grid items\nwe use ionic grid to achieve the desired look as each clickable item is a row\nthis makes styling very easy and is the bootstrap alternative for ionic -->\n\n<!-- the div elements here are clickable events, i built it this way as the look of buttons inside grid elements\ndid not suit the styling as much -->\n\n<ion-header>\n\n  <ion-navbar >\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n\n<!--  -->\n<div padding class="dash-create" style="color: white;" (click)="create_menu()">\n\n\n  <div>  <h1>Create a Thread</h1>\n    <p>contribute to the community</p></div>\n</div>\n\n<div padding class="dash-view" style="color: white;" (click)="view_menu()">\n\n\n  <div>  <h1>Browse Threads</h1>\n    <p>View Other Members posts</p></div>\n</div>\n\n\n\n    <div class="dash-trending">\n      <ion-row padding style="color:white;">\n        <div>\n          <h1>Trending</h1>\n          <p>Todays most popular thread</p>\n        </div>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-card >\n\n  <ion-item>\n    <!-- here we are viewing the most viewed forum thread -->\n    <!-- this is hardcoded to show example but requies a backend to function  -->\n    <!-- we will be collecting frequency of clicked threads from user accounts -->\n    <ion-avatar item-start>\n      <img src="http://via.placeholder.com/50x50">\n    </ion-avatar>\n    <h2>Random Name</h2>\n    <p>November 5, 2017</p>\n  </ion-item>\n  <ion-card-content>\n    <p>Dummy Crypto Currency stock information</p>\n  </ion-card-content>\n</ion-card>\n      </ion-row>\n\n    </div>\n\n\n<!-- our forum will need a context, Cryptocurrency , this will lead to a view of live coin prices\nhowever given we are not at the stage of building a server side, this has been left out -->\n<!-- the intention is to dynamically show updated proces on the dashboard with anamation -->\n    <div padding class="dash-coinUpdates" (click)="coins_menu()">\n        <h1  style="color:white;">Coin Prices</h1>\n          <ion-row >\n            <ion-card class="dash_cardUpdates">\n            <ion-card-content>\n              <div class="ion-col col-12 item item-text-wrap"><p>Coin: BTC   Price: 2010.30</p></div>\n            </ion-card-content>\n          </ion-card>\n      </ion-row>\n    </div>\n\n    <div class="dash_lower" padding>\n          <ion-row>\n\n            <!-- left lower dash -->\n            <ion-col>\n              <div padding class="dash_lower" (click)="account_menu()">\n\n\n                <div>  <h1>Account</h1>\n                  <p>View your account and settings</p></div>\n              </div>\n            </ion-col>\n\n              <!-- right lower dash -->\n            <ion-col>\n              <div padding class="dash_lower" (click)="logout_menu()">\n\n\n                <div>  <h1>Log-out</h1>\n                  <p>Leave the Forums</p></div>\n              </div>\n            </ion-col>\n\n      </ion-row>\n    </div>\n\n\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewthreadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_forum_service_forum_service__ = __webpack_require__(104);
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
 * Generated class for the ViewthreadsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ViewthreadsPage = (function () {
    function ViewthreadsPage(navCtrl, navParams, forumServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forumServiceProvider = forumServiceProvider;
        this.threadList = [];
    }
    ViewthreadsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewthreadsPage');
    };
    ViewthreadsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.forumServiceProvider.getThreadData().subscribe(function (data) { return _this.threadList = data; });
    };
    return ViewthreadsPage;
}());
ViewthreadsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-viewthreads',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/viewthreads/viewthreads.html"*/'<!--\n  Generated template for the ViewthreadsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>viewthreads</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  	<ion-list >\n        <ion-item *ngFor=" let thread of threadList; let i = index" (click)="viewthread(i)">\n\n          <p style="text-transform: uppercase;">\n            \n              {{thread}}\n             \n          </p>\n\n        </ion-item>\n          \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/viewthreads/viewthreads.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_forum_service_forum_service__["a" /* ForumServiceProvider */]])
], ViewthreadsPage);

//# sourceMappingURL=viewthreads.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the ForumServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ForumServiceProvider = (function () {
    function ForumServiceProvider(http) {
        this.http = http;
        this.currency = [];
        this.datastore_addThreadUrl = 'http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid=';
        this.datastore_addThreadUrl2 = '&data=';
        this.datastore_ViewThreadUrl = 'http://introtoapps.com/datastore.php?action=listall&prefix=thread&appid=214231656';
        console.log('Hello ForumServiceProvider Provider');
    }
    ForumServiceProvider.prototype.postThreadData = function (threadData, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var thread_objectID = ('thread' + '-' + threadData.title);
            console.log(thread_objectID);
            _this.http.post(_this.datastore_addThreadUrl + thread_objectID + _this.datastore_addThreadUrl2 + JSON.stringify(threadData), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ForumServiceProvider.prototype.getThreadData = function () {
        return this.http.get(this.datastore_ViewThreadUrl)
            .do(this.logResponse)
            .map(this.extractData)
            .do(this.logResponse)
            .catch(this.catchError);
    };
    ForumServiceProvider.prototype.catchError = function (error) {
        console.log(error);
        console.log("something went very wrong");
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || "network error.");
    };
    ForumServiceProvider.prototype.logResponse = function (res) {
        console.log(res);
    };
    ForumServiceProvider.prototype.extractData = function (res) {
        return res.json();
    };
    return ForumServiceProvider;
}());
ForumServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ForumServiceProvider);

//# sourceMappingURL=forum-service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(30);
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
    function SignupPage(http, navCtrl, toastCtrl, authService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.RegDate = new Date().toISOString();
        this.userData = { "username": "", "password": "", "fname": "", "lname": "", "email": "", "membersince": this.RegDate };
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.authService.postData(this.userData, 'signup').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
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
        selector: 'page-signup',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/signup/signup.html"*/'\n\n    <ion-header>\n        \n          <ion-navbar >\n            <button ion-button menuToggle>\n        \n              <ion-icon name="menu"></ion-icon>\n            </button>\n            <ion-title>Register</ion-title>\n          </ion-navbar>\n        \n        </ion-header>\n\n      <ion-content padding>\n\n\n          <ion-card>\n          \n            <ion-card-content>\n              <ion-list>\n                <ion-item>\n                  <ion-label stacked>First Name</ion-label>\n                  <ion-input type="text" [(ngModel)]="userData.fname"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label stacked>Last Name</ion-label>\n                    <ion-input type="text" [(ngModel)]="userData.lname"></ion-input>\n                  </ion-item>\n\n                <ion-item>\n                  <ion-label stacked>Email</ion-label>\n                  <ion-input type="text" [(ngModel)]="userData.email"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label stacked>Username</ion-label>\n                  <ion-input type="text" [(ngModel)]="userData.username"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                  <ion-label stacked>Password</ion-label>\n                  <ion-input type="password" [(ngModel)]="userData.password"></ion-input>\n                </ion-item>\n\n                <button ion-button full color="success" (click)="signup()">Sign up</button>\n              </ion-list>\n            </ion-card-content>\n\n          </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
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



var datastore_addUserUrl = 'http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid=';
var datastore_addUserUrl2 = '&data=';
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(datastore_addUserUrl + credentials.username + datastore_addUserUrl2 + JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stocks_stocks__ = __webpack_require__(204);
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
        this.currencyList = [];
    }
    CoinsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad coin page');
    };
    CoinsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.stocksProvider.getCryptStocks().subscribe(function (data) { return _this.currencyList = data; });
    };
    return CoinsPage;
}());
CoinsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-coins',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/coins/coins.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coins</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- populate list from API -->\n	<ion-list >\n		<ion-item *ngFor=" let coin of currencyList">\n      <p style="text-transform: uppercase;">\n          {{coin.id}}\n          {{coin.symbol}}\n      </p>\n    \n      {{coin.price_usd}}\n      {{coin.percent_change_1h}}\n\n    </ion-item>\n      \n	</ion-list>\n    <!--  end populate list from API -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/coins/coins.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_stocks_stocks__["a" /* StocksProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* LoadingController */]])
], CoinsPage);

//# sourceMappingURL=coins.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
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
        this.curr_url = "https://api.coinmarketcap.com/v1/ticker/";
        console.log('Hello HttpProvider Provider');
    }
    StocksProvider.prototype.getCryptStocks = function () {
        return this.http.get(this.curr_url)
            .do(this.logResponse)
            .map(this.extractData)
            .do(this.logResponse)
            .catch(this.catchError);
    };
    StocksProvider.prototype.catchError = function (error) {
        console.log(error);
        console.log("something went very wrong");
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(error.json().error || "network error.");
    };
    StocksProvider.prototype.logResponse = function (res) {
        console.log(res);
    };
    StocksProvider.prototype.extractData = function (res) {
        return res.json();
    };
    return StocksProvider;
}());
StocksProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], StocksProvider);

//# sourceMappingURL=stocks.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddthreadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewthreads_viewthreads__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_forum_service_forum_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(30);
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






var threadArray = [];
var AddthreadPage = (function () {
    function AddthreadPage(http, navCtrl, toastCtrl, forumserviceProvider) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.forumserviceProvider = forumserviceProvider;
        this.RegDate = new Date().toISOString();
        this.threadData = { "title": "", "topic": "", "content": "" };
    }
    AddthreadPage.prototype.create_Thread = function () {
        var _this = this;
        var newThread = {
            title: this.threadData.title,
            topic: this.threadData.topic,
            content: this.threadData.content
        };
        threadArray.push([newThread]);
        console.log(newThread);
        console.log(threadArray);
        this.forumserviceProvider.postThreadData(threadArray, 'addthread').then(function (result) {
            _this.responseData = result;
            console.log(_this.responseData);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__viewthreads_viewthreads__["a" /* ViewthreadsPage */]);
        }, function (err) {
            // Error log
        });
    };
    return AddthreadPage;
}());
AddthreadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addthread',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/addthread/addthread.html"*/'\n\n    <ion-header>\n        \n          <ion-navbar >\n            <button ion-button menuToggle>\n        \n              <ion-icon name="menu"></ion-icon>\n            </button>\n            <ion-title>Create Thread</ion-title>\n          </ion-navbar>\n        \n        </ion-header>\n\n      <ion-content padding>\n\n\n          <ion-card>\n          \n            <ion-card-content>\n              <ion-list>\n\n                <ion-item>\n                  <ion-label stacked>Thread Title</ion-label>\n                  <ion-input type="text" [(ngModel)]="threadData.title"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label stacked>Thread Topic</ion-label>\n                    <ion-input type="text" [(ngModel)]="threadData.topic"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-label stacked>Thread Content</ion-label>\n                      <ion-input type="text" [(ngModel)]="threadData.content"></ion-input>\n                    </ion-item>\n\n              \n\n                <button ion-button full color="success" (click)="create_Thread()">Create Thread</button>\n              </ion-list>\n            </ion-card-content>\n\n          </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/addthread/addthread.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_forum_service_forum_service__["a" /* ForumServiceProvider */]])
], AddthreadPage);

//# sourceMappingURL=addthread.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        this.currentUser = JSON.parse(localStorage.getItem('userData'));
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        console.log(this.currentUser);
    };
    ProfilePage.prototype.Deactivate = function () {
        console.log('your account has been deactivated');
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- begin page content -->\n<ion-content >\n\n  <div class="page_container">\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Your Profile\n              <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <!-- Add card content here! -->\n              <p>Full Name: {{this.currentUser.fname}}  {{this.currentUser.lname}}</p>\n\n                  <ion-row>\n                    <ion-col>\n                        <p>Member since:</p>\n                    </ion-col>\n                    <ion-col>\n                        <ion-datetime displayFormat="MMM DD, h:mm A" [(ngModel)]="this.currentUser.membersince"></ion-datetime>\n\n                    </ion-col>\n                  </ion-row>\n\n\n\n           \n           \n              \n              \n\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Your Account\n                  <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p>Username: {{this.currentUser.username}} </p>\n              <p>Password: {{this.currentUser.password}} </p>\n              <p>Email: {{this.currentUser.email}} </p>\n              <p>Phone:</p>\n\n\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Coins\n                  <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <!-- Add card content here! -->\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Recent Activity\n                  <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <!-- Add card content here! -->\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Deactivate\n                  <hr>\n            </ion-card-header>\n\n            <ion-card-content text-center class="vertical-align-content">\n              <!-- Add card content here! -->\n\n              <p>The following will permanently delete your account\n                <br>your account will be disabled</p>\n                <button ion-button full color="danger" (click)="Deactivate()">deactivate</button>\n                \n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_coins_coins__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_addthread_addthread__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_viewthreads_viewthreads__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_stocks_stocks__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_auth_service__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_forum_service_forum_service__ = __webpack_require__(104);
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
            __WEBPACK_IMPORTED_MODULE_11__pages_coins_coins__["a" /* CoinsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_addthread_addthread__["a" /* AddthreadPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_viewthreads_viewthreads__["a" /* ViewthreadsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_coins_coins__["a" /* CoinsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_addthread_addthread__["a" /* AddthreadPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_viewthreads_viewthreads__["a" /* ViewthreadsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__providers_stocks_stocks__["a" /* StocksProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_forum_service_forum_service__["a" /* ForumServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(53);
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
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(30);
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






var login_API_URL = 'http://introtoapps.com/datastore.php?action=load&appid=214231656&objectid=';
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.userLoginData = { "username": "", "password": "" };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.http.get(login_API_URL + this.userLoginData.username)
            .map(function (res) { return res.json(); }).subscribe(function (responseData) {
            if (responseData.password == _this.userLoginData.password &&
                responseData.username == _this.userLoginData.username) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                console.log(responseData);
                localStorage.setItem('userData', JSON.stringify(responseData));
            }
            else
                console.log('wrong password');
        });
    };
    LoginPage.prototype.signupCall = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]); };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/login/login.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Login</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class="container" padding>\n  \n      <ion-card>\n          <ion-card-header>\n            Login\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item>\n                <ion-label stacked>Username</ion-label>\n                <ion-input type="text" [(ngModel)]="userLoginData.username"></ion-input>\n              </ion-item>\n      \n              <ion-item>\n                <ion-label stacked>Password</ion-label>\n                <ion-input type="password" [(ngModel)]="userLoginData.password"></ion-input>\n              </ion-item>\n      \n      \n              <button ion-button full color="success" (click)="login()">Login</button>\n              <button ion-button full color="success" (click)="signupCall()">Sign Up</button>\n              \n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map