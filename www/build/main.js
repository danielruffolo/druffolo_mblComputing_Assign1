webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coins_coins__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(198);
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
        // this.navCtrl.push(AddForumPage);
    };
    HomePage.prototype.coins_menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__coins_coins__["a" /* CoinsPage */]);
    };
    HomePage.prototype.view_menu = function () {
        // this.navCtrl.push(ForumPage);
    };
    HomePage.prototype.account_menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/'<!-- this is the home page layout\ntried to experament and achieve a grid style dashboard with clickable grid items\nwe use ionic grid to achieve the desired look as each clickable item is a row\nthis makes styling very easy and is the bootstrap alternative for ionic -->\n\n<!-- the div elements here are clickable events, i built it this way as the look of buttons inside grid elements\ndid not suit the styling as much -->\n\n<ion-header>\n\n  <ion-navbar >\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n\n<!--  -->\n<div padding class="dash-create" style="color: white;" (click)="create_menu()">\n\n\n  <div>  <h1>Create a Post</h1>\n    <p>contribute to the community</p></div>\n</div>\n\n<div padding class="dash-view" style="color: white;" (click)="view_menu()">\n\n\n  <div>  <h1>Browse Posts</h1>\n    <p>View Other Members posts</p></div>\n</div>\n\n\n\n    <div class="dash-trending">\n      <ion-row padding style="color:white;">\n        <div>\n          <h1>Trending</h1>\n          <p>Todays most popular thread</p>\n        </div>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-card >\n\n  <ion-item>\n    <!-- here we are viewing the most viewed forum thread -->\n    <!-- this is hardcoded to show example but requies a backend to function  -->\n    <!-- we will be collecting frequency of clicked threads from user accounts -->\n    <ion-avatar item-start>\n      <img src="http://via.placeholder.com/50x50">\n    </ion-avatar>\n    <h2>Random Name</h2>\n    <p>November 5, 2017</p>\n  </ion-item>\n  <ion-card-content>\n    <p>Dummy Crypto Currency stock information</p>\n  </ion-card-content>\n</ion-card>\n      </ion-row>\n\n    </div>\n\n\n<!-- our forum will need a context, Cryptocurrency , this will lead to a view of live coin prices\nhowever given we are not at the stage of building a server side, this has been left out -->\n<!-- the intention is to dynamically show updated proces on the dashboard with anamation -->\n    <div padding class="dash-coinUpdates" (click)="coins_menu()">\n        <h1  style="color:white;">Coin Prices</h1>\n          <ion-row >\n            <ion-card class="dash_cardUpdates">\n            <ion-card-content>\n              <div class="ion-col col-12 item item-text-wrap"><p>Coin: BTC   Price: 2010.30</p></div>\n            </ion-card-content>\n          </ion-card>\n      </ion-row>\n    </div>\n\n    <div class="dash_lower" padding>\n          <ion-row>\n\n            <!-- left lower dash -->\n            <ion-col>\n              <div padding class="dash_lower" (click)="account_menu()">\n\n\n                <div>  <h1>Account</h1>\n                  <p>View your account and settings</p></div>\n              </div>\n            </ion-col>\n\n              <!-- right lower dash -->\n            <ion-col>\n              <div padding class="dash_lower" (click)="logout_menu()">\n\n\n                <div>  <h1>Log-out</h1>\n                  <p>Leave the Forums</p></div>\n              </div>\n            </ion-col>\n\n      </ion-row>\n    </div>\n\n\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_users__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
    function SignupPage(http, navCtrl, authService, toastCtrl, usersService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.usersService = usersService;
        this.RegDate = new Date().toISOString();
    }
    SignupPage.prototype.onSubmit = function (form) {
        this.authService.addUser(form.value.firstname, form.value.lastname, form.value.email, form.value.username, form.value.password, form.value.timestamp);
        form.reset();
        this.authService.postData(this.user);
        console.log('user added');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        this.presentToast();
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
        selector: 'page-signup',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Register\n    </ion-title>\n   \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>First Name</ion-label>\n        <ion-input\n          type="text"\n          placeholder="First Name"\n          name="firstname"\n          ngModel\n          required></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label fixed>Last Name</ion-label>\n          <ion-input\n            type="text"\n            placeholder="Last Name"\n            name="lastname"\n            ngModel\n            required></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label fixed>Email</ion-label>\n            <ion-input\n              type="text"\n              placeholder="Email"\n              name="email"\n              ngModel\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label fixed>Username</ion-label>\n              <ion-input\n                type="text"\n                placeholder="Username"\n                name="username"\n                ngModel\n                required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label fixed>Password</ion-label>\n                <ion-input\n                  type="password"\n                  placeholder="Password"\n                  name="password"\n                  ngModel\n                  required></ion-input>\n              </ion-item>\n\n \n    </ion-list>\n    <ion-grid>\n    \n      <ion-row>\n        <ion-col>\n          <button\n            ion-button\n            color="secondary"\n            block\n            type="submit"\n             (click)="onSubmit(f)"\n            [disabled]="!f.valid">\n            Store It!\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__services_users__["a" /* UsersService */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(201);
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
        this.Users = [];
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.addUser = function (username, password, firstname, lastname, email, timestamp) {
        var user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */](username, password, firstname, lastname, email, timestamp);
        this.Users.push(user);
        console.log(user);
    };
    AuthService.prototype.postData = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(' http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid=' + (user.username) + '&data=' + JSON.stringify(user), { headers: headers })
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password, firstname, lastname, email, timestamp) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.timestamp = timestamp;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user__ = __webpack_require__(201);

var UsersService = (function () {
    function UsersService() {
        this.Users = [];
    }
    UsersService.prototype.addUser = function (username, password, firstname, lastname, email, timestamp) {
        var user = new __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* User */](username, password, firstname, lastname, email, timestamp);
        this.Users.push(user);
    };
    return UsersService;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(277);
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
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
    // currentUser = JSON.parse(localStorage.getItem('userData'));
    function ProfilePage(navCtrl, navParams) {
        // const currentUser = JSON.parse(localStorage.getItem('userData'));
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        // console.log(this.currentUser);
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_coins_coins__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_stocks_stocks__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_auth_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_forums_forums__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_users__ = __webpack_require__(202);
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
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */]
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
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__providers_stocks_stocks__["a" /* StocksProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_14__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_forums_forums__["a" /* ForumsProvider */],
            __WEBPACK_IMPORTED_MODULE_16__services_users__["a" /* UsersService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
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

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(40);
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



/*
  Generated class for the ForumsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ForumsProvider = (function () {
    function ForumsProvider(http) {
        this.http = http;
        console.log('Hello ForumsProvider Provider');
    }
    return ForumsProvider;
}());
ForumsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ForumsProvider);

//# sourceMappingURL=forums.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(40);
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






/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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

},[206]);
//# sourceMappingURL=main.js.map