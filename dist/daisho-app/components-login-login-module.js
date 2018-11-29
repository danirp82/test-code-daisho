(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-login-login-module"],{

/***/ "./src/app/components/login/components/login.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/login/components/login.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body-wrapper full-page-wrapper auth-page\">\n  <div class=\"content-wrapper d-flex align-items-center auth auth-bg-1 theme-one\">\n    <div class=\"row w-100\">\n      <div class=\"col-lg-4 mx-auto\">\n        <h2 class=\"text-center mb-4\">Login</h2>\n        <div class=\"auto-form-wrapper\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n            <div class=\"form-group\">\n              <label class=\"label\">User</label>\n              <div class=\"input-group\">\n\n                <input type=\"text\" \n                       formControlName=\"userName\"\n                       placeholder=\"UserName or email\"\n                       class=\"form-control\">\n                \n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"fa fa-check-circle\"></i>\n                  </span>\n                </div>\n              </div>\n\n              <p class=\"text-danger\" *ngIf=\"!loginForm.get('userName').valid && loginForm.get('userName').touched\"> {{ inputRequired }} </p>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"label\">Password</label>\n              <div class=\"input-group\">\n\n                <input type=\"password\" \n                       formControlName=\"password\"\n                       class=\"form-control\">\n                \n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"fa fa-check-circle\"></i>\n                  </span>\n                </div>\n              </div>\n\n              <p class=\"text-danger\" *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\"> {{ inputRequired }} </p>\n            </div>\n\n            <div class=\"form-group\">\n              <button class=\"btn btn-primary submit-btn btn-block\" [disabled]=\"!loginForm.valid\">Login</button>\n            </div>\n\n            <p class=\"text-danger\" *ngIf=\"error\"> {{ message }} </p>\n            \n            \n            <div class=\"text-block text-center my-3\">\n              <span class=\"text-small font-weight-semibold\">Not registered? </span>\n              <br>\n              <a routerLink=\"/register\" class=\"text-black text-small\">Create account</a>\n            </div>\n          </form>\n        </div>\n        \n        \n      </div>\n    </div>\n  </div>\n  <!-- content-wrapper ends -->\n</div>"

/***/ }),

/***/ "./src/app/components/login/components/login.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/login/components/login.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vY29tcG9uZW50cy9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/components/login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/login/components/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authenticationService, _formBuilder, _router) {
        this._authenticationService = _authenticationService;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this.inputRequired = 'Required field';
        this.error = false;
        this.message = 'Username or password is incorrect';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        this.loginForm = this._formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var _a = this.loginForm.value, userName = _a.userName, password = _a.password;
        this._authenticationService.login(userName, password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this._router.navigate(['home']);
        }, function (error) {
            console.log('Error =>', error);
            _this.error = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/components/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/components/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login.component */ "./src/app/components/login/components/login.component.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.routing */ "./src/app/components/login/login.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_login_routing__WEBPACK_IMPORTED_MODULE_5__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.routing.ts":
/*!***************************************************!*\
  !*** ./src/app/components/login/login.routing.ts ***!
  \***************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login.component */ "./src/app/components/login/components/login.component.ts");

var routes = [
    { path: '', component: _components_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=components-login-login-module.js.map