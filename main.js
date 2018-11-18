(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box1 {\r\n    width:80%;\r\n    margin:20px auto;\r\n } \r\n .box1 div{\r\n    box-shadow:2px 2px 4px 3px rgba(187, 183, 183, 0.972);\r\n    margin:20px;\r\n    text-align: center;\r\n    border-top-left-radius:30px;\r\n    color:rgb(0, 0, 0);  \r\n    font-size:20px;    \r\n   } \r\n .box1 h3{\r\n    transition:color linear 2s;\r\n} \r\n .box1 div:hover h3{\r\n   color:blue;\r\n}"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box1\">\n  <div  style=\"background-color:rgb(206, 217, 221);\">\n    <h3 style=\"background-color:skyblue;border-top-left-radius:30px;\">About Us</h3>\n    The E-NGO is a platform that provides space for interface between VOs/NGOs and users.\n    It covers many NGOs of Haldwani Uttarakhand.\n    Any NGOs can register them here and can post events.\n    It helps users to connect with the different NGOs and see their activities posted in the website.\n\n  </div>\n\n  <div  style=\"background-color:rgb(206, 217, 221);\">\n    <h3 style=\"background-color:skyblue;border-top-left-radius:30px;\">Design & Developed by</h3>\n    This module has been developed by a group of C.S.E students of Amrapali Institue of Technology and Sciences.\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(afs, router, snackBar) {
        this.afs = afs;
        this.router = router;
        this.snackBar = snackBar;
        this.confirm = false;
        this.usernameArray = [10];
        this.passwordArray = [10];
    }
    ApiService.prototype.getdata = function () {
        return this.afs.collection('ngo').valueChanges();
    };
    // add ngo details from register ngo component
    ApiService.prototype.addNGOData = function (ngoData) {
        console.log('service');
        this.afs.collection('ngo').add(ngoData);
    };
    // add user from register user component
    ApiService.prototype.addUserData = function (userData) {
        console.log('service');
        this.afs.collection('users').add(userData);
    };
    // login user authentication.
    ApiService.prototype.ngoDetails = function (username, password) {
        var _this = this;
        this.afs.collection('users').valueChanges().subscribe(function (data) {
            for (_this.i = 0; _this.i <= 30; _this.i++) {
                _this.dx = data[_this.i];
                _this.usernameArray[_this.i] = _this.dx.username;
                _this.passwordArray[_this.i] = _this.dx.password;
                if (username === _this.usernameArray[_this.i] && password === _this.passwordArray[_this.i]) {
                    _this.confirm = true;
                    _this.isValid = true;
                    _this.snackBar.open('User Successfully LoggedIn', 'OK', {
                        duration: 3000
                    });
                    _this.router.navigate(['ngoDetails']);
                    break;
                }
                else {
                    _this.router.navigate(['ngoDetails']);
                }
            }
        });
        return true;
    };
    // ngodetails component get data
    ApiService.prototype.ngoData = function () {
        return this.afs.collection('ngo').valueChanges();
    };
    // view component contact is form
    ApiService.prototype.contactUs = function (contact) {
        this.afs.collection('contact').add(contact);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-admin/login-admin.component */ "./src/app/login-admin/login-admin.component.ts");
/* harmony import */ var _login_ngo_login_ngo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-ngo/login-ngo.component */ "./src/app/login-ngo/login-ngo.component.ts");
/* harmony import */ var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-user/login-user.component */ "./src/app/login-user/login-user.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
/* harmony import */ var _register_ngo_register_ngo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-ngo/register-ngo.component */ "./src/app/register-ngo/register-ngo.component.ts");
/* harmony import */ var _ngo_details_ngo_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngo-details/ngo-details.component */ "./src/app/ngo-details/ngo-details.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: ' ', pathMatch: 'full', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] },
    { path: 'loginAdmin', component: _login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_2__["LoginAdminComponent"] },
    { path: 'loginNGO', component: _login_ngo_login_ngo_component__WEBPACK_IMPORTED_MODULE_3__["LoginNGOComponent"] },
    { path: 'loginUser', component: _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_4__["LoginUserComponent"] },
    { path: 'view', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] },
    { path: 'registerUser', component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_6__["RegisterUserComponent"] },
    { path: 'registerNGO', component: _register_ngo_register_ngo_component__WEBPACK_IMPORTED_MODULE_7__["RegisterNGOComponent"] },
    { path: 'ngoDetails', component: _ngo_details_ngo_details_component__WEBPACK_IMPORTED_MODULE_8__["NgoDetailsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'aboutUs', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"] },
    { path: '**', component: _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-admin/login-admin.component */ "./src/app/login-admin/login-admin.component.ts");
/* harmony import */ var _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-user/login-user.component */ "./src/app/login-user/login-user.component.ts");
/* harmony import */ var _login_ngo_login_ngo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-ngo/login-ngo.component */ "./src/app/login-ngo/login-ngo.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
/* harmony import */ var _register_ngo_register_ngo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register-ngo/register-ngo.component */ "./src/app/register-ngo/register-ngo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngo_details_ngo_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ngo-details/ngo-details.component */ "./src/app/ngo-details/ngo-details.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_8__["LoginAdminComponent"],
                _login_user_login_user_component__WEBPACK_IMPORTED_MODULE_9__["LoginUserComponent"],
                _login_ngo_login_ngo_component__WEBPACK_IMPORTED_MODULE_10__["LoginNGOComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_12__["ViewComponent"],
                _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__["RegisterUserComponent"],
                _register_ngo_register_ngo_component__WEBPACK_IMPORTED_MODULE_15__["RegisterNGOComponent"],
                _ngo_details_ngo_details_component__WEBPACK_IMPORTED_MODULE_21__["NgoDetailsComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_28__["AboutUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"], _api_service__WEBPACK_IMPORTED_MODULE_24__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, snackBar) {
        this.auth = auth;
        this.router = router;
        this.snackBar = snackBar;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isValid) {
            this.auth.isValid = false;
            return true;
        }
        else {
            this.snackBar.open('Please Enter Correct Username and password ', 'OK', {
                duration: 4000
            });
        }
        this.router.navigate(['loginUser']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.active{\n  background-color:rgb(16, 16, 112);\n  color:white;\n}\n\n.box1{\n  margin-left:25%;\n}\n\n.box1 a{\n  margin:10px;\n  text-decoration: none;\n}\n\n.footer {\n  background-color: rgba(28, 27, 107, 0.87);\n  width:100%;\n  height:10%;\n  margin:4px 0px;\n  color:white;\n  bottom:0px;\n  opacity: 1;\n}\n\n.line{\n  margin-top:5px;\n  border-bottom:5px solid rgb(13, 13, 97);\n  margin-bottom:10px;\n}\n\n.donate{\n  background-color:lightgreen;\n  width:80%;margin:auto;\n  color:blue;\n  font-weight:500;\n}\n\n.donate:active .donate {\n  color:green;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a class=\"donate\" mat-list-item href=\"https://paytm.com/helpinghand/\"><mat-icon>monetization_on</mat-icon>DONATE</a><hr>\n      <a mat-list-item href=\"http://www.bhoomi.org.in/\"><mat-icon>account_circle</mat-icon>Bhoomi Sanstha</a><hr>\n      <a mat-list-item href=\"http://www.aryasamajmarriage.com/\"><mat-icon>account_circle</mat-icon>Arya Samaj Marriage</a><hr>\n      <a mat-list-item href=\"http://suchetna.org/g\"><mat-icon>account_circle</mat-icon>Suchetna</a><hr>\n      <a mat-list-item href=\"https://srajan-spastic-society.business.site/\"><mat-icon>account_circle</mat-icon>Srajan Spastic Society</a><hr>\n      <a mat-list-item href=\"https://www.searchdonation.com/social-welfare-societya48\"><mat-icon>account_circle</mat-icon>Social Welfare Society</a><hr>\n      <a mat-list-item href=\"https://www.searchdonation.com/ek-sankalp-society\"><mat-icon>account_circle</mat-icon>Ek Sankalp Society</a><hr>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n\n  <mat-toolbar style=\"position:fixed;\" color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>E-NGO</span>\n     \n  </mat-toolbar>\n    <!-- main content -->  \n    <div style=\"height:10%;\"></div>\n    <div class=\"box1\"> \n        <div class=\"button-coloum\">\n          <a mat-stroked-button color=\"basic\" routerLinkActive=\"active\" routerLink=\"view\" href=\"#\"><mat-icon>home</mat-icon></a>\n          <a mat-stroked-button color=\"basic\" routerLinkActive=\"active\" routerLink=\"loginUser\"><mat-icon>lock</mat-icon>User</a>\n          <!-- <a mat-stroked-button color=\"basic\" routerLinkActive=\"active\" routerLink=\"loginAdmin\">Admin</a> -->\n          <a mat-stroked-button color=\"basic\" routerLinkActive=\"active\" routerLink=\"loginNGO\"><mat-icon>lock</mat-icon>NGO</a>\n          <a mat-stroked-button color=\"basic\" routerLinkActive=\"active\" routerLink=\"aboutUs\"><mat-icon>account_box</mat-icon>AboutUs</a>\n        </div>\n        </div>\n        <div class=\"line\"></div>\n    <router-outlet></router-outlet>\n    <div class=\"footer\"> ALL RIGHTS RESERVED E-NGO</div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(breakpointObserver, http, router, api) {
        this.breakpointObserver = breakpointObserver;
        this.http = http;
        this.router = router;
        this.api = api;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login-admin/login-admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-admin/login-admin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 50%;\r\n    margin:auto;\r\n  }\r\n  \r\n  h1{\r\n     color:rgb(10, 10, 97);\r\n  }"

/***/ }),

/***/ "./src/app/login-admin/login-admin.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-admin/login-admin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"example-container\">\n<h1>ADMIN LOGIN</h1>\n\n  <mat-form-field>\n    <input MatFormFieldControl matInput placeholder=\"Username\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <input type=\"text\" MatFormFieldControl matInput placeholder=\"Password\" />\n  </mat-form-field>\n\n  <button mat-stroked-button color=\"primary\">Login</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login-admin/login-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-admin/login-admin.component.ts ***!
  \******************************************************/
/*! exports provided: LoginAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminComponent", function() { return LoginAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginAdminComponent = /** @class */ (function () {
    function LoginAdminComponent() {
    }
    LoginAdminComponent.prototype.ngOnInit = function () {
    };
    LoginAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-admin',
            template: __webpack_require__(/*! ./login-admin.component.html */ "./src/app/login-admin/login-admin.component.html"),
            styles: [__webpack_require__(/*! ./login-admin.component.css */ "./src/app/login-admin/login-admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginAdminComponent);
    return LoginAdminComponent;
}());



/***/ }),

/***/ "./src/app/login-ngo/login-ngo.component.css":
/*!***************************************************!*\
  !*** ./src/app/login-ngo/login-ngo.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 80%;\r\n    margin:auto;\r\n    margin-bottom:20px;\r\n\r\n  }\r\n  \r\n  .icon {\r\n    padding-top:5px;\r\n    font-size:30px;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .ngo {\r\n    text-align:center;\r\n    box-shadow: 2px 2px 4px 4px rgb(157, 164, 167);\r\n    width:60%;\r\n    margin:auto;\r\n    margin-bottom:20px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/login-ngo/login-ngo.component.html":
/*!****************************************************!*\
  !*** ./src/app/login-ngo/login-ngo.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngo\">\n<div class=\"example-container\">\n\n  <div class=\"icon\"><mat-icon>lock</mat-icon>\n    NGO Login</div> \n    \n    <mat-form-field>\n      <input autofocus MatFormFieldControl matInput placeholder=\"Username\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <input type=\"password\" MatFormFieldControl matInput placeholder=\"NGO ID\" />\n    </mat-form-field>\n  \n    <button mat-stroked-button color=\"primary\">Login</button>\n    <span>New NGO? <a routerLink=\"/registerNGO\">Register here</a></span>\n  </div>\n</div>\n\n  \n"

/***/ }),

/***/ "./src/app/login-ngo/login-ngo.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login-ngo/login-ngo.component.ts ***!
  \**************************************************/
/*! exports provided: LoginNGOComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginNGOComponent", function() { return LoginNGOComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginNGOComponent = /** @class */ (function () {
    function LoginNGOComponent() {
    }
    LoginNGOComponent.prototype.ngOnInit = function () {
    };
    LoginNGOComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-ngo',
            template: __webpack_require__(/*! ./login-ngo.component.html */ "./src/app/login-ngo/login-ngo.component.html"),
            styles: [__webpack_require__(/*! ./login-ngo.component.css */ "./src/app/login-ngo/login-ngo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginNGOComponent);
    return LoginNGOComponent;
}());



/***/ }),

/***/ "./src/app/login-user/login-user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-user/login-user.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 80%;\r\n    margin:auto;\r\n    margin-bottom:20px;\r\n  }\r\n  \r\n  .icon {\r\n    padding-top:5px;\r\n    font-size:30px;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .user {\r\n    text-align:center;\r\n    box-shadow: 2px 2px 4px 4px rgb(157, 164, 167);\r\n    width:80%;\r\n    margin:auto;\r\n    margin-bottom:20px;\r\n  }\r\n  \r\n  .validatingUsername {\r\n    width:50%;\r\n    height:8%;\r\n    color:red;\r\n    /* border:2px solid red; */\r\n  }\r\n\r\n  \r\n\r\n  "

/***/ }),

/***/ "./src/app/login-user/login-user.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-user/login-user.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user\"> \n\n<form #userForm=\"ngForm\" ng-submit=\"yes\"> \n<div class=\"example-container\">\n  <div class=\"icon\"><mat-icon>lock</mat-icon>\n  User Login</div>\n    <mat-form-field>\n      <input autofocus #user=\"ngModel\" MatFormFieldControl matInput placeholder=\"Username\" name=\"username\" required [(ngModel)]=\"username\">\n    </mat-form-field>\n  <div *ngIf=\"user.invalid && user.touched\" class=\"validatingUsername\">Invalid Username</div>\n    \n  <mat-form-field>\n      <input #pass=\"ngModel\" type=\"password\" MatFormFieldControl matInput placeholder=\"Password\" name=\"password\" maxlength=\"15\" required [(ngModel)]=\"password\"/>\n    </mat-form-field>\n    <div *ngIf=\"pass.invalid && pass.touched\" class=\"validatingUsername\">Invalid Username</div>\n   <!-- progress bar -->\n    <mat-progress-bar *ngIf=\"progressbar\" mode=\"indeterminate\"></mat-progress-bar>\n\n    <button mat-stroked-button [disabled]=\"!userForm.form.valid\" color=\"primary\" (click)=\"ngoDetails()\">Login</button>\n    <span>New User? <a routerLink=\"/registerUser\">Register here</a></span>\n  </div>\n  </form>\n  </div>\n  "

/***/ }),

/***/ "./src/app/login-user/login-user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-user/login-user.component.ts ***!
  \****************************************************/
/*! exports provided: LoginUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserComponent", function() { return LoginUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginUserComponent = /** @class */ (function () {
    function LoginUserComponent(serv, router) {
        this.serv = serv;
        this.router = router;
        this.yes = true;
        this.progressbar = false;
    }
    LoginUserComponent.prototype.ngOnInit = function () {
    };
    LoginUserComponent.prototype.ngoDetails = function () {
        this.progressbar = true;
        this.progressbar = this.serv.ngoDetails(this.username, this.password);
    };
    LoginUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-user',
            template: __webpack_require__(/*! ./login-user.component.html */ "./src/app/login-user/login-user.component.html"),
            styles: [__webpack_require__(/*! ./login-user.component.css */ "./src/app/login-user/login-user.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginUserComponent);
    return LoginUserComponent;
}());



/***/ }),

/***/ "./src/app/ngo-details/ngo-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ngo-details/ngo-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    background-color:wheat;\r\n}\r\n.header {\r\n    height:60px;\r\n    background-color:rgb(42, 55, 75);\r\n    color:white;\r\n    padding-top:1%;\r\n}\r\nmat-grid-tile {\r\n    background-color:rgb(29, 197, 253);\r\n    width:70%;\r\n    border:3px solid rgb(120, 223, 120);\r\n    margin-bottom:10px;\r\n}\r\n.example-card {\r\n    width: 600px;\r\n    margin:auto;\r\n    border-radius:10px;\r\n  }\r\n.example-header-image {\r\n    background-image: url('ngodp.jpg');\r\n    background-size: cover;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/ngo-details/ngo-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/ngo-details/ngo-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n<div class=\"header\">\n <div style=\"float:left;margin:auto;width:75%;\"><h3>NGO Details</h3></div> \n <div style=\"float:right;\">\n   <a style=\"text-decoration:none;font-size:18px;\" mat-raised-button color=\"primary\" routerLink=\"../loginUser\">Logout</a>\n  </div>\n</div>\n\n  <br />\n  \n<div> \n        <mat-grid-list cols=\"1\" rowHeight=\"600px\">\n            <mat-grid-tile\n                *ngFor=\"let data of ngoDetails\">\n                <mat-card class=\"example-card\">\n                  <!-- matcard -->\n                    <mat-card-header>\n                      <div mat-card-avatar class=\"example-header-image\">\n                      </div>\n                      <mat-card-title style=\"color:rgb(0, 49, 128);text-transform:uppercase;\"><b>{{data.ngoName}}</b></mat-card-title>\n                      <mat-card-subtitle>{{data.location}}</mat-card-subtitle>\n                    </mat-card-header>\n                    <img mat-card-image height=\"300px\" src={{data.ngoImageUrl}} alt=\"Image of NGO\">\n                    <mat-card-content>\n                      <p>\n                          {{data.description}}\n                      </p>\n                    </mat-card-content>\n                    <!-- <mat-card-actions>\n                      <button mat-button>LIKE</button>\n                      <button mat-button>SHARE</button>\n                    </mat-card-actions> -->\n                    OWNER - {{data.username}}<br />\n                    EMAIL - {{data.email}}<br />\n                    CONTACT NUMBER - {{data.num}}<br />\n                  </mat-card>\n                  <!-- mat card end here  -->\n            </mat-grid-tile>\n          </mat-grid-list>\n      <!-- <div class=\"grid-container\">\n          <div class=\"grid-item\">Owner</div>\n          <div class=\"grid-item\">{{data.username}}</div>  \n          <div class=\"grid-item\">Email</div>\n          <div class=\"grid-item\">{{data.email}}</div>  \n          <div class=\"grid-item\">Contact Number</div>  \n          <div class=\"grid-item\">{{data.num}}</div>  \n        </div> -->\n\n</div>      \n</div>\n"

/***/ }),

/***/ "./src/app/ngo-details/ngo-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ngo-details/ngo-details.component.ts ***!
  \******************************************************/
/*! exports provided: NgoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgoDetailsComponent", function() { return NgoDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgoDetailsComponent = /** @class */ (function () {
    function NgoDetailsComponent(serv) {
        this.serv = serv;
    }
    NgoDetailsComponent.prototype.ngOnInit = function () {
        this.showNGOS();
    };
    NgoDetailsComponent.prototype.showNGOS = function () {
        var _this = this;
        this.serv.ngoData().subscribe(function (data) { _this.ngoDetails = data; });
    };
    NgoDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngo-details',
            template: __webpack_require__(/*! ./ngo-details.component.html */ "./src/app/ngo-details/ngo-details.component.html"),
            styles: [__webpack_require__(/*! ./ngo-details.component.css */ "./src/app/ngo-details/ngo-details.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], NgoDetailsComponent);
    return NgoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/register-ngo/register-ngo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/register-ngo/register-ngo.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 80%;\r\n    margin:auto;\r\n    margin-bottom:20px;\r\n\r\n  }\r\n  \r\n  .icon {\r\n    padding-top:5px;\r\n    font-size:30px;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .user {\r\n    text-align: center;\r\n    box-shadow: 2px 2px 4px 4px rgb(157, 164, 167);\r\n    width: 60%;\r\n    margin: auto;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .validatingUsername {\r\n    width:50%;\r\n    height:8%;\r\n    /* color:black; */\r\n    /* border:2px solid red; */\r\n    color:red;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/register-ngo/register-ngo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/register-ngo/register-ngo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user\"> \n  <form #userForm=\"ngForm\" ng-submit=\"yes\">  \n    \n    <!-- {{ userForm.value | json }} -->\n  <div class=\"example-container\">\n      <div class=\"icon\"><mat-icon>account_box</mat-icon>\n      Register New NGO</div>\n      <!-- username -->\n        <mat-form-field>\n          <input autofocus ngModel required #username=\"ngModel\" name=\"username\" MatFormFieldControl matInput placeholder=\"Username\" [(ngModel)]=\"ngoData.username\" />\n        </mat-form-field>\n        <div *ngIf=\"username.invalid && username.touched\" class=\"validatingUsername\">Invalid Username</div>\n       <!-- password -->\n        <mat-form-field>\n          <input required #password=\"ngModel\" name=\"password\" [type]=\"hide ? 'password' : 'text'\" MatFormFieldControl matInput placeholder=\"Unique ID\"  [(ngModel)]=\"ngoData.uniqueID\"/>\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </mat-form-field>\n        <div *ngIf=\"password.invalid && password.touched\" class=\"validatingUsername\">Invalid ID</div>\n       <!-- ngo name -->\n        <mat-form-field>\n          <input ngModel required #ngoname=\"ngModel\" name=\"ngoname\" type=\"text\" MatFormFieldControl matInput placeholder=\"NGO Name\"  [(ngModel)]=\"ngoData.ngoName\"/>\n        </mat-form-field>\n        <div *ngIf=\"ngoname.invalid && ngoname.touched\" class=\"validatingUsername\">Invalid NGO name</div>\n        <!-- description -->\n        <mat-form-field>\n            <textarea maxlength=\"300\" ngModel required #description=\"ngModel\" name=\"description\" MatFormFieldControl matInput placeholder=\"NGO Description\"  [(ngModel)]=\"ngoData.description\"></textarea>\n          </mat-form-field>\n          <div *ngIf=\"description.invalid && description.touched\" class=\"validatingUsername\">Invalid Description</div>\n         <!-- ngo image url -->\n         <mat-form-field>\n            <input ngModel required #ngoImageUrl=\"ngModel\" name=\"ngoImageUrl\" type=\"url\" pattern=\"https://.*\" MatFormFieldControl matInput placeholder=\"NGO Image Url\"  [(ngModel)]=\"ngoData.ngoImageUrl\"/>\n          </mat-form-field>\n          <div *ngIf=\"ngoImageUrl.invalid && ngoImageUrl.touched\" class=\"validatingUsername\">Invalid Image Url</div>\n          <!-- email -->\n        <mat-form-field>\n            <input ngModel required #email=\"ngModel\" name=\"email\" type=\"email\" pattern=\"[a-zA-Z0-9.]{2,20}(@gmail.com)\" MatFormFieldControl matInput placeholder=\"Email\"  [(ngModel)]=\"ngoData.email\"/>\n          </mat-form-field>\n          <div *ngIf=\"email.invalid && email.touched\" class=\"validatingUsername\">Invalid Email</div>\n       <!-- location -->\n          <mat-form-field>\n              <input ngModel required #location=\"ngModel\" name=\"location\" type=\"text\" MatFormFieldControl matInput placeholder=\"location\"  [(ngModel)]=\"ngoData.location\"/>\n            </mat-form-field>\n            <div *ngIf=\"location.invalid && location.touched\" class=\"validatingUsername\">Invalid Location</div>\n        \n        <!-- Phone Number authenitiction with OTP -->\n        <mat-form-field>\n            <input [(ngModel)]=\"phoneNumber\" required #mobile=\"ngModel\" name=\"mobile\" type=\"number\" pattern=\"[6-9][0-9]{9}\" MatFormFieldControl matInput placeholder=\"Mobile No.\"  [(ngModel)]=\"ngoData.num\" />        \n        </mat-form-field>\n        <div *ngIf=\"mobile.invalid && mobile.touched\" class=\"validatingUsername\">Invalid Mobile Number</div>\n            <!-- recaptcha -->\n            <div id=\"recaptcha-container\"></div> \n            <button (click)=\"sendLoginCode()\">Send OTP</button>\n            <!-- progress bar -->\n            <mat-progress-bar *ngIf=\"progressbar\" mode=\"indeterminate\"></mat-progress-bar>\n            <div *ngIf=\"windowRef.confirmationResult\">\n            <label for=\"code\">Enter OTP </label>\n            <input type=\"text\" name=\"code\" [(ngModel)]=\"vc\">\n            <button (click)=\"verifyLoginCode()\">verify</button>\n            <div *ngIf=\"error\" class=\"validatingUsername\">Invalid OTP</div>\n            </div>  \n\n          <div *ngIf=\"open\"><button [disabled]=\"!userForm.form.valid\" type=\"submit\" mat-stroked-button color=\"primary\" (click)=\"onSubmit()\">Signup</button></div>\n          <button mat-stroked-button color=\"primary\" type=\"reset\">Enter New Data</button> \n        </div>\n    </form>\n  </div>\n\n  "

/***/ }),

/***/ "./src/app/register-ngo/register-ngo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/register-ngo/register-ngo.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterNGOComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterNGOComponent", function() { return RegisterNGOComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window.service */ "./src/app/window.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterNGOComponent = /** @class */ (function () {
    function RegisterNGOComponent(windserv, serv, snackBar) {
        this.windserv = windserv;
        this.serv = serv;
        this.snackBar = snackBar;
        this.ngoData = {
            username: '',
            uniqueID: '',
            ngoName: '',
            description: '',
            ngoImageUrl: '',
            email: '',
            location: '',
            num: ''
        };
        this.open = false;
        this.progressbar = false;
        this.error = false;
        this.hide = true;
    }
    RegisterNGOComponent.prototype.ngOnInit = function () {
        this.windowRef = this.windserv.windowRef;
        this.windowRef.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].RecaptchaVerifier('recaptcha-container');
        this.windowRef.recaptchaVerifier.render();
    };
    RegisterNGOComponent.prototype.onSubmit = function () {
        // for register button
        this.open = false;
        this.serv.addNGOData(this.ngoData);
        this.snackBar.open('NGO Successfully Registered', 'OK', {
            duration: 5000
        });
        this.windowRef.confirmationResult = false;
    };
    RegisterNGOComponent.prototype.sendLoginCode = function () {
        var _this = this;
        this.progressbar = true;
        this.open = false;
        var appverifier = this.windowRef.recaptchaVerifier;
        this.num = '+91' + this.phoneNumber;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithPhoneNumber(this.num, appverifier)
            .then(function (result) { _this.windowRef.confirmationResult = result; _this.progressbar = false; });
    };
    RegisterNGOComponent.prototype.verifyLoginCode = function () {
        var _this = this;
        this.progressbar = true;
        this.windowRef.confirmationResult
            .confirm(this.vc).
            then(function (result) {
            _this.open = true;
            _this.progressbar = false;
            _this.windowRef.confirmationResult = false;
            _this.error = false;
        })
            .catch(function (error) { _this.error = error; });
    };
    RegisterNGOComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-ngo',
            template: __webpack_require__(/*! ./register-ngo.component.html */ "./src/app/register-ngo/register-ngo.component.html"),
            styles: [__webpack_require__(/*! ./register-ngo.component.css */ "./src/app/register-ngo/register-ngo.component.css")]
        }),
        __metadata("design:paramtypes", [_window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], RegisterNGOComponent);
    return RegisterNGOComponent;
}());



/***/ }),

/***/ "./src/app/register-user/register-user.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-user/register-user.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 80%;\r\n    margin:auto;\r\n    margin-bottom:20px;\r\n\r\n  }\r\n  \r\n  .icon {\r\n    padding-top:5px;\r\n    font-size:30px;\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .user {\r\n    text-align: center;\r\n    box-shadow: 2px 2px 4px 4px rgb(157, 164, 167);\r\n    width: 80%;\r\n    margin: auto;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .validatingUsername {\r\n    width:50%;\r\n    height:8%;\r\n    color:red;\r\n    /* border:2px solid red; */\r\n  }\r\n  \r\n"

/***/ }),

/***/ "./src/app/register-user/register-user.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-user/register-user.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user\"> \n  <form #userForm=\"ngForm\" ng-submit=\"yes\">  \n    \n    <!-- {{ userForm.value | json }} -->\n  <div class=\"example-container\">\n      <div class=\"icon\"><mat-icon>lock</mat-icon>\n      Register New User</div>\n      \n        <mat-form-field>\n          <input autofocus [(ngModel)]=\"userData.username\" required #username=\"ngModel\" name=\"username\" MatFormFieldControl matInput placeholder=\"Username\">\n        </mat-form-field>\n        <div *ngIf=\"username.invalid && username.touched\" class=\"validatingUsername\">Invalid Username</div>\n      \n        <mat-form-field>\n          <input [(ngModel)]=\"userData.password\" required #password=\"ngModel\" name=\"password\" [type]=\"hide ? 'password' : 'text'\" MatFormFieldControl matInput placeholder=\"Password\" />\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </mat-form-field>\n        <div *ngIf=\"password.invalid && password.touched\" class=\"validatingUsername\">Invalid Password</div>\n       \n        <!-- Phone Number authenitiction with OTP -->\n        <mat-form-field>\n            <input [(ngModel)]=\"phoneNumber\" required #mobile=\"ngModel\" name=\"mobile\" type=\"number\" pattern=\"[6-9^e][0-9^e]{9}\" MatFormFieldControl matInput placeholder=\"Mobile No.\" />        \n        </mat-form-field>\n        <div *ngIf=\"mobile.invalid && mobile.touched\" class=\"validatingUsername\">Invalid Mobile Number</div>\n            <!-- recaptcha -->\n            <div id=\"recaptcha-container\"></div> \n            <button (click)=\"sendLoginCode()\">Send OTP</button>\n            <!-- progress bar -->\n            <mat-progress-bar *ngIf=\"progressbar\" mode=\"indeterminate\"></mat-progress-bar>\n            <div *ngIf=\"windowRef.confirmationResult\">\n            <label for=\"code\">Enter OTP </label>\n            <input type=\"text\" name=\"code\" [(ngModel)]=\"vc\">\n            <button (click)=\"verifyLoginCode()\">verify</button>\n            <div *ngIf=\"error\" class=\"validatingUsername\">Invalid OTP</div>\n            </div>  \n        <div *ngIf=\"open\"><button [disabled]=\"!userForm.form.valid\" mat-stroked-button color=\"primary\" (click)=\"onSubmit()\">Register</button></div>\n        <button mat-stroked-button color=\"primary\" type=\"reset\">Enter New Data</button>\n      </div>\n    </form>\n \n  </div>"

/***/ }),

/***/ "./src/app/register-user/register-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-user/register-user.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window.service */ "./src/app/window.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(serv, windserv, snackBar) {
        this.serv = serv;
        this.windserv = windserv;
        this.snackBar = snackBar;
        this.userData = {
            username: '',
            password: '',
            num: ''
        };
        this.open = false;
        this.progressbar = false;
        this.error = false;
        this.hide = true;
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
        this.windowRef = this.windserv.windowRef;
        this.windowRef.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].RecaptchaVerifier('recaptcha-container');
        this.windowRef.recaptchaVerifier.render();
    };
    RegisterUserComponent.prototype.onSubmit = function () {
        // for register button
        this.open = false;
        this.serv.addUserData(this.userData);
        this.snackBar.open('User Successfully Registered', 'OK', {
            duration: 5000
        });
        this.windowRef.confirmationResult = false;
    };
    RegisterUserComponent.prototype.sendLoginCode = function () {
        var _this = this;
        this.progressbar = true;
        var appverifier = this.windowRef.recaptchaVerifier;
        this.userData.num = '+91' + this.phoneNumber;
        firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithPhoneNumber(this.userData.num, appverifier)
            .then(function (result) {
            _this.windowRef.confirmationResult = result;
            _this.progressbar = false;
        });
    };
    RegisterUserComponent.prototype.verifyLoginCode = function () {
        var _this = this;
        this.progressbar = true;
        this.windowRef.confirmationResult
            .confirm(this.vc).
            then(function (result) {
            _this.open = true;
            _this.progressbar = false;
            _this.windowRef.confirmationResult = false;
        }).catch(function (error) { _this.error = error; });
    };
    RegisterUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-user',
            template: __webpack_require__(/*! ./register-user.component.html */ "./src/app/register-user/register-user.component.html"),
            styles: [__webpack_require__(/*! ./register-user.component.css */ "./src/app/register-user/register-user.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _window_service__WEBPACK_IMPORTED_MODULE_3__["WindowService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\r\n    background-color: wheat;\r\n}\r\n/* .slideMain {\r\n    width:100%;\r\n    height:300px;\r\n} */\r\n.slider { \r\n   width:80%;\r\n   height:410px;\r\n   margin:auto;\r\n   -webkit-animation: slide linear 20s infinite;\r\n           animation: slide linear 20s infinite;\r\n}\r\n@-webkit-keyframes slide{\r\n    0%{\r\n        background:url('ngo3.jpg'); \r\n    }\r\n    25%{\r\n        background:url('ngo4.jpg'); \r\n    }\r\n    50%{\r\n        background:url('ngo5.png'); \r\n    }\r\n    75%{\r\n        background:url('ngo6.jpg'); \r\n    }\r\n    100%{\r\n        background:url('ngo3.jpg'); \r\n    }    \r\n}\r\n@keyframes slide{\r\n    0%{\r\n        background:url('ngo3.jpg'); \r\n    }\r\n    25%{\r\n        background:url('ngo4.jpg'); \r\n    }\r\n    50%{\r\n        background:url('ngo5.png'); \r\n    }\r\n    75%{\r\n        background:url('ngo6.jpg'); \r\n    }\r\n    100%{\r\n        background:url('ngo3.jpg'); \r\n    }    \r\n}\r\n.box1 div{\r\n box-shadow:2px 2px 4px 3px rgba(187, 183, 183, 0.972);\r\n margin:20px;\r\n text-align: center;\r\n border-top-left-radius:30px;\r\n color:rgb(0, 0, 0);  \r\n font-size:20px;    \r\n}\r\n.box1 h3{\r\n    transition:color linear 2s;\r\n}\r\n.box1 div:hover h3{\r\n   color:blue;\r\n}\r\n.box1 {\r\n   width:80%;\r\n   margin:20px auto;\r\n}\r\n.contact-form {\r\n    text-align: center;\r\n    box-shadow: 2px 2px 4px 4px rgb(157, 164, 167);\r\n    width: 80%; \r\n    margin: auto; \r\n    margin-bottom: 20px;\r\n    margin-top: 40px;\r\n    background-color:white;\r\n  }\r\n.icon { \r\n    padding-top:5px;\r\n    font-size:30px;\r\n    font-weight: 500;\r\n    color:blue;\r\n  }\r\n.example-container { \r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.example-container > * {\r\n    width: 80%;\r\n    margin:auto;\r\n    margin-bottom:20px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"main\">\n<!--<img [src]=\"image\" width=\"100%\" height=\"300px\" alt=\"\"> -->\n<div class=\"slideMain\">\n<div class=\"slider\"></div>\n</div>\n\n<!-- ngo -->\n<div class=\"box1\">\n<div  style=\"background-color:rgb(206, 217, 221);\">\n  <h3 style=\"background-color:skyblue;border-top-left-radius:30px;\">NGO</h3>\n    Non-governmental organizations, nongovernmental organizations, or nongovernment organizations, commonly referred to as NGOs , are usually non-profit and sometimes international organizations independent of governments and international governmental organizations (though often funded by governments) that are active in humanitarian, educational, health care, public policy, social, human rights, environmental, and other areas to affect changes according to their objectives. They are thus a subgroup of all organizations founded by citizens, which include clubs and other associations that provide services, benefits, and premises only to members\n</div>\n</div>\n<br />\n<div class=\"box1\">\n<div style=\"background-color:rgb(206, 217, 221);\">\n  <h3 style=\"background-color:skyblue;border-top-left-radius:30px;\">NGO Network</h3>\n  NGOs work for a range of issues in India and in different states and localities. NGO network help many different NGOs working on the same issue in different states of India to come together and build a common platform to raise their issues. One of the very important strength of NGO network is number. They have a huge number of people to endorse their demands and therefore they are positioned in a better place to lobby, work for advocacy and bring important changes. The NGO network also helps them to access, share and contribute resources, issues, information and to associate with other like-minded NGOs which are working on similar issues\n</div>\n</div>\n\n\n<!-- Contact us form -->\n<div class=\"contact-form\">\n    <div class=\"icon\"><mat-icon>question_answer</mat-icon>\n      Contact - Us</div>\n    <form #userForm=\"ngForm\" ng-submit=\"yes\">\n        <div class=\"example-container\">\n      <!-- username -->\n        <mat-form-field>\n            <input #user=\"ngModel\" MatFormFieldControl matInput placeholder=\"Username\" name=\"username\" required [(ngModel)]=\"contact.username\">\n        </mat-form-field>\n        <mat-error *ngIf=\"user.invalid && user.touched\">Invalid Username</mat-error>\n      <!-- email -->\n          <mat-form-field>\n              <input #email=\"ngModel\" MatFormFieldControl matInput placeholder=\"Email\" pattern=\"[a-zA-Z0-9.]{2,20}(@gmail.com)\" name=\"email\" required [(ngModel)]=\"contact.email\">\n            </mat-form-field>\n          <mat-error *ngIf=\"email.invalid && email.touched\">Invalid Email</mat-error>\n     <!-- description -->\n          <mat-form-field>\n             <textarea maxlength=\"500\" ngModel required #description=\"ngModel\" name=\"description\" MatFormFieldControl matInput placeholder=\"Message\"  [(ngModel)]=\"contact.description\"></textarea>\n           </mat-form-field>\n          <mat-error *ngIf=\"description.invalid && description.touched\">Enter message</mat-error>\n          <button [disabled]=\"!userForm.form.valid\" type=\"submit\" mat-stroked-button color=\"primary\" (click)=\"contactForm()\">Signup</button>\n        </div>\n        </form>\n</div>\n<!-- contact us form end -->\n<br>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window.service */ "./src/app/window.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = /** @class */ (function () {
    function ViewComponent(serv, windserv, snackBar) {
        this.serv = serv;
        this.windserv = windserv;
        this.snackBar = snackBar;
        this.contact = {
            username: '',
            email: '',
            description: ''
        };
    }
    ViewComponent.prototype.ngOnInit = function () { };
    ViewComponent.prototype.contactForm = function () {
        this.serv.contactUs(this.contact);
        this.snackBar.open('Your response is successfully submitted', 'OK', {
            duration: 5000
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/window.service.ts":
/*!***********************************!*\
  !*** ./src/app/window.service.ts ***!
  \***********************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "windowRef", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WindowService);
    return WindowService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBNohwm989Tvkv9EWzDE1hMw6Gdzb33MIg',
        authDomain: 'ngpro-cf69f.firebaseapp.com',
        databaseURL: 'https://ngpro-cf69f.firebaseio.com',
        projectId: 'ngpro-cf69f',
        messagingSenderId: '142775552002'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\newvolumeG\STUDY\Study video\angular6 app\express js\ngoPro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map