(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-home-home-module"],{

/***/ "./src/app/components/home/components/home.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/home/components/home.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1 class=\"display-5\">Welcome to Daisho</h1>\n    <h2>{{currentUser?.userName}}</h2>\n    <a class=\"btn btn-danger\" role=\"button\" (click)=\"logout()\">Logout</a>\n</div>"

/***/ }),

/***/ "./src/app/components/home/components/home.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/home/components/home.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/components/home.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/components/home.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
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
    function HomeComponent(_authenticationService, _router) {
        var _this = this;
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.currentUserSubscription = this._authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.currentUserSubscription.unsubscribe();
    };
    HomeComponent.prototype.logout = function () {
        this._authenticationService.logout();
        this._router.navigate(['/login']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/components/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/components/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home.component */ "./src/app/components/home/components/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routing */ "./src/app/components/home/home.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_home_routing__WEBPACK_IMPORTED_MODULE_4__["routes"]),
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.routing.ts":
/*!*************************************************!*\
  !*** ./src/app/components/home/home.routing.ts ***!
  \*************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home.component */ "./src/app/components/home/components/home.component.ts");

var routes = [
    { path: '', component: _components_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=components-home-home-module.js.map