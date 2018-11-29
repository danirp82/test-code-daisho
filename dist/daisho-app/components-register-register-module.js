(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-register-register-module"],{

/***/ "./src/app/components/register/components/register.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/register/components/register.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-body-wrapper full-page-wrapper auth-page\">\n  <div class=\"content-wrapper d-flex align-items-center auth register-bg-1 theme-one\">\n    <div class=\"row w-100\">\n      <div class=\"col-lg-4 mx-auto\">\n        <h2 class=\"text-center mb-4\">Register</h2>\n        <div class=\"auto-form-wrapper\">\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"submit()\">\n            \n            <div class=\"form-group\">\n              <div class=\"input-group\">\n\n                <input type=\"text\" \n                        formControlName=\"userName\"\n                        placeholder=\"UserName\"\n                        class=\"form-control\">\n                \n                \n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"fa fa-check-circle\"></i>\n                  </span>\n                </div>\n              </div>\n\n              <p class=\"text-danger\" *ngIf=\"!registerForm.get('userName').valid && registerForm.get('userName').touched\"> {{ inputRequired }} </p>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n\n                  <input type=\"text\" f\n                          formControlName=\"email\"\n                          placeholder=\"Email\"\n                          class=\"form-control\">\n                  \n                  \n                  \n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      <i class=\"fa fa-check-circle\"></i>\n                    </span>\n                  </div>\n                  \n                </div>\n\n                <p class=\"text-danger\" *ngIf=\"!registerForm.get('email').valid && registerForm.get('email').touched\"> {{ inputRequired }} </p>\n              </div>\n\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n\n                <input type=\"password\"\n                        formControlName=\"password\"\n                        placeholder=\"Password\"\n                        class=\"form-control\">\n                \n\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"fa fa-check-circle\"></i>\n                  </span>\n                </div>\n              </div>\n              <p class=\"text-danger\" *ngIf=\"!registerForm.get('password').valid && registerForm.get('password').touched\"> {{ inputRequired }} </p>\n            </div>\n\n            <div class=\"form-group\">\n              \n              <button class=\"btn btn-primary submit-btn btn-block\" type=\"submit\" [disabled]=\"!registerForm.valid\">Register</button>\n                \n            </div>\n            <div class=\"text-block text-center my-3\">\n              <span class=\"text-small font-weight-semibold\">already have an account?</span>\n              <br>\n              <a routerLink=\"/login\" class=\"text-black text-small\">Login</a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- content-wrapper ends -->\n</div>\n<!-- page-body-wrapper ends -->"

/***/ }),

/***/ "./src/app/components/register/components/register.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/register/components/register.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvY29tcG9uZW50cy9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/components/register.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/register/components/register.component.ts ***!
  \**********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_formBuilder, _userService, _router) {
        this._formBuilder = _formBuilder;
        this._userService = _userService;
        this._router = _router;
        this.inputRequired = 'Required field';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RegisterComponent.prototype.buildForm = function () {
        this.registerForm = this._formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32), this.userNameFormat]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    RegisterComponent.prototype.userNameFormat = function (control) {
        var EMAIL_REGEXP = /^[\w&.-]+$/;
        if (!EMAIL_REGEXP.test(control.value)) {
            return { 'positive': true };
        }
        return null;
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        if (this.registerForm.invalid) {
            return;
        }
        this._userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this._router.navigate(['/login']);
        }, function (error) {
            console.log('Error =>', error);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/components/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/components/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_components_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../register/components/register.component */ "./src/app/components/register/components/register.component.ts");
/* harmony import */ var _register_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.routing */ "./src/app/components/register/register.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _register_components_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_register_routing__WEBPACK_IMPORTED_MODULE_5__["routes"]),
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/components/register/register.routing.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/register/register.routing.ts ***!
  \*********************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _register_components_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../register/components/register.component */ "./src/app/components/register/components/register.component.ts");

var routes = [
    { path: '', component: _register_components_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"] }
];


/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post("/users/register", user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=components-register-register-module.js.map