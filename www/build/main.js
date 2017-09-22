webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
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
    AuthServiceProvider.prototype.postUserLoginData = function (credentials, type) {
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
    AuthServiceProvider.prototype.DeleteAccount = function (intent) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post('http://introtoapps.com/datastore.php?action=delete&appid=214231656&objectid=' + intent, { headers: headers })
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthServiceProvider);

var _a;
//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stocks_stocks__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_thread__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_forum_service_forum_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewthreads_viewthreads__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(60);
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
    function CoinsPage(navCtrl, navParams, stocksProvider, loadingCtrl, modalCtrl, forumserviceProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.stocksProvider = stocksProvider;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.forumserviceProvider = forumserviceProvider;
        this.alertCtrl = alertCtrl;
        this.currencyList = [];
    }
    CoinsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad coin page');
    };
    CoinsPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Getting latest entries...',
            duration: 10000
        });
        loader.present().then(function () {
            _this.stocksProvider.getCryptStocks()
                .subscribe(function (data) {
                _this.currencyList = data;
            });
            loader.dismiss();
        });
    };
    CoinsPage.prototype.on_ClickCoin = function (currencyList, index) {
        var title = currencyList.name + ' is currently at' + currencyList.percent_change_1h;
        var description = 'this is a generated topic relating to ' + currencyList.name +
            ' regarding the change of ' + currencyList.percent_change_1h + ' in the past hour ';
        this.addThread(title, description);
    };
    CoinsPage.prototype.addThread = function (title, description) {
        var thread = new __WEBPACK_IMPORTED_MODULE_3__models_thread__["a" /* Thread */](title, description);
        console.log(thread);
        this.presentConfirm(thread);
    };
    CoinsPage.prototype.presentConfirm = function (thread) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Create a Thread',
            message: 'Do you want to create a thread for the following: ' + thread.title,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.forumserviceProvider.postThreadData(thread);
                        _this.forumserviceProvider.bindThreadComment(thread);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__viewthreads_viewthreads__["a" /* ViewthreadsPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    return CoinsPage;
}());
CoinsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-coins',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/coins/coins.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>coins</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- populate list from API -->\n	<ion-list >\n		<ion-item *ngFor=" let coin of currencyList;let i = index"(click)="on_ClickCoin(coin,i)">\n      <p style="text-transform: uppercase;">\n          {{coin.id}}\n          {{coin.symbol}}\n      </p>\n    \n      {{coin.price_usd}}\n      {{coin.percent_change_1h}}\n\n    </ion-item>\n      \n	</ion-list>\n    <!--  end populate list from API -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/coins/coins.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_stocks_stocks__["a" /* StocksProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_forum_service_forum_service__["a" /* ForumServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CoinsPage);

//# sourceMappingURL=coins.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Thread; });
var Thread = (function () {
    function Thread(title, description) {
        this.title = title;
        this.description = description;
    }
    return Thread;
}());

//# sourceMappingURL=thread.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_thread__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThreadsService = (function () {
    function ThreadsService(http) {
        this.http = http;
        console.log('Hello ForumServiceProvider Provider');
    }
    ThreadsService.prototype.addThread = function (title, description) {
        console.log(title);
        var thread = new __WEBPACK_IMPORTED_MODULE_0__models_thread__["a" /* Thread */](title, description);
        console.log(thread);
    };
    return ThreadsService;
}());
ThreadsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ThreadsService);

var _a;
//# sourceMappingURL=threads.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddthreadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_forum_service_forum_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_threads__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_thread__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(28);
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







/**Summary
 * Add thread component acts as the main data input for the app
 * users can create a forum entry through data input which is then stored on the server
*/
var AddthreadPage = (function () {
    // index: number;
    // currencyList: any = [];
    function AddthreadPage(http, navCtrl, toastCtrl, forumserviceProvider, threadsService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.forumserviceProvider = forumserviceProvider;
        this.threadsService = threadsService;
    }
    AddthreadPage.prototype.ionViewDidLoad = function () {
    };
    AddthreadPage.prototype.onSubmit = function (form) {
        this.addThread(form.value.title, form.value.description);
        form.reset();
    };
    AddthreadPage.prototype.addThread = function (title, description) {
        var thread = new __WEBPACK_IMPORTED_MODULE_5__models_thread__["a" /* Thread */](title, description);
        console.log(thread);
        this.forumserviceProvider.postThreadData(thread);
        this.forumserviceProvider.bindThreadComment(thread);
    };
    return AddthreadPage;
}());
AddthreadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addthread',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/addthread/addthread.html"*/'\n\n    <ion-header>\n        \n          <ion-navbar >\n            <button ion-button menuToggle>\n        \n              <ion-icon name="menu"></ion-icon>\n            </button>\n            <ion-title>Create Thread</ion-title>\n          </ion-navbar>\n        \n        </ion-header>\n\n      \n<ion-content padding>\n    <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n      <ion-list>\n        <ion-item>\n          <ion-label fixed>Title</ion-label>\n          <ion-input\n            type="text"\n            placeholder="Name of the Thread"\n            name="title"\n            ngModel\n            required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Short Description</ion-label>\n          <ion-textarea\n            name="description"\n            ngModel\n            required></ion-textarea>\n        </ion-item>\n      </ion-list>\n        <ion-row>\n          <ion-col>\n            <button\n              ion-button\n              color="secondary"\n              block\n              type="submit"\n               (click)="onSubmit(f)"\n              [disabled]="!f.valid">\n              Create It!\n            </button>\n          </ion-col>\n        </ion-row>\n    </form>\n  </ion-content>\n  \n  '/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/addthread/addthread.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_forum_service_forum_service__["a" /* ForumServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_forum_service_forum_service__["a" /* ForumServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_threads__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_threads__["a" /* ThreadsService */]) === "function" && _e || Object])
], AddthreadPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=addthread.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**Summary
 * Profile page shows how we can see data stored in the user local storage
 * users can view their account details from here as well as deactivate their accoint
*/
var ProfilePage = (function () {
    //import local user data
    function ProfilePage(navCtrl, navParams, alertCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.currentUser = JSON.parse(localStorage.getItem('userData'));
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        console.log(this.currentUser);
    };
    ProfilePage.prototype.Deactivate = function () {
        this.presentConfirmDeactivate();
    };
    ProfilePage.prototype.presentConfirmDeactivate = function () {
        var _this = this;
        //grab the object id of the person we want to delete
        var intent = this.currentUser.username;
        console.log(intent);
        //post a allert letting the user know your about to delete 
        var alert = this.alertCtrl.create({
            title: 'Deactivate Account',
            message: 'Are you sure? This will remove your account!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        //request from the authservice to delete the account currently logged in as
                        //pass in the intent variable which is the uder object id
                        _this.authService.DeleteAccount(intent);
                        _this.pushPage = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
                        localStorage.clear();
                        //delete the local storage
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        //clrear the page stack and start fresh
                    }
                }
            ]
        });
        alert.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Your Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- begin page content -->\n<ion-content >\n\n  <div class="page_container">\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Your Profile\n              <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <!-- Add card content here! -->\n              <p>Full Name: {{this.currentUser.fname}}  {{this.currentUser.lname}}</p>\n\n                  <ion-row>\n                    <ion-col>\n                        <p>Member since:</p>\n                    </ion-col>\n                    <ion-col>\n                        <ion-datetime displayFormat="MMM DD, h:mm A" [(ngModel)]="this.currentUser.membersince"></ion-datetime>\n\n                    </ion-col>\n                  </ion-row>\n\n\n\n           \n           \n              \n              \n\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Your Account\n                  <hr>\n            </ion-card-header>\n\n            <ion-card-content>\n              <p>Username: {{this.currentUser.username}} </p>\n              <p>Email: {{this.currentUser.email}} </p>\n\n\n            </ion-card-content>\n      </ion-card>\n\n    </div>\n    <div class="page_element">\n\n      <ion-card>\n            <ion-card-header>\n              Deactivate\n                  <hr>\n            </ion-card-header>\n\n            <ion-card-content text-center class="vertical-align-content">\n              <!-- Add card content here! -->\n\n              <p>The following will permanently delete your account\n                <br>your account will be disabled</p>\n                <button ion-button full color="danger" (click)="Deactivate()">deactivate</button>\n                \n            </ion-card-content>\n      </ion-card>\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _d || Object])
], ProfilePage);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(28);
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







/**Summary
*signup is the component that allows you to create a user object to login to the app
*/
var SignupPage = (function () {
    function SignupPage(http, navCtrl, toastCtrl, authService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        //declare date object so we can record date of registration
        this.RegDate = new Date().toISOString();
        //declare type user data so we can handle the form data
        this.userData = { "username": "", "password": "", "fname": "", "lname": "", "email": "", "membersince": this.RegDate };
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        //first step is to take the input password and hash it using SHA256
        //this will ensure no one can see whats in the db password
        var hashpass = __WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.SHA256(this.userData.password).toString(__WEBPACK_IMPORTED_MODULE_5_crypto_js___default.a.enc.Hex);
        this.userData.password = hashpass;
        //we overwrote the type so now we can access our hash password in the userdata type
        this.authService.postUserLoginData(this.userData, 'signup').then(function (result) {
            //now we save the response data so that we can post that data to the auth service
            _this.responseData = result;
            //if success after the authservice has ran, login
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }, function (err) {
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _d || Object])
], SignupPage);

var _a, _b, _c, _d;
//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/** Summary-Author:DanielRuffolo-214231656
 * the following is a provider for getting the coin data from the coin api whic is a public api .
 * more information in readme
 * again, this acts as a callable service to grab the data from the components of the app
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**relevent imports for libraries. HEAVY use of observables and rxjs for handeling the response
of http requests
*/







var StocksProvider = (function () {
    function StocksProvider(http) {
        this.http = http;
        //declare a array to put all the data from the response 
        this.currency = [];
        //url for calling data
        this.curr_url = "https://api.coinmarketcap.com/v1/ticker/";
        console.log('Hello HttpProvider Provider');
    }
    /**Observable
     * this returns in the response payload the cryptocurrency data to a list view
     * we reused the code here from the other service as observables are efficient
  */
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
    /**the methods are predefied as part of RXJS
     * each handles errors, logs the response and converts the response data into readable JSON array format
    */
    StocksProvider.prototype.extractData = function (res) {
        return res.json();
    };
    return StocksProvider;
}());
StocksProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StocksProvider);

var _a;
//# sourceMappingURL=stocks.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_forum_service_forum_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_threads__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_comment__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(28);
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






/**Summary
*Thread component is a Modal , only generated when needed with data passed by a index
*it allows us to view instances of the thread records, no hardcodeing
*the modal is created and disposed in the runtime
*/
var ThreadPage = (function () {
    function ThreadPage(navCtrl, navParams, viewCtrl, forumserviceProvider, threadsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.forumserviceProvider = forumserviceProvider;
        this.threadsService = threadsService;
        this.currentUser = JSON.parse(localStorage.getItem('userData'));
        this.threadList = [];
        this.commentList = [];
        this.threadList = this.navParams.get('threadList');
        this.index = this.navParams.get('index');
        //here we are passing data we need via a concept called navparams. on click of a list in a array, we
        //can pass data to the thread that we need at that index
    }
    ThreadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThreadPage');
        this.RequestThread_Instance(this.string_obj);
        this.RequestThread_Instance_comments(this.string_obj, this.identifier);
        /**here we are loading the modals thread instance data from the datastore using passed in
         * object name and its unique identifier
         * this is what enables us to load records dynamically
  */
    };
    ThreadPage.prototype.RequestThread_Instance = function (string_obj) {
        var _this = this;
        string_obj = this.threadList;
        console.log(string_obj);
        this.forumserviceProvider.getThreadData_Instance(string_obj).subscribe(function (data) { return _this.threadList = data; });
        //here we are calling for the thread data instance
        //and passing it the identifier of what thread object we want
        //then we return it to thread list array and load the variables through html binding
    };
    ThreadPage.prototype.RequestThread_Instance_comments = function (string_obj, identifier) {
        var _this = this;
        identifier = "threadComments-";
        string_obj = this.threadList;
        console.log(string_obj);
        //here we are calling for the thread comment data instance (very similar to above but with miner differences)
        //here we are only looking for anything with the identifier on the front and the object name
        var formattedId = string_obj.split("-").pop();
        console.log(formattedId);
        this.forumserviceProvider.getThreadComments(formattedId, identifier).subscribe(function (data) { return _this.commentList = data; });
    };
    ThreadPage.prototype.onSubmitComment = function (form) {
        this.addThreadComment(form.value.comment_content, this.commentReq_obj, this.comment_author);
        form.reset();
    };
    ThreadPage.prototype.addThreadComment = function (comment_content, comment_author, commentReq_obj) {
        commentReq_obj = this.threadList.title;
        var cleaned_commentReq_obj = commentReq_obj.split(' ').join('_');
        comment_author = this.currentUser.username;
        var comment = new __WEBPACK_IMPORTED_MODULE_4__models_comment__["a" /* Comment */](comment_content, comment_author);
        console.log(comment);
        console.log(cleaned_commentReq_obj);
        this.forumserviceProvider.postThreadCommentData(comment, cleaned_commentReq_obj);
    };
    ThreadPage.prototype.onLeave = function () {
        this.viewCtrl.dismiss();
    };
    return ThreadPage;
}());
ThreadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-thread',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/thread/thread.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>thread</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-card>\n              \n                <ion-item>\n                  \n                  <h2>{{threadList.title}}</h2>\n                  <p>November 5, 1955</p>\n                </ion-item>\n\n                <hr>\n                \n              \n                <!-- <img src="img/advance-card-bttf.png"> -->\n              \n                <ion-card-content>\n                    <p>{{threadList.title}}</p>\n                  <p>{{threadList.description}}</p>\n                </ion-card-content>\n              \n            \n              \n              </ion-card>\n\n\n              <ion-card>\n                  \n                  \n                   \n\n                    <ion-list>\n                        <ion-item *ngFor=" let comment of commentList">\n                          <h2>{{comment.comment_author}}</h2>\n                          <p>{{comment.comment_content}}</p>\n                        </ion-item>\n                      </ion-list>\n              \n                  \n                  </ion-card>\n\n              <ion-card>\n                  \n            \n                  \n                    <!-- <img src="img/advance-card-bttf.png"> -->\n                  \n                    <ion-card-content>\n                        <form #f="ngForm" (ngSubmit)="onSubmitComment(f)">\n                            <ion-list>\n\n                              <ion-item>\n                                <ion-label floating>Comment</ion-label>\n                                <ion-textarea\n                                  type="text"\n                                  name="comment_content"\n                                  ngModel\n                                  required></ion-textarea>\n                              </ion-item>\n                      \n                                <ion-item>\n                                \n\n                                  <button\n                                  ion-button\n                                  color="secondary"\n                                  block\n                                  type="submit"\n                                   (click)="onSubmitComment(f)"\n                                  [disabled]="!f.valid">\n                                  Comment\n                                \n                                </button>\n                                </ion-item>\n                              </ion-list>\n\n\n\n\n                              <ion-row>\n                                <ion-col>\n                              \n                                </ion-col>\n                              </ion-row>\n                          </form>\n                    </ion-card-content>\n                  \n                \n                  \n                  </ion-card>\n\n            \n      </ion-col>\n    </ion-row>\n   \n      <ion-row>\n          <ion-col text-center>\n            <button ion-button block (click)="onLeave()">Leave</button>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/thread/thread.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_forum_service_forum_service__["a" /* ForumServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_forum_service_forum_service__["a" /* ForumServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_threads__["a" /* ThreadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_threads__["a" /* ThreadsService */]) === "function" && _e || Object])
], ThreadPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=thread.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/about/about.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>About</ion-title>\n  \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    \n    <div padding>\n  \n  \n\n        <h2>CryptoForums</h2>\n        <h4>CreatedBy: Daniel Ruffolo</h4>\n        <h4>ID: 214231656</h4>\n        <hr>\n    \n\n      <p>\n          \n          The Following app Crypto Forums Mobile app was made for SIT 313 Mobile Computing Assignment 2\n          with the purpose to creating a forum app that focuses on crypto currency.\n        </p>\n\n        <h2>Legal</h2>\n\n        <p> The App uses 2 external API\'s (deakin datastore (provided))</p>\n           <p> Coin Market Cap Public API https://coinmarketcap.com/api/ which is licenced under the MIT licence\n\n          </p>\n\n          <p>\n              \n              No external Assets with comercial licences were used in this app\n            </p>\n\n\n    \n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_coins_coins__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_addthread_addthread__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_viewthreads_viewthreads__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_thread_thread__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_stocks_stocks__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_forum_service_forum_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_threads__ = __webpack_require__(116);
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
            __WEBPACK_IMPORTED_MODULE_14__pages_viewthreads_viewthreads__["a" /* ViewthreadsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_thread_thread__["a" /* ThreadPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_coins_coins__["a" /* CoinsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_addthread_addthread__["a" /* AddthreadPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_viewthreads_viewthreads__["a" /* ViewthreadsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_thread_thread__["a" /* ThreadPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_17__providers_stocks_stocks__["a" /* StocksProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_forum_service_forum_service__["a" /* ForumServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_20__services_threads__["a" /* ThreadsService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_coins_coins__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_viewthreads_viewthreads__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_addthread_addthread__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(118);
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
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] },
            { title: 'Add Thread', component: __WEBPACK_IMPORTED_MODULE_9__pages_addthread_addthread__["a" /* AddthreadPage */] },
            { title: 'View Threads', component: __WEBPACK_IMPORTED_MODULE_8__pages_viewthreads_viewthreads__["a" /* ViewthreadsPage */] },
            { title: 'View Coins', component: __WEBPACK_IMPORTED_MODULE_7__pages_coins_coins__["a" /* CoinsPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */] }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(comment_content, comment_author) {
        this.comment_content = comment_content;
        this.comment_author = comment_author;
    }
    return Comment;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_crypto_js__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//crypto.js houses the hashing algorithm 
/**Summary
 * Login Component handles both the login request and processing the hashed password
 * to login, we request from the auth service the user object and check to see is the input variables
 * match those in the db
 * if they do, then login is granted
*/
//declaration of the API URL
var login_API_URL = 'http://introtoapps.com/datastore.php?action=load&appid=214231656&objectid=';
var LoginPage = (function () {
    //the user login type
    function LoginPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.userLoginData = { "username": "", "password": "" };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        //request
        this.http.get(login_API_URL + this.userLoginData.username)
            .map(function (res) { return res.json(); }).subscribe(function (responseData) {
            var hashpass = __WEBPACK_IMPORTED_MODULE_6_crypto_js___default.a.SHA256(_this.userLoginData.password).toString(__WEBPACK_IMPORTED_MODULE_6_crypto_js___default.a.enc.Hex);
            //now we hash the login passowrd and compare it to whats in the db
            console.log(hashpass);
            _this.userLoginData.password = hashpass;
            console.log(hashpass);
            //if they are the same, login
            if (responseData.password == hashpass &&
                responseData.username == _this.userLoginData.username) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                //we set root so that we cannot go back on login
                console.log(responseData);
                //we use browser storage here to store the respose (credentials) in the browser
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
        selector: 'page-login',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/login/login.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Login</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class="page_container" padding>\n  \n      <ion-card>\n          <ion-card-header>\n            Login\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item>\n                <ion-label stacked>Username</ion-label>\n                <ion-input type="text" [(ngModel)]="userLoginData.username"></ion-input>\n              </ion-item>\n      \n              <ion-item>\n                <ion-label stacked>Password</ion-label>\n                <ion-input type="password" [(ngModel)]="userLoginData.password"></ion-input>\n              </ion-item>\n      \n      \n              <button ion-button full color="success" (click)="login()">Login</button>\n              <button ion-button full color="success" (click)="signupCall()">Sign Up</button>\n              \n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object])
], LoginPage);

var _a, _b, _c;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/** Summary-Author:DanielRuffolo-214231656
 * the following is a provider for the forum threads inside deakin
 * datastore. each observable and http function acts as a callable function from the app to
 * return the desired json data
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**relevent imports for libraries. HEAVY use of observables and rxjs for handeling the response
of http requests
*/









var ForumServiceProvider = (function () {
    function ForumServiceProvider(http) {
        this.http = http;
        /**
         * importing the local storage for the current user (this is who is currently logged in)
        */
        this.currentUser = JSON.parse(localStorage.getItem('userData'));
        console.log('Hello ForumServiceProvider Provider');
    }
    /**
   * Create a thread function takes the form data and posts data into a thread object.
   * each object is then saved to db
   * the title of the thread is used in the object ID , hence the need to remove any blank spaces
   * this throws a url error otherwise
  */
    ForumServiceProvider.prototype.postThreadData = function (thread) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var raw_threadTitle = thread.title;
            var cleaned_threadTitle = raw_threadTitle.split(' ').join('_');
            var objID = 'thread-' + _this.currentUser.username + '-' + cleaned_threadTitle;
            _this.http.post('http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid=' + objID + '&data=' + JSON.stringify(thread), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    /**
 * the following saves the comment object to the DB upon creation.
 * the delimiter is used to allow for posting only inside the threads comment object
*/
    ForumServiceProvider.prototype.postThreadCommentData = function (comment, cleaned_commentReq_obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var objID = 'threadComments-' + cleaned_commentReq_obj;
            var data = JSON.stringify(comment);
            return _this.http.post('http://introtoapps.com/datastore.php?action=append&appid=214231656&objectid=' + objID + '&data=' + data, headers)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    /**
* the following upon creation of a thread, creates a comment object for that specific thread.
* notice we grab the thread title, this is the object id for the correct thread under comments
* we then post a array on init ready for use
*/
    ForumServiceProvider.prototype.bindThreadComment = function (thread) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var raw_threadTitle = thread.title;
            var cleaned_threadTitle = raw_threadTitle.split(' ').join('_');
            var objID = 'threadComments' + '-' + cleaned_threadTitle;
            var comment_init = '[]';
            _this.http.post('http://introtoapps.com/datastore.php?action=save&appid=214231656&objectid=' + objID + '&data=' + comment_init, { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    /**
* the following is a observable using the imported library and rxjs. mainly used for get requests
* each function calals a specific method to hendle the response data. a very clean approach
* unfortunately my atempt to use this with post didnt work as well
*/
    /**
* the following will return the list of objects for threads in the app. we use a prefix to fetch only
* the object ID's with the delimiter(thread-) which is automatically appended to the thread object id
* this then serves the select thread as we pass this id through a index
*/
    ForumServiceProvider.prototype.getThreadData = function () {
        return this.http.get('http://introtoapps.com/datastore.php?action=listall&prefix=thread-&appid=214231656')
            .do(this.logResponse)
            .map(this.extractData)
            .do(this.logResponse)
            .catch(this.catchError);
    };
    /**
* the following will return the relevent thread data on click of the thread in threadlist.
* the threadlist is a list of all the object ID's and on click, the index is passed and on
* load of the modal, the data is loaded in
*/
    ForumServiceProvider.prototype.getThreadData_Instance = function (string_obj) {
        return this.http.get('http://introtoapps.com/datastore.php?action=load&appid=214231656&objectid=' + string_obj)
            .do(this.logResponse)
            .map(this.extractData)
            .do(this.logResponse)
            .catch(this.catchError);
    };
    /**
* the following will return the relevent thread data comments on click of the thread .
* the identifier and the id are passed from the thread instance itself which ensures we load the correct
* comment response
*/
    ForumServiceProvider.prototype.getThreadComments = function (formattedId, identifier) {
        console.log(formattedId + identifier);
        return this.http.get('http://introtoapps.com/datastore.php?action=load&appid=214231656&objectid=' + identifier + formattedId)
            .do(this.logResponse)
            .map(this.extractData)
            .do(this.logResponse)
            .catch(this.catchError);
    };
    ForumServiceProvider.prototype.catchError = function (error) {
        console.log(error);
        console.log("an error occured");
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].throw(error.json().error || "network error.");
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ForumServiceProvider);

var _a;
//# sourceMappingURL=forum-service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coins_coins__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewthreads_viewthreads__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addthread_addthread__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(215);
/**Home Page
 * the following acts as the home component
 * the home component acts as the main navigation screen for the app
 *
*/
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
    /**Network detector
     * here we are initialising in the app a network detection service
     * this will detect wether the app looses network connection or not
     * this could be further impoved later on to stop all http requests IF the connection is down
     * NOT MY IDEA
     * the following was aquired using a youtube tutorial by Paul Haliday
     * https://www.youtube.com/watch?v=r-1xKiEd2-M
  */
    HomePage.prototype.ionViewDidEnter = function () {
        this.detectNet();
    };
    HomePage.prototype.detectNet = function () {
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
    HomePage.prototype.displayNetworkUpdate = function (connectionState) {
        var networkType = this.network.type;
        this.toast.create({
            message: "you are now " + connectionState + " via " + networkType,
        }).present();
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
    //   about_menu(){
    //     this.navCtrl.push(AboutPage);
    //  }
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/'<!-- this is the home page layout\ntried to experament and achieve a grid style dashboard with clickable grid items\nwe use ionic grid to achieve the desired look as each clickable item is a row\nthis makes styling very easy and is the bootstrap alternative for ionic -->\n\n<!-- the div elements here are clickable events, i built it this way as the look of buttons inside grid elements\ndid not suit the styling as much -->\n\n<ion-header>\n\n  <ion-navbar >\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n\n<!--  -->\n<div padding class="dash-create" style="color: white;" (click)="create_menu()">\n\n\n  <div>  <h1>Create a Thread</h1>\n    <p>contribute to the community</p></div>\n</div>\n\n<div padding class="dash-view" style="color: white;" (click)="view_menu()">\n\n\n  <div>  <h1>Browse Threads</h1>\n    <p>View Other Members posts</p></div>\n</div>\n\n\n\n    <div class="dash-trending">\n      <ion-row padding style="color:white;">\n        <div>\n          <h1>Trending</h1>\n          <p>Todays most popular thread</p>\n        </div>\n\n      </ion-row>\n\n\n\n    </div>\n\n\n<!-- our forum will need a context, Cryptocurrency , this will lead to a view of live coin prices\nhowever given we are not at the stage of building a server side, this has been left out -->\n<!-- the intention is to dynamically show updated proces on the dashboard with anamation -->\n    <div padding class="dash-coinUpdates" (click)="coins_menu()">\n        <h1  style="color:white;">Coin Prices</h1>\n          <ion-row padding style="color:white;" >\n            <ion-card class="dash_cardUpdates">\n            <ion-card-content>\n              <div class="ion-col col-12 item item-text-wrap"><p>Latest Coin stats</p></div>\n            </ion-card-content>\n          </ion-card>\n      </ion-row>\n    </div>\n\n    <!-- <div class="dash-trending"(click)="coins_about"()>\n        <ion-row padding style="color:white;">\n          <div>\n            <h1>About</h1>\n            <p>About The App</p>\n          </div>\n  \n        </ion-row>\n  \n  \n  \n      </div> -->\n  \n\n    <div class="dash_lower" padding>\n          <ion-row>\n\n            <!-- left lower dash -->\n            <ion-col>\n              <div padding class="dash_lower" (click)="account_menu()">\n\n\n                <div>  <h1>Account</h1>\n                  <p>View your account and settings</p></div>\n              </div>\n            </ion-col>\n\n              <!-- right lower dash -->\n            <ion-col>\n              <div padding class="dash_lower" (click)="logout_menu()">\n\n\n                <div>  <h1>Log-out</h1>\n                  <p>Leave the Forums</p></div>\n              </div>\n            </ion-col>\n\n      </ion-row>\n    </div>\n\n\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewthreadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_forum_service_forum_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thread_thread__ = __webpack_require__(224);
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
    function ViewthreadsPage(navCtrl, navParams, forumServiceProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forumServiceProvider = forumServiceProvider;
        this.modalCtrl = modalCtrl;
        this.threadList = [];
    }
    ViewthreadsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewthreadsPage');
    };
    ViewthreadsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.forumServiceProvider.getThreadData().subscribe(function (data) { return _this.threadList = data; });
    };
    ViewthreadsPage.prototype.on_Viewthread = function (threadList, index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__thread_thread__["a" /* ThreadPage */], { threadList: threadList, index: index });
        modal.present();
    };
    return ViewthreadsPage;
}());
ViewthreadsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-viewthreads',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/viewthreads/viewthreads.html"*/'<!--\n  Generated template for the ViewthreadsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>viewthreads</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  	<ion-list >\n        <ion-item *ngFor=" let thread of threadList; let i = index" (click)="on_Viewthread(thread,i)">\n\n          <p style="text-transform: uppercase;">\n            \n              {{thread}}\n             \n          </p>\n\n        </ion-item>\n          \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/viewthreads/viewthreads.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_forum_service_forum_service__["a" /* ForumServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], ViewthreadsPage);

//# sourceMappingURL=viewthreads.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map