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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    min-height: 100vh; /* will cover the 100% of viewport */\r\n    overflow: hidden;\r\n    display: block;\r\n    position: relative;\r\n    padding-bottom: 50px; /* height of your footer */\r\n}\r\n\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-family: \"Papyrus\";\r\n\r\n}\r\n\r\n.fa-code { \r\n    color:#402D19; \r\n}\r\n\r\n/* .footer{ \r\n    font-family: \"Papyrus\";\r\n} */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-to-do-list></app-to-do-list>\r\n  <footer>\r\n    <img src=\"../assets/footprint.png\" style=\"width: 20px\"> \r\n    my very first step \r\n    <img src=\"../assets/footprint.png\" style=\"width: 20px\">\r\n  </footer>\r\n</div>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./to-do-list/to-do-list.component */ "./src/app/to-do-list/to-do-list.component.ts");
/* harmony import */ var _to_do_list_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./to-do-list/reducers */ "./src/app/to-do-list/reducers.ts");
/* harmony import */ var _to_do_list_list_thing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./to-do-list/list-thing.service */ "./src/app/to-do-list/list-thing.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_6__["ToDoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({
                    things: _to_do_list_reducers__WEBPACK_IMPORTED_MODULE_7__["thingsReducer"],
                })
            ],
            providers: [_to_do_list_list_thing_service__WEBPACK_IMPORTED_MODULE_8__["ListThingService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/to-do-list/list-thing.service.ts":
/*!**************************************************!*\
  !*** ./src/app/to-do-list/list-thing.service.ts ***!
  \**************************************************/
/*! exports provided: ListThingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListThingService", function() { return ListThingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'https://fox-memo.herokuapp.com';
// const URL = 'http://localhost:3000'
var ListThingService = /** @class */ (function () {
    function ListThingService(store, http) {
        this.store = store;
        this.http = http;
    }
    ListThingService.prototype.getThing = function () {
        var _this = this;
        return this.http.get(URL)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) {
            _this.store.dispatch({ type: 'GET_THINGS', things: resJson.things });
        });
    };
    ListThingService.prototype.addThing = function (name) {
        var _this = this;
        this.http.post(URL, { name: name })
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) {
            _this.store.dispatch({ type: 'ADD_THING', thing: resJson.thing });
        });
    };
    ListThingService.prototype.removeThing = function (_id) {
        var _this = this;
        this.http.delete(URL + "/" + _id)
            .toPromise()
            .then(function (resJson) {
            _this.store.dispatch({ type: 'REMOVE_THING', _id: _id });
        });
    };
    ListThingService.prototype.checkValue = function (_id, checkOption) {
        var _this = this;
        this.http.put(URL + "/" + _id, { checkOption: checkOption })
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) {
            _this.store.dispatch({ type: 'CHECK_VALUE', _id: _id });
        });
    };
    ListThingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ListThingService);
    return ListThingService;
}());



/***/ }),

/***/ "./src/app/to-do-list/reducers.ts":
/*!****************************************!*\
  !*** ./src/app/to-do-list/reducers.ts ***!
  \****************************************/
/*! exports provided: thingsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thingsReducer", function() { return thingsReducer; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function thingsReducer(state, action) {
    if (state === void 0) { state = []; }
    if (action.type === 'GET_THINGS')
        return action.things;
    if (action.type === 'ADD_THING') {
        return state.concat(action.thing);
    }
    if (action.type === 'REMOVE_THING') {
        return state.filter(function (thing) { return thing._id !== action._id; });
    }
    if (action.type === 'CHECK_VALUE') {
        return state.map(function (thing) {
            if (thing._id !== action._id)
                return thing;
            return __assign({}, thing, { checkOption: !thing.checkOption });
        });
    }
    return state;
}


/***/ }),

/***/ "./src/app/to-do-list/to-do-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/to-do-list/to-do-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 300px;\r\n    height: 150px\r\n}\r\n\r\nh3 { \r\n    color: #402D19;\r\n    font-family: \"Times New Roman\";\r\n    font-weight: bold; \r\n    text-align: center; \r\n}\r\n\r\np { \r\n    color: #402D19;\r\n    text-align: center;\r\n    font-family: \"Papyrus\";\r\n    font-size: 20px;\r\n}\r\n\r\n/* CHECKBOX */\r\n\r\n/* Customize the label (the container) */\r\n\r\n.container {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-right: 30px;\r\n    margin-bottom: 12px;\r\n    font-size: 20px;\r\n    font-family: \"Papyrus\";\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    \r\n  }\r\n\r\n/* Hide the browser's default checkbox */\r\n\r\n.container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    \r\n  }\r\n\r\n/* Create a custom checkbox */\r\n\r\n.checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: transparent;\r\n    border: 1px solid lightgray;\r\n    \r\n  }\r\n\r\n/* On mouse-over, add a grey background color */\r\n\r\n.container:hover input ~ .checkmark {\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/* When the checkbox is checked, add a blue background */\r\n\r\n.container input:checked ~ .checkmark {\r\n    background-color: transparent;\r\n    border: transparent; \r\n    \r\n  }\r\n\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n    \r\n  }\r\n\r\n/* Show the checkmark when checked */\r\n\r\n.container input:checked ~ .checkmark:after {\r\n    display: block;\r\n  }\r\n\r\n/* Style the checkmark/indicator */\r\n\r\n.container .checkmark:after {\r\n    left: 9px;\r\n    top: 0px;\r\n    width: 7px;\r\n    height: 18px;\r\n    border: solid #402D19;\r\n    border-width: 0 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n  }\r\n\r\n/* DELETE BUTTON */\r\n\r\n.trashButton{ \r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    color:#402D19; \r\n    float: right;\r\n}\r\n\r\n.trashButton:hover {\r\n    background-color: #d8d5d1; \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/to-do-list/to-do-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/to-do-list/to-do-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"http://pluspng.com/img-png/animal-logo-png-animal-logos-by-ivan-bobrov-600.png\" alt=\"octopus\">\r\n<h3>QUICK MEMO & TODO LIST</h3>\r\n<p>What are you planning?</p>\r\n<div class=\"input-group mb-3\">\r\n  <input\r\n    class=\"form-control\"\r\n    [(ngModel)]=\"txtThing\"\r\n    name=\"txtThing\"\r\n    (keyup.enter)=\"addThing();\"\r\n  />\r\n  <div class=\"input-group-append\">\r\n    <button \r\n      class=\"btn btn-outline-secondary\" \r\n      (click)=\"addThing();\"\r\n    >\r\n      + \r\n    </button>\r\n  </div>\r\n</div>\r\n<form> \r\n  <div *ngFor=\"let thing of things.reverse(); \">\r\n    <div class=\"row\" *ngIf=\"!thing.checkOption\">\r\n      <div class=\"col-9\">\r\n        <label class=\"container\">\r\n          {{thing.name}}\r\n          <input \r\n            type=\"checkbox\" \r\n            class=\"checkbox\" \r\n            [value]=\"!thing.checkOption\"\r\n            (change)=\"listThingService.checkValue(thing._id, !thing.checkOption)\"\r\n          >\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <button \r\n          class=\"trashButton\"\r\n          (click)=\"listThingService.removeThing(thing._id)\"\r\n        >\r\n          <i class=\"fas fa-trash\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngFor=\"let thing of things\">\r\n    <div class=\"row\" *ngIf=\"thing.checkOption\">\r\n      <div class=\"col-9\">\r\n        <label \r\n          class=\"container\" \r\n          style=\"text-decoration: line-through; color: grey\"\r\n        >\r\n        {{thing.name}}\r\n          <input \r\n            type=\"checkbox\" \r\n            [checked]=\"thing.checkOption\"\r\n            [value]=\"thing.checkOption\"\r\n            (change)=\"listThingService.checkValue(thing._id, !thing.checkOption)\"\r\n          >\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <button \r\n          class=\"trashButton\"\r\n          (click)=\"listThingService.removeThing(thing._id)\"\r\n        >\r\n          <i class=\"fas fa-trash\"></i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/to-do-list/to-do-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/to-do-list/to-do-list.component.ts ***!
  \****************************************************/
/*! exports provided: ToDoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoListComponent", function() { return ToDoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _list_thing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-thing.service */ "./src/app/to-do-list/list-thing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToDoListComponent = /** @class */ (function () {
    // checkOption: boolean;
    function ToDoListComponent(store, listThingService) {
        var _this = this;
        this.store = store;
        this.listThingService = listThingService;
        this.txtThing = "";
        this.store.select('things').subscribe(function (thing) { return _this.things = thing; });
        this.listThingService.getThing();
    }
    ToDoListComponent.prototype.addThing = function () {
        if (!this.txtThing)
            return false;
        this.listThingService.addThing(this.txtThing);
        this.txtThing = "";
    };
    ToDoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-to-do-list',
            template: __webpack_require__(/*! ./to-do-list.component.html */ "./src/app/to-do-list/to-do-list.component.html"),
            styles: [__webpack_require__(/*! ./to-do-list.component.css */ "./src/app/to-do-list/to-do-list.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _list_thing_service__WEBPACK_IMPORTED_MODULE_2__["ListThingService"]])
    ], ToDoListComponent);
    return ToDoListComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\Anh\Desktop\foxMemo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map