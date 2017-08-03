webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_forum_view_forum__ = __webpack_require__(195);
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





/**
 * Generated class for the ForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForumPage = (function () {
    function ForumPage(navCtrl, navParams, forumsService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forumsService = forumsService;
        this.modalCtrl = modalCtrl;
        this.AddForumPage = __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */];
        this.forums = [];
    }
    ForumPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad ForumPage');
        this.forums = this.forumsService.loadForums();
    };
    ForumPage.prototype.onOpenForum = function (forum, index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__view_forum_view_forum__["a" /* ViewForumPage */], { forum: forum, index: index });
        modal.present();
    };
    ForumPage.prototype.goToCreate = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */]); };
    return ForumPage;
}());
ForumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forum',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/forum/forum.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>forum</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="page_container">\n  <ion-scroll class="forum_scroll" scrollX="true" scrollY="true">\n\n      <ion-list padding>\n  <ion-item ion-item *ngFor="let forum of forums; let i = index" (click)="onOpenForum(forum, i)">\n\n    <ion-thumbnail item-start>\n      <img src="img/thumbnail-totoro.png">\n    </ion-thumbnail>\n    <h2>{{forum.title}}</h2>\n    <p>Users Username • 1988</p>\n    <button ion-button clear item-end>View</button>\n  </ion-item>\n</ion-list>\n\n\n\n</ion-scroll>\n  <!-- align to the bottom of the page -->\n  <ion-footer>\n\n    <!-- <button ion-button block color="primary" (click)="goToCreate()">\n      Create a new forum post\n    </button> -->\n\n\n\n    <div  style=" width: 100%; background-color: #1abc9c;">\n        <div style="text-align: center">\n\n          <ion-grid>\n  <ion-row>\n    <ion-col>\n      <button ion-button full (click)="goToCreate()">Create a post</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button full>Options</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n        </div>\n    </div>\n\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/forum/forum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_forums__["a" /* ForumService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
], ForumPage);

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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



/**
 * Generated class for the ViewForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
        selector: 'page-view-forum',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/view-forum/view-forum.html"*/'\n<ion-header>\n\n  <ion-navbar >\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>View Post</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="container" >\n  <ion-grid>\n\n<div>\n  <ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="img/marty-avatar.png">\n    </ion-avatar>\n    <h2>Username</h2>\n    <p>November 5, 1955</p>\n  </ion-item>\n\n\n  <ion-card-content>\n    <ion-item>\n      <div>\n        <h2>title:{{forum.title}}</h2>\n        <p>Author: {{forum.author}} Coin: {{forum.coins}}</p>\n        <p>Related: {{forum.keyword1}} - {{forum.keyword2}} - {{forum.keyword3}}</p>\n      </div>\n\n    </ion-item>\n\n    <ion-item>\n      <div>\n        <p> Content:{{forum.description}}</p>\n      </div>\n\n    </ion-item>\n\n  </ion-card-content>\n</ion-card>\n\n\n</div>\n\n\n\n\n\n\n\n\n\n    <ion-footer>\n\n      <!-- <button ion-button block color="primary" (click)="goToCreate()">\n        Create a new forum post\n      </button> -->\n\n\n\n      <div  style=" width: 100%; background-color: #1abc9c;">\n          <div style="text-align: center">\n\n            <ion-grid>\n\n                  <ion-row>\n                    <ion-col text-center>\n\n                      <button ion-button\n                      block\n                      (click)= "onLeave()">Leave</button>\n\n                    </ion-col>\n\n                    <ion-col text-center>\n\n                      <button ion-button\n                      block\n                      (click)= "onDelete()">Remove</button>\n\n                    </ion-col>\n                  </ion-row>\n  </ion-grid>\n\n          </div>\n      </div>\n\n    </ion-footer>\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/view-forum/view-forum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_forums__["a" /* ForumService */]])
], ViewForumPage);

//# sourceMappingURL=view-forum.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(197);
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

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
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
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.createCall = function () {
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container" padding>\n\n  <!-- start of signup box -->\n  <div padding align="center">\n    <ion-row>\n\n      <ion-card>\n  <ion-card-header>\n    Create a Account\n  </ion-card-header>\n  <ion-card-content>\n    <p>Crypto-Forum is a app that allows you to always be ontop of the world of Cryptocurrency,\n    Todays markets require you to not only focus on the price and economy, but the opinions of the investors\n  themself. Take a step forward in your trading game and be involved in the community</p>\n  </ion-card-content>\n</ion-card>\n\n\n\n    </ion-row>\n  </div>\n  <!-- end of signup box -->\n\n  <!-- start of password box -->\n  <div padding align="center">\n    <ion-row>\n      <ion-list>\n\n        <ion-item>\n        <ion-label>Email:</ion-label>\n        <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <br>\n\n        <ion-item>\n        <ion-label>Password:</ion-label>\n        <ion-input type="password"></ion-input>\n        </ion-item>\n\n        <br>\n\n        <ion-item>\n        <ion-label>Confirm Password:</ion-label>\n        <ion-input type="password"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n    </ion-row>\n\n    <ion-row>\n    <button ion-button block (click)="createCall()">Create</button>\n  </ion-row>\n\n  </div>\n  <!-- end of passowrd box -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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
        selector: 'page-list',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <button ion-item *ngFor="let forum of forums; let i = index" (click)="onOpenForum(forum, i)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{forum.title}}\n      <div class="item-note" item-right>\n        {{forum.description}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/list/list.html"*/
    })
    // addapting list view to suit forum view
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forum_forum__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_forum_add_forum__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_view_forum_view_forum__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_forums__ = __webpack_require__(51);
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
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_forum_forum__["a" /* ForumPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_add_forum_add_forum__["a" /* AddForumPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_view_forum_view_forum__["a" /* ViewForumPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_forum_forum__["a" /* ForumPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_add_forum_add_forum__["a" /* AddForumPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_view_forum_view_forum__["a" /* ViewForumPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__services_forums__["a" /* ForumService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_forum_forum__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_forum_add_forum__ = __webpack_require__(50);
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
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] },
            { title: 'Forum', component: __WEBPACK_IMPORTED_MODULE_7__pages_forum_forum__["a" /* ForumPage */] },
            { title: 'Create a Post', component: __WEBPACK_IMPORTED_MODULE_8__pages_add_forum_add_forum__["a" /* AddForumPage */] }
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

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Forum; });
var Forum = (function () {
    function Forum(title, Author, description, dateCreated, coins, keyword1, keyword2, keyword3) {
        this.title = title;
        this.Author = Author;
        this.description = description;
        this.dateCreated = dateCreated;
        this.coins = coins;
        this.keyword1 = keyword1;
        this.keyword2 = keyword2;
        this.keyword3 = keyword3;
    }
    return Forum;
}());

//# sourceMappingURL=forum.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forum_forum__ = __webpack_require__(101);
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
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.create_menu = function () {
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */];
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */]);
    };
    HomePage.prototype.view_menu = function () {
        this.pushPage = __WEBPACK_IMPORTED_MODULE_2__add_forum_add_forum__["a" /* AddForumPage */];
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__forum_forum__["a" /* ForumPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar >\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n\n\n<!--  -->\n<div padding class="dash-create" style="color: white;" (click)="create_menu()">\n\n\n  <div>  <h1>Create a Post</h1>\n    <p>contribute to the community</p></div>\n</div>\n\n<div padding class="dash-view" style="color: white;" (click)="view_menu()">\n\n\n  <div>  <h1>Browse Posts</h1>\n    <p>View Other Members posts</p></div>\n</div>\n\n\n\n    <div class="dash-trending">\n      <ion-row padding style="color:white;">\n        <div>\n          <h1>Trending</h1>\n          <p>Todays most popular thread</p>\n        </div>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="http://via.placeholder.com/50x50">\n    </ion-avatar>\n    <h2>Marty McFly</h2>\n    <p>November 5, 1955</p>\n  </ion-item>\n\n\n\n  <ion-card-content>\n    <p>Dummy Crypto Currency stock information</p>\n  </ion-card-content>\n\n\n\n</ion-card>\n      </ion-row>\n\n    </div>\n\n\n\n    <div padding class="dash-coinUpdates">\n        <h1  style="color:white;">Coin Prices</h1>\n          <ion-row >\n            <ion-card class="dash_cardUpdates">\n            <ion-card-content>\n              <div class="ion-col col-12 item item-text-wrap"><p>Coin: BTC   Price: 2010.30</p></div>\n            </ion-card-content>\n          </ion-card>\n      </ion-row>\n    </div>\n\n\n\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_forums__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forum_forum__ = __webpack_require__(101);
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
        this.forumsService.addForum(form.value.title, form.value.author, form.value.description, form.value.dateCreated, form.value.coins, form.value.keyword1, form.value.keyword2, form.value.keyword3);
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
        selector: 'page-add-forum',template:/*ion-inline-start:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/add-forum/add-forum.html"*/'<!--\n  Generated template for the AddForumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create a Post</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="container">\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Title</ion-label>\n      <ion-input\n        type="text"\n        placeholder="Name of your post"\n        name="title"\n        ngModel\n        required>\n        </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Author</ion-label>\n      <ion-input\n        type="text"\n        placeholder="created by"\n        name="author"\n        ngModel\n        required>\n        </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>content</ion-label>\n      <ion-textarea\n        name="description"\n        ngModel\n        required></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>date</ion-label>\n      <ion-input\n        type="text"\n        placeholder="date created"\n        name="date"\n        ngModel\n        required>\n        </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Coins Related to</ion-label>\n      <ion-input\n        type="text"\n        placeholder="coin related to?"\n        name="coins"\n        ngModel\n        required>\n        </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Key Word 1</ion-label>\n      <ion-input\n        type="text"\n        placeholder="enter a key word"\n        name="keyword1"\n        ngModel\n        required>\n        </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Key Word 2</ion-label>\n      <ion-input\n        type="text"\n        placeholder="enter a key word"\n        name="keyword2"\n        ngModel>\n        </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Key Word 3</ion-label>\n      <ion-input\n        type="text"\n        placeholder="enter a key word"\n        name="keyword3"\n        ngModel>\n        </ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n\n\n    <ion-row>\n      <ion-col>\n        <button\n          ion-button\n          color="secondary"\n          block\n          type="submit"\n           (click)="onSubmit()"\n          [disabled]="!f.valid">\n          Store It!\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>\n</ion-content>\n'/*ion-inline-end:"/Users/dansmacbodansmacbookok/Desktop/July/UNI_finalTrimester/Mobile_computing/druffolo_forumproj/druffolo_mblComputing_Assign1/src/pages/add-forum/add-forum.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services_forums__["a" /* ForumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_forums__["a" /* ForumService */]) === "function" && _f || Object])
], AddForumPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-forum.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_forum__ = __webpack_require__(268);

var ForumService = (function () {
    function ForumService() {
        this.forums = [];
    }
    ForumService.prototype.addForum = function (title, author, description, dateCreated, coins, keyword1, keyword2, keyword3) {
        var forum = new __WEBPACK_IMPORTED_MODULE_0__models_forum__["a" /* Forum */](title, author, description, dateCreated, coins, keyword1, keyword2, keyword3);
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

/***/ })

},[199]);
//# sourceMappingURL=main.js.map