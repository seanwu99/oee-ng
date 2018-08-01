(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/default/index/index.module": [
		"./src/app/theme/pages/default/index/index.module.ts",
		"pages-default-index-index-module"
	],
	"./pages/default/not-found/not-found.module": [
		"./src/app/theme/pages/default/not-found/not-found.module.ts",
		"pages-default-not-found-not-found-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_directives/href-prevent-default.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/_directives/href-prevent-default.directive.ts ***!
  \***************************************************************/
/*! exports provided: HrefPreventDefaultDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrefPreventDefaultDirective", function() { return HrefPreventDefaultDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HrefPreventDefaultDirective = /** @class */ (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HrefPreventDefaultDirective.prototype, "href", void 0);
    HrefPreventDefaultDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[href]",
            host: { '(click)': 'preventDefault($event)' },
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HrefPreventDefaultDirective);
    return HrefPreventDefaultDirective;
}());



/***/ }),

/***/ "./src/app/_directives/unwrap-tag.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/_directives/unwrap-tag.directive.ts ***!
  \*****************************************************/
/*! exports provided: UnwrapTagDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnwrapTagDirective", function() { return UnwrapTagDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnwrapTagDirective = /** @class */ (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        _helpers__WEBPACK_IMPORTED_MODULE_1__["Helpers"].unwrapTag(nativeElement);
    };
    UnwrapTagDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[appunwraptag]",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UnwrapTagDirective);
    return UnwrapTagDirective;
}());



/***/ }),

/***/ "./src/app/_services/script-loader.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/script-loader.service.ts ***!
  \****************************************************/
/*! exports provided: ScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        scripts.forEach(function (src) {
            if (!_this._scripts[src]) {
                _this._scripts[src] = { src: src, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (src) { return promises.push(_this.loadScript(tag, src)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    ScriptLoaderService.prototype.loadScripts = function (tag, scripts, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        scripts.forEach(function (script) {
            if (!_this._scripts[script]) {
                _this._scripts[script] = { src: script, loaded: false };
            }
        });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(tag, script, loadOnce)); });
        return Promise.all(promises);
    };
    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param loadOnce
     * @returns {Promise<any>}
     */
    ScriptLoaderService.prototype.loadScript = function (tag, src, loadOnce) {
        var _this = this;
        loadOnce = loadOnce || false;
        if (!this._scripts[src]) {
            this._scripts[src] = { src: src, loaded: false };
        }
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this._scripts[src].loaded && loadOnce) {
                resolve({ src: src, loaded: true });
            }
            else {
                // load script tag
                var scriptTag = jquery__WEBPACK_IMPORTED_MODULE_1__('<script/>').
                    attr('type', 'text/javascript').
                    attr('src', _this._scripts[src].src);
                jquery__WEBPACK_IMPORTED_MODULE_1__(tag).append(scriptTag);
                _this._scripts[src] = { src: src, loaded: true };
                resolve({ src: src, loaded: true });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { LogoutComponent } from "./auth/logout/logout.component";
var routes = [
    // { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    // { path: 'logout', component: LogoutComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\r\n<div class=\"m-page-loader m-page-loader--base m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\">\r\n    <div class=\"m-blockui\"><span>Please wait...</span> <span><div class=\"m-loader m-loader--brand\"></div></span></div>\r\n</div> <!-- end::Page loader -->                        <!-- begin:: Page -->\r\n<router-outlet></router-outlet> <!-- end:: Page -->\r\n<app-quick-sidebar></app-quick-sidebar>\r\n<!--<app-scroll-top></app-scroll-top>-->\r\n<!--<app-tooltips></app-tooltips>        &lt;!&ndash;begin::Base Scripts &ndash;&gt;                                                        &lt;!&ndash;end::Base Scripts &ndash;&gt;                       &lt;!&ndash;begin::Page Vendors &ndash;&gt;                                   &lt;!&ndash;end::Page Vendors &ndash;&gt;                                                              &lt;!&ndash;begin::Page Snippets &ndash;&gt;                                   &lt;!&ndash;end::Page Snippets &ndash;&gt;-->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers.ts");
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
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'body',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _theme_theme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/layouts/layout.module */ "./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
/* harmony import */ var _theme_theme_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/theme-routing.module */ "./src/app/theme/theme-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { AuthModule } from "./auth/auth.module";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _theme_theme_component__WEBPACK_IMPORTED_MODULE_2__["ThemeComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _theme_layouts_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _theme_theme_routing_module__WEBPACK_IMPORTED_MODULE_8__["ThemeRoutingModule"],
            ],
            providers: [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_7__["ScriptLoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/helpers.ts":
/*!****************************!*\
  !*** ./src/app/helpers.ts ***!
  \****************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            jquery__WEBPACK_IMPORTED_MODULE_0__["each"](src, function (k, s) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(tag).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        jquery__WEBPACK_IMPORTED_MODULE_0__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader__breadcrumbs');
        if (jquery__WEBPACK_IMPORTED_MODULE_0__(ul).length === 0) {
            ul = jquery__WEBPACK_IMPORTED_MODULE_0__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(ul).find('li:not(:first-child)').remove();
        jquery__WEBPACK_IMPORTED_MODULE_0__["each"](breadcrumbs, function (k, v) {
            var li = jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__item')
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(jquery__WEBPACK_IMPORTED_MODULE_0__('<span/>').addClass('m-nav__link-text').text(v.text)));
            jquery__WEBPACK_IMPORTED_MODULE_0__(ul).append(jquery__WEBPACK_IMPORTED_MODULE_0__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        jquery__WEBPACK_IMPORTED_MODULE_0__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = jquery__WEBPACK_IMPORTED_MODULE_0__('body');
        if (enable) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).addClass('m-page--loading-non-block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('body').attr('class', strClass);
    };
    return Helpers;
}());



/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.html":
/*!******************************************************************!*\
  !*** ./src/app/theme/layouts/aside-nav/aside-nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\r\n<button class=\"m-aside-left-close  m-aside-left-close--skin-dark\" id=\"m_aside_left_close_btn\" appunwraptag=\"\"><i\r\n        class=\"la la-close\"></i></button>\r\n<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-dark\">        <!-- BEGIN: Aside Menu -->\r\n    <div id=\"m_ver_menu\" class=\"m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark\"\r\n         m-menu-vertical=\"1\" m-menu-scrollable=\"1\" m-menu-dropdown-timeout=\"500\" style=\"position: relative;\">\r\n        <ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\">\r\n\r\n            <li class=\"m-menu__section\"><h4 class=\"m-menu__section-text\">Dashboard</h4>                 <i\r\n                    class=\"m-menu__section-icon flaticon-more-v3\"></i></li>\r\n            <li class=\"m-menu__item  m-menu__item--submenu m-menu__item--open\" routerLinkActive=\"m-menu__item--open\"\r\n                routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\" m-menu-submenu-toggle=\"hover\"><a\r\n                    href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\"><i\r\n                    class=\"m-menu__link-icon flaticon-layers\"></i>\r\n                <span class=\"m-menu__link-text\">Base</span>\r\n                <i\r\n                        class=\"m-menu__ver-arrow la la-angle-right\"></i></a>\r\n                <div class=\"m-menu__submenu\">\r\n                    <span class=\"m-menu__arrow\"></span>\r\n                    <ul class=\"m-menu__subnav\">\r\n                        <li class=\"m-menu__item  m-menu__item--parent\" routerLinkActive=\"m-menu__item\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <span\r\n                                    class=\"m-menu__link\">\r\n                                <span class=\"m-menu__link-text\">Base</span>\r\n                            </span>\r\n                        </li>\r\n\r\n                        <li id=\"m-menu__item0\" class=\"m-menu__item\" routerLinkActive=\"m-menu__item\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a routerLink=\"/index\" class=\"m-menu__link\" onclick='scrollToX(this)'>\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n                                    Overall Effectiveness\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li id=\"m-menu__item1\" class=\"m-menu__item\" routerLinkActive=\"m-menu__item\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a routerLink=\"/index\" class=\"m-menu__link\" onclick='scrollToX(this)'>\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n                                    Order Table\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li id=\"m-menu__item2\" class=\"m-menu__item\" routerLinkActive=\"m-menu__item\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a routerLink=\"/index\" class=\"m-menu__link\" onclick='scrollToX(this)'>\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n                                    Downtime Events\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li id=\"m-menu__item3\" class=\"m-menu__item\" routerLinkActive=\"m-menu__item\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a routerLink=\"/index\" class=\"m-menu__link\" onclick='scrollToX(this)'>\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n                                    Calendar\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n\r\n                        <li id=\"m-menu__item4\" class=\"m-menu__item\" routerLinkActive=\"m-menu__item\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a routerLink=\"/index\" class=\"m-menu__link\" onclick='scrollToX(this)'>\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n                                    Six Big Losses\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                        <li id=\"m-menu__item5\" class=\"m-menu__item\" routerLinkActive=\"m-menu__item\"\r\n                            routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                            <a routerLink=\"/index\" class=\"m-menu__link\" onclick='scrollToX(this)'>\r\n                                <i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                    <span></span>\r\n                                </i>\r\n                                <span class=\"m-menu__link-text\">\r\n                                    Most Ordered\r\n                                </span>\r\n                            </a>\r\n                        </li>\r\n                        Most Ordered\r\n                    </ul>\r\n                </div>\r\n            </li>\r\n\r\n\r\n        </ul>\r\n    </div>    <!-- END: Aside Menu --> </div>\r\n<!-- END: Left Aside -->"

/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/layouts/aside-nav/aside-nav.component.ts ***!
  \****************************************************************/
/*! exports provided: AsideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideNavComponent", function() { return AsideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideNavComponent = /** @class */ (function () {
    function AsideNavComponent() {
    }
    AsideNavComponent.prototype.ngOnInit = function () {
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
    };
    AsideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-aside-nav",
            template: __webpack_require__(/*! ./aside-nav.component.html */ "./src/app/theme/layouts/aside-nav/aside-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/layouts/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Footer -->\r\n<footer class=\"m-grid__item\t\tm-footer\" appunwraptag=\"\">\r\n    <div class=\"m-container m-container--fluid m-container--full-height m-page__container\">\r\n        <div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\r\n            <div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\r\n                <span\r\n                        class=\"m-footer__copyright\"> 2018 &copy; OEE Template by <a\r\n                        href=\"\" class=\"m-link\">Sean Wu</a></span>\r\n            </div>\r\n            <div class=\"m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first\">\r\n                <ul class=\"m-footer__nav m-nav m-nav--inline m--pull-right\">\r\n                    <li class=\"m-nav__item\">\r\n                        <a href=\"\" class=\"m-nav__link\">\r\n                            <span class=\"m-nav__link-text\">About</span>\r\n                            </a>\r\n                    </li>\r\n                    <li class=\"m-nav__item\">\r\n                        <a href=\"\" class=\"m-nav__link\">\r\n                        <span\r\n                                class=\"m-nav__link-text\">Privacy\r\n                        </span>\r\n                            </a>\r\n                    </li>\r\n                    <li class=\"m-nav__item m-nav__item\">\r\n                        <a href=\"\" class=\"m-nav__link\" data-toggle=\"m-tooltip\"\r\n                            title=\"Support Center\" data-placement=\"left\"><i\r\n                                class=\"m-nav__link-icon flaticon-info m--icon-font-size-lg3\"></i> </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer> <!-- end::Footer -->\t\t"

/***/ }),

/***/ "./src/app/theme/layouts/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/layouts/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/theme/layouts/footer/footer.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/layouts/header-nav/header-nav.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Header -->\r\n<header id=\"m_header\" class=\"m-grid__item    m-header\" m-minimize-offset=\"200\" m-minimize-mobile-offset=\"200\"\r\n        appunwraptag=\"\">\r\n    <div class=\"m-container m-container--fluid m-container--full-height\">\r\n        <div class=\"m-stack m-stack--ver m-stack--desktop\">                    <!-- BEGIN: Brand -->\r\n            <div class=\"m-stack__item m-brand  m-brand--skin-dark\">\r\n                <div class=\"m-stack m-stack--ver m-stack--general\">\r\n                    <div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\r\n                        <a href=\"https://github.com/seanwu99/oee-ng\"\r\n                           class=\"m-brand__logo-wrapper\">\r\n                            <img alt=\"\" src=\"./assets/default/media/img/logo/logo_default_dark.png\"/></a>\r\n                    </div>\r\n                    <div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\r\n                        <!-- BEGIN: Left Aside Minimize Toggle -->\r\n                        <a href=\"javascript:;\"\r\n                           id=\"m_aside_left_minimize_toggle\"\r\n                           class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\r\n                            <span></span>\r\n                        </a>                <!-- END -->\r\n                        <!-- BEGIN: Responsive Aside Left Menu Toggler -->\r\n                        <a href=\"javascript:;\"\r\n                           id=\"m_aside_left_offcanvas_toggle\"\r\n                           class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\r\n                            <span></span>\r\n                        </a>                <!-- END -->\r\n                        <!-- BEGIN: Responsive Header Menu Toggler -->\r\n                        <a id=\"m_aside_header_menu_mobile_toggle\"\r\n                           href=\"javascript:;\"\r\n                           class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\r\n                            <span></span>\r\n                        </a>                <!-- END -->\r\n                        <!-- BEGIN: Topbar Toggler -->\r\n                        <a id=\"m_aside_header_topbar_mobile_toggle\" href=\"javascript:;\"\r\n                           class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\r\n                            <i class=\"flaticon-more\"></i></a>            <!-- BEGIN: Topbar Toggler -->        </div>\r\n                </div>\r\n            </div> <!-- END: Brand -->\r\n            <div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\r\n                <!-- BEGIN: Horizontal Menu -->\r\n                <button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\"\r\n                        id=\"m_aside_header_menu_mobile_close_btn\"><i class=\"la la-close\"></i></button>\r\n                <div id=\"m_header_menu\"\r\n                     class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark\">\r\n                    <ul class=\"m-menu__nav  m-menu__nav--submenu-arrow\">\r\n                        <li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"\r\n                            routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                            m-menu-submenu-toggle=\"click\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\r\n                            <a\r\n                                    href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\"><i\r\n                                    class=\"m-menu__link-icon flaticon-add\"></i>\r\n                                <span\r\n                                        class=\"m-menu__link-text\">Actions\r\n                                </span>\r\n                                <i\r\n                                        class=\"m-menu__hor-arrow la la-angle-down\"></i><i\r\n                                        class=\"m-menu__ver-arrow la la-angle-right\"></i></a>\r\n                            <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\r\n                                <span\r\n                                        class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\r\n                                <ul class=\"m-menu__subnav\">\r\n                                    <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                        routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n                                        <a\r\n                                                routerLink=\"/index\" class=\"m-menu__link\"><i\r\n                                                class=\"m-menu__link-icon flaticon-file\"></i>\r\n                                            <span class=\"m-menu__link-text\">Create New Post</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                        routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                        aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/index\" class=\"m-menu__link\"><i\r\n                                                class=\"m-menu__link-icon flaticon-diagram\"></i>\r\n                                            <span\r\n                                                    class=\"m-menu__link-title\">\r\n                                                <span class=\"m-menu__link-wrap\">\r\n                                                    <span\r\n                                                            class=\"m-menu__link-text\">Generate Reports\r\n                                                    </span>\r\n                                                    <span\r\n                                                            class=\"m-menu__link-badge\">\r\n                                                        <span\r\n                                                                class=\"m-badge m-badge--success\">2\r\n                                                        </span>\r\n                                                    </span>\r\n                                                </span>\r\n                                            </span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item  m-menu__item--submenu\"\r\n                                        routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                                        m-menu-submenu-toggle=\"hover\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\r\n                                        <a\r\n                                                href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\"><i\r\n                                                class=\"m-menu__link-icon flaticon-business\"></i>\r\n                                            <span\r\n                                                    class=\"m-menu__link-text\">Manage Orders\r\n                                            </span>\r\n                                            <i\r\n                                                    class=\"m-menu__hor-arrow la la-angle-right\"></i><i\r\n                                                    class=\"m-menu__ver-arrow la la-angle-right\"></i></a>\r\n                                        <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\r\n                                            <span class=\"m-menu__arrow\"></span>\r\n                                            <ul class=\"m-menu__subnav\">\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Latest Orders\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Pending Orders\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Processed Orders\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Delivery Reports\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Payments\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Customers\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item  m-menu__item--submenu\"\r\n                                        routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                                        m-menu-submenu-toggle=\"hover\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\r\n                                        <a\r\n                                                href=\"#\" class=\"m-menu__link m-menu__toggle\"><i\r\n                                                class=\"m-menu__link-icon flaticon-chat-1\"></i>\r\n                                            <span\r\n                                                    class=\"m-menu__link-text\">Customer Feedbacks\r\n                                            </span>\r\n                                            <i\r\n                                                    class=\"m-menu__hor-arrow la la-angle-right\"></i><i\r\n                                                    class=\"m-menu__ver-arrow la la-angle-right\"></i></a>\r\n                                        <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\r\n                                            <span class=\"m-menu__arrow\"></span>\r\n                                            <ul class=\"m-menu__subnav\">\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Customer Feedbacks\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Supplier Feedbacks\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Reviewed Feedbacks\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Resolved Feedbacks\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Feedback Reports\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                        routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                        aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/index\" class=\"m-menu__link\"><i\r\n                                                class=\"m-menu__link-icon flaticon-users\"></i>\r\n                                            <span\r\n                                                    class=\"m-menu__link-text\">Register Member\r\n                                            </span>\r\n                                        </a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"\r\n                            routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                            m-menu-submenu-toggle=\"click\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\r\n                            <a\r\n                                    href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\"><i\r\n                                    class=\"m-menu__link-icon flaticon-line-graph\"></i>\r\n                                <span class=\"m-menu__link-text\">Reports</span>\r\n                                <i\r\n                                        class=\"m-menu__hor-arrow la la-angle-down\"></i><i\r\n                                        class=\"m-menu__ver-arrow la la-angle-right\"></i></a>\r\n                            <div class=\"m-menu__submenu  m-menu__submenu--fixed m-menu__submenu--left\"\r\n                                 style=\"width:1000px\">\r\n                                <span class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\r\n                                <div class=\"m-menu__subnav\">\r\n                                    <ul class=\"m-menu__content\">\r\n                                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                            routerLinkActiveOptions=\"{ exact: true }\">\r\n                                            <h3\r\n                                                    class=\"m-menu__heading m-menu__toggle\">\r\n                                                <span class=\"m-menu__link-text\">Finance Reports</span>\r\n                                                <i\r\n                                                        class=\"m-menu__ver-arrow la la-angle-right\"></i></h3>\r\n                                            <ul class=\"m-menu__inner\">\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-map\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Annual Reports\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-user\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">HR Reports\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-clipboard\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">IPO Reports\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-graphic-1\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Finance Margins\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-graphic-2\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Revenue Reports\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                            routerLinkActiveOptions=\"{ exact: true }\">\r\n                                            <h3\r\n                                                    class=\"m-menu__heading m-menu__toggle\">\r\n                                                <span class=\"m-menu__link-text\">Project Reports</span>\r\n                                                <i\r\n                                                        class=\"m-menu__ver-arrow la la-angle-right\"></i></h3>\r\n                                            <ul class=\"m-menu__inner\">\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--line\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Coca Cola CRM\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--line\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Delta Airlines Booking Site\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--line\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Malibu Accounting\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--line\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Vineseed Website Rewamp\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--line\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Zircon Mobile App\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--line\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Mercury CMS\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                            routerLinkActiveOptions=\"{ exact: true }\">\r\n                                            <h3\r\n                                                    class=\"m-menu__heading m-menu__toggle\">\r\n                                                <span class=\"m-menu__link-text\">HR Reports</span>\r\n                                                <i\r\n                                                        class=\"m-menu__ver-arrow la la-angle-right\"></i></h3>\r\n                                            <ul class=\"m-menu__inner\">\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Staff Directory\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Client Directory\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Salary Reports\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Staff Payslips\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Corporate Expenses\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\r\n                                                        <span></span>\r\n                                                    </i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Project Expenses\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                        <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                            routerLinkActiveOptions=\"{ exact: true }\">\r\n                                            <h3\r\n                                                    class=\"m-menu__heading m-menu__toggle\">\r\n                                                <span class=\"m-menu__link-text\">Reporting Apps</span>\r\n                                                <i\r\n                                                        class=\"m-menu__ver-arrow la la-angle-right\"></i></h3>\r\n                                            <ul class=\"m-menu__inner\">\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Report Adjusments\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Sources & Mediums\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Reporting Settings\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Conversions\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Report Flows\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\">\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Audit & Logs\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"\r\n                            routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                            m-menu-submenu-toggle=\"click\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\r\n                            <a\r\n                                    href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\"><i\r\n                                    class=\"m-menu__link-icon flaticon-paper-plane\"></i>\r\n                                <span\r\n                                        class=\"m-menu__link-title\">\r\n                                    <span class=\"m-menu__link-wrap\">\r\n                                        <span\r\n                                                class=\"m-menu__link-text\">Apps\r\n                                        </span>\r\n                                    </span>\r\n                                </span>\r\n                                <i\r\n                                        class=\"m-menu__hor-arrow la la-angle-down\"></i><i\r\n                                        class=\"m-menu__ver-arrow la la-angle-right\"></i></a>\r\n                            <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\r\n                                <span\r\n                                        class=\"m-menu__arrow m-menu__arrow--adjust\"></span>\r\n                                <ul class=\"m-menu__subnav\">\r\n                                    <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                        routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                        aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/index\" class=\"m-menu__link\"><i\r\n                                                class=\"m-menu__link-icon flaticon-business\"></i>\r\n                                            <span\r\n                                                    class=\"m-menu__link-text\">eCommerce\r\n                                            </span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item  m-menu__item--submenu\"\r\n                                        routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                                        m-menu-submenu-toggle=\"hover\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\r\n                                        <a\r\n                                                routerLink=\"/index\" class=\"m-menu__link m-menu__toggle\"><i\r\n                                                class=\"m-menu__link-icon flaticon-computer\"></i>\r\n                                            <span\r\n                                                    class=\"m-menu__link-text\">Audience\r\n                                            </span>\r\n                                            <i\r\n                                                    class=\"m-menu__hor-arrow la la-angle-right\"></i><i\r\n                                                    class=\"m-menu__ver-arrow la la-angle-right\"></i></a>\r\n                                        <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\r\n                                            <span class=\"m-menu__arrow\"></span>\r\n                                            <ul class=\"m-menu__subnav\">\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-users\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Active Users\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-interface-1\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">User Explorer\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-lifebuoy\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Users Flows\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-graphic-1\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Market Segments\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-graphic\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">User Reports\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                        routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                        aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/index\" class=\"m-menu__link\"><i\r\n                                                class=\"m-menu__link-icon flaticon-map\"></i>\r\n                                            <span class=\"m-menu__link-text\">Marketing</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                        routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                        aria-haspopup=\"true\">\r\n                                        <a routerLink=\"/index\" class=\"m-menu__link\"><i\r\n                                                class=\"m-menu__link-icon flaticon-graphic-2\"></i>\r\n                                            <span\r\n                                                    class=\"m-menu__link-title\">\r\n                                                <span class=\"m-menu__link-wrap\">\r\n                                                    <span\r\n                                                            class=\"m-menu__link-text\">Campaigns\r\n                                                    </span>\r\n                                                    <span\r\n                                                            class=\"m-menu__link-badge\">\r\n                                                        <span\r\n                                                                class=\"m-badge m-badge--success\">3\r\n                                                        </span>\r\n                                                    </span>\r\n                                                </span>\r\n                                            </span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li class=\"m-menu__item  m-menu__item--submenu\"\r\n                                        routerLinkActive=\"m-menu__item--open\" routerLinkActiveOptions=\"{ exact: true }\"\r\n                                        m-menu-submenu-toggle=\"hover\" m-menu-link-redirect=\"1\" aria-haspopup=\"true\">\r\n                                        <a\r\n                                                href=\"javascript:;\" class=\"m-menu__link m-menu__toggle\"><i\r\n                                                class=\"m-menu__link-icon flaticon-infinity\"></i>\r\n                                            <span\r\n                                                    class=\"m-menu__link-text\">Cloud Manager\r\n                                            </span>\r\n                                            <i\r\n                                                    class=\"m-menu__hor-arrow la la-angle-right\"></i><i\r\n                                                    class=\"m-menu__ver-arrow la la-angle-right\"></i></a>\r\n                                        <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\r\n                                            <span class=\"m-menu__arrow\"></span>\r\n                                            <ul class=\"m-menu__subnav\">\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-add\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-title\">\r\n                                                            <span class=\"m-menu__link-wrap\">\r\n                                                                <span\r\n                                                                        class=\"m-menu__link-text\">File Upload\r\n                                                                </span>\r\n                                                                <span\r\n                                                                        class=\"m-menu__link-badge\">\r\n                                                                    <span\r\n                                                                            class=\"m-badge m-badge--danger\">3\r\n                                                                    </span>\r\n                                                                </span>\r\n                                                            </span>\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-signs-1\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">File Attributes\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-folder\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">Folders\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\"\r\n                                                    routerLinkActiveOptions=\"{ exact: true }\" m-menu-link-redirect=\"1\"\r\n                                                    aria-haspopup=\"true\">\r\n                                                    <a routerLink=\"/index\"\r\n                                                       class=\"m-menu__link\"><i\r\n                                                            class=\"m-menu__link-icon flaticon-cogwheel-2\"></i>\r\n                                                        <span\r\n                                                                class=\"m-menu__link-text\">System Settings\r\n                                                        </span>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div> <!-- END: Horizontal Menu -->                                <!-- BEGIN: Topbar -->\r\n                <div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general m-stack--fluid\">\r\n                    <div class=\"m-stack__item m-topbar__nav-wrapper\">\r\n                        <ul class=\"m-topbar__nav m-nav m-nav--inline\">\r\n                            <li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"\r\n                                m-dropdown-toggle=\"click\" id=\"m_quicksearch\" m-quicksearch-mode=\"dropdown\"\r\n                                m-dropdown-persistent=\"1\">\r\n                                <a href=\"\" class=\"m-nav__link m-dropdown__toggle\">\r\n                                    <span\r\n                                            class=\"m-nav__link-icon\"><i class=\"flaticon-search-1\"></i></span>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span\r\n                                            class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header\">\r\n                                            <form class=\"m-list-search__form\">\r\n                                                <div class=\"m-list-search__form-wrapper\">\r\n                                                    <span\r\n                                                            class=\"m-list-search__form-input-wrapper\"><input\r\n                                                            id=\"m_quicksearch_input\" autocomplete=\"off\" type=\"text\"\r\n                                                            name=\"q\"\r\n                                                            class=\"m-list-search__form-input\" value=\"\"\r\n                                                            placeholder=\"Search...\"></span>\r\n                                                    <span\r\n                                                            class=\"m-list-search__form-icon-close\"\r\n                                                            id=\"m_quicksearch_close\"><i\r\n                                                            class=\"la la-remove\"></i></span>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__scrollable m-scrollable\" data-scrollable=\"true\"\r\n                                                 data-height=\"300\" data-mobile-height=\"200\">\r\n                                                <div class=\"m-dropdown__content\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown\r\n                                m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center\r\n                                m-dropdown--mobile-full-width\" m-dropdown-toggle=\"click\" m-dropdown-persistent=\"1\">\r\n                                <a href=\"\"\r\n                                   class=\"m-nav__link m-dropdown__toggle\"\r\n                                   id=\"m_topbar_notification_icon\">\r\n                                    <span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span>\r\n                                    <span class=\"m-nav__link-icon\"><i class=\"flaticon-music-2\"></i></span>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span\r\n                                            class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header m--align-center\"\r\n                                             style=\"background: url(./assets/app/media/img/misc/notification_bg.jpg); background-size: cover;\">\r\n                                            <span class=\"m-dropdown__header-title\">9 New</span>\r\n                                            <span\r\n                                                    class=\"m-dropdown__header-subtitle\">User Notifications\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\"\r\n                                                    role=\"tablist\">\r\n                                                    <li class=\"nav-item m-tabs__item\">\r\n                                                        <a\r\n                                                                class=\"nav-link m-tabs__link active\" data-toggle=\"tab\"\r\n                                                                href=\"#topbar_notifications_notifications\" role=\"tab\">\r\n                                                            Alerts\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"nav-item m-tabs__item\">\r\n                                                        <a class=\"nav-link m-tabs__link\"\r\n                                                           data-toggle=\"tab\"\r\n                                                           href=\"#topbar_notifications_events\"\r\n                                                           role=\"tab\">Events\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"nav-item m-tabs__item\">\r\n                                                        <a class=\"nav-link m-tabs__link\"\r\n                                                           data-toggle=\"tab\"\r\n                                                           href=\"#topbar_notifications_logs\"\r\n                                                           role=\"tab\">Logs\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                                <div class=\"tab-content\">\r\n                                                    <div class=\"tab-pane active\" id=\"topbar_notifications_notifications\"\r\n                                                         role=\"tabpanel\">\r\n                                                        <div class=\"m-scrollable\" data-scrollable=\"true\"\r\n                                                             data-height=\"250\" data-mobile-height=\"200\">\r\n                                                            <div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n                                                                <div class=\"m-list-timeline__items\">\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">12 new\r\n                                                                            users registered\r\n                                                                        </span>\r\n                                                                        <span class=\"m-list-timeline__time\">Just now\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__text\">System\r\n                                                                            shutdown\r\n                                                                            <span\r\n                                                                                    class=\"m-badge m-badge--success m-badge--wide\">\r\n                                                                                pending\r\n                                                                            </span>\r\n                                                                        </span>\r\n                                                                        <span class=\"m-list-timeline__time\">14 mins\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__text\">New\r\n                                                                            invoice received\r\n                                                                        </span>\r\n                                                                        <span class=\"m-list-timeline__time\">20 mins\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__text\">DB\r\n                                                                            overloaded 80%\r\n                                                                            <span\r\n                                                                                    class=\"m-badge m-badge--info m-badge--wide\">\r\n                                                                                settled\r\n                                                                            </span>\r\n                                                                        </span>\r\n                                                                        <span class=\"m-list-timeline__time\">1 hr\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__text\">System\r\n                                                                            error - <a\r\n                                                                                    href=\"#\" class=\"m-link\">Check</a>\r\n                                                                        </span>\r\n                                                                        <span class=\"m-list-timeline__time\">2 hrs\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span href=\"\" class=\"m-list-timeline__text\">New\r\n                                                                            order received\r\n                                                                            <span\r\n                                                                                    class=\"m-badge m-badge--danger m-badge--wide\">\r\n                                                                                urgent\r\n                                                                            </span>\r\n                                                                        </span>\r\n                                                                        <span class=\"m-list-timeline__time\">7 hrs\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n                                                                        <span class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span class=\"m-list-timeline__text\">Production\r\n                                                                            server down\r\n                                                                        </span>\r\n                                                                        <span class=\"m-list-timeline__time\">3 hrs\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge\"></span>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__text\">Production\r\n                                                                            server up\r\n                                                                        </span>\r\n                                                                        <span class=\"m-list-timeline__time\">5 hrs\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"tab-pane\" id=\"topbar_notifications_events\"\r\n                                                         role=\"tabpanel\">\r\n                                                        <div class=\"m-scrollable\" data-scrollable=\"true\"\r\n                                                             data-height=\"250\" data-mobile-height=\"200\">\r\n                                                            <div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n                                                                <div class=\"m-list-timeline__items\">\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">New\r\n                                                                            order received\r\n                                                                        </a>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__time\">Just now\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">New\r\n                                                                            invoice received\r\n                                                                        </a>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__time\">20 mins\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            Production\r\n                                                                            server up\r\n                                                                        </a>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__time\">5 hrs\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">New\r\n                                                                            order received\r\n                                                                        </a>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__time\">7 hrs\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">System\r\n                                                                            shutdown\r\n                                                                        </a>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__time\">11 mins\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                    <div class=\"m-list-timeline__item\">\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                                                        <a href=\"\" class=\"m-list-timeline__text\">\r\n                                                                            Production\r\n                                                                            server down\r\n                                                                        </a>\r\n                                                                        <span\r\n                                                                                class=\"m-list-timeline__time\">3 hrs\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"tab-pane\" id=\"topbar_notifications_logs\"\r\n                                                         role=\"tabpanel\">\r\n                                                        <div class=\"m-stack m-stack--ver m-stack--general\"\r\n                                                             style=\"min-height: 180px;\">\r\n                                                            <div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n                                                                <span class=\"\">All caught up!<br>No new logs.</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li id=\"m_quick_sidebar_toggle\" class=\"m-nav__item\">\r\n                                <a href=\"\"\r\n                                   class=\"m-nav__link m-dropdown__toggle\">\r\n                                    <span class=\"m-nav__link-icon\"><i class=\"flaticon-grid-menu\"></i></span>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img\r\n                                m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill\r\n                                m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\"\r\n                                m-dropdown-toggle=\"click\">\r\n                                <a href=\"\" class=\"m-nav__link m-dropdown__toggle\">\r\n                                    <span\r\n                                            class=\"m-topbar__userpic\"><img\r\n                                            src=\"./assets/app/media/img/users/user4.jpg\"\r\n                                            class=\"m--img-rounded m--marginless\"\r\n                                            alt=\"\"/></span>\r\n                                    <span class=\"m-topbar__username m--hide\">Nick</span>\r\n                                </a>\r\n                                <div class=\"m-dropdown__wrapper\">\r\n                                    <span\r\n                                            class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                        <div class=\"m-dropdown__header m--align-center\"\r\n                                             style=\"background: url(./assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;\">\r\n                                            <div class=\"m-card-user m-card-user--skin-dark\">\r\n                                                <div class=\"m-card-user__pic\"><img\r\n                                                        src=\"./assets/app/media/img/users/user4.jpg\"\r\n                                                        class=\"m--img-rounded m--marginless\" alt=\"\"/>\r\n                                                    <!-- \t\t\t\t\t\t<span class=\"m-type m-type--lg m--bg-danger\"><span class=\"m--font-light\">S<span><span> \t\t\t\t\t\t-->\r\n                                                </div>\r\n                                                <div class=\"m-card-user__details\">\r\n                                                    <span\r\n                                                            class=\"m-card-user__name m--font-weight-500\">Sean Wu\r\n                                                    </span>\r\n                                                    <a href=\"\" class=\"m-card-user__email m--font-weight-300 m-link\">\r\n                                                        seanwu99@gmail.com\r\n                                                    </a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-dropdown__body\">\r\n                                            <div class=\"m-dropdown__content\">\r\n                                                <ul class=\"m-nav m-nav--skin-light\">\r\n                                                    <li class=\"m-nav__section m--hide\">\r\n                                                        <span\r\n                                                                class=\"m-nav__section-text\">Section\r\n                                                        </span>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/index\"\r\n                                                           class=\"m-nav__link\"><i\r\n                                                                class=\"m-nav__link-icon flaticon-profile-1\"></i>\r\n                                                            <span\r\n                                                                    class=\"m-nav__link-title\">\r\n                                                                <span\r\n                                                                        class=\"m-nav__link-wrap\">\r\n                                                                    <span\r\n                                                                            class=\"m-nav__link-text\">My Profile\r\n                                                                    </span>\r\n                                                                    <span\r\n                                                                            class=\"m-nav__link-badge\">\r\n                                                                        <span\r\n                                                                                class=\"m-badge m-badge--success\">2\r\n                                                                        </span>\r\n                                                                    </span>\r\n                                                                </span>\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/index\"\r\n                                                           class=\"m-nav__link\"><i\r\n                                                                class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                            <span\r\n                                                                    class=\"m-nav__link-text\">Activity\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/index\"\r\n                                                           class=\"m-nav__link\"><i\r\n                                                                class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                            <span\r\n                                                                    class=\"m-nav__link-text\">Messages\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/index\"\r\n                                                           class=\"m-nav__link\"><i\r\n                                                                class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                            <span\r\n                                                                    class=\"m-nav__link-text\">FAQ\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/index\"\r\n                                                           class=\"m-nav__link\"><i\r\n                                                                class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                                                            <span\r\n                                                                    class=\"m-nav__link-text\">Support\r\n                                                            </span>\r\n                                                        </a>\r\n                                                    </li>\r\n                                                    <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                                                    <li class=\"m-nav__item\">\r\n                                                        <a routerLink=\"/index\"\r\n                                                           class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\"\r\n                                                           routerLink=\"/index\">Logout\r\n                                                        </a>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                </div> <!-- END: Topbar -->            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!-- END: Header -->"

/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/layouts/header-nav/header-nav.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent() {
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    HeaderNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header-nav",
            template: __webpack_require__(/*! ./header-nav.component.html */ "./src/app/theme/layouts/header-nav/header-nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/layout.module.ts":
/*!************************************************!*\
  !*** ./src/app/theme/layouts/layout.module.ts ***!
  \************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/theme/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var _pages_default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/default/default.component */ "./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside-nav/aside-nav.component */ "./src/app/theme/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/theme/layouts/footer/footer.component.ts");
/* harmony import */ var _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quick-sidebar/quick-sidebar.component */ "./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_directives/href-prevent-default.directive */ "./src/app/_directives/href-prevent-default.directive.ts");
/* harmony import */ var _directives_unwrap_tag_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_directives/unwrap-tag.directive */ "./src/app/_directives/unwrap-tag.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { LayoutComponent } from './layout/layout.component';
// import { AsideLeftMinimizeDefaultEnabledComponent } from '../pages/aside-left-minimize-default-enabled/aside-left-minimize-default-enabled.component';





// import { ScrollTopComponent } from './scroll-top/scroll-top.component';
// import { TooltipsComponent } from './tooltips/tooltips.component';




var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                // LayoutComponent,
                // AsideLeftMinimizeDefaultEnabledComponent,
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_1__["HeaderNavComponent"],
                _pages_default_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_3__["AsideNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["QuickSidebarComponent"],
                // ScrollTopComponent,
                // TooltipsComponent,
                _directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_8__["HrefPreventDefaultDirective"],
                _directives_unwrap_tag_directive__WEBPACK_IMPORTED_MODULE_9__["UnwrapTagDirective"],
            ],
            exports: [
                // LayoutComponent,
                // AsideLeftMinimizeDefaultEnabledComponent,
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_1__["HeaderNavComponent"],
                _pages_default_default_component__WEBPACK_IMPORTED_MODULE_2__["DefaultComponent"],
                _aside_nav_aside_nav_component__WEBPACK_IMPORTED_MODULE_3__["AsideNavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _quick_sidebar_quick_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["QuickSidebarComponent"],
                // ScrollTopComponent,
                // TooltipsComponent,
                _directives_href_prevent_default_directive__WEBPACK_IMPORTED_MODULE_8__["HrefPreventDefaultDirective"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Sidebar -->\r\n<div id=\"m_quick_sidebar\" class=\"m-quick-sidebar m-quick-sidebar--tabbed m-quick-sidebar--skin-light\" appunwraptag=\"\">\r\n    <div class=\"m-quick-sidebar__content m--hide\"><span id=\"m_quick_sidebar_close\" class=\"m-quick-sidebar__close\"><i\r\n            class=\"la la-close\"></i></span>\r\n        <ul id=\"m_quick_sidebar_tabs\" class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\r\n            <li class=\"nav-item m-tabs__item\"><a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\"\r\n                                                 href=\"#m_quick_sidebar_tabs_messenger\" role=\"tab\">Messages</a></li>\r\n            <li class=\"nav-item m-tabs__item\"><a class=\"nav-link m-tabs__link\" data-toggle=\"tab\"\r\n                                                 href=\"#m_quick_sidebar_tabs_settings\" role=\"tab\">Settings</a></li>\r\n            <li class=\"nav-item m-tabs__item\"><a class=\"nav-link m-tabs__link\" data-toggle=\"tab\"\r\n                                                 href=\"#m_quick_sidebar_tabs_logs\" role=\"tab\">Logs</a></li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n            <div class=\"tab-pane active\" id=\"m_quick_sidebar_tabs_messenger\" role=\"tabpanel\">\r\n                <div class=\"m-messenger m-messenger--message-arrow m-messenger--skin-light\">\r\n                    <div class=\"m-messenger__messages m-scrollable\">\r\n                        <div class=\"m-messenger__wrapper\">\r\n                            <div class=\"m-messenger__message m-messenger__message--in\">\r\n                                <div class=\"m-messenger__message-pic\"><img src=\"./assets/app/media/img//users/user3.jpg\"\r\n                                                                           alt=\"\"/></div>\r\n                                <div class=\"m-messenger__message-body\">\r\n                                    <div class=\"m-messenger__message-arrow\"></div>\r\n                                    <div class=\"m-messenger__message-content\">\r\n                                        <div class=\"m-messenger__message-username\"> Megan wrote</div>\r\n                                        <div class=\"m-messenger__message-text\"> Hi Sean. What time will be the meeting\r\n                                            ?\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-messenger__wrapper\">\r\n                            <div class=\"m-messenger__message m-messenger__message--out\">\r\n                                <div class=\"m-messenger__message-body\">\r\n                                    <div class=\"m-messenger__message-arrow\"></div>\r\n                                    <div class=\"m-messenger__message-content\">\r\n                                        <div class=\"m-messenger__message-text\"> Hi Megan. It's at 2.30PM</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-messenger__wrapper\">\r\n                            <div class=\"m-messenger__message m-messenger__message--in\">\r\n                                <div class=\"m-messenger__message-pic\"><img src=\"./assets/app/media/img//users/user3.jpg\"\r\n                                                                           alt=\"\"/></div>\r\n                                <div class=\"m-messenger__message-body\">\r\n                                    <div class=\"m-messenger__message-arrow\"></div>\r\n                                    <div class=\"m-messenger__message-content\">\r\n                                        <div class=\"m-messenger__message-username\"> Megan wrote</div>\r\n                                        <div class=\"m-messenger__message-text\"> Will the development team be joining ?\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-messenger__wrapper\">\r\n                            <div class=\"m-messenger__message m-messenger__message--out\">\r\n                                <div class=\"m-messenger__message-body\">\r\n                                    <div class=\"m-messenger__message-arrow\"></div>\r\n                                    <div class=\"m-messenger__message-content\">\r\n                                        <div class=\"m-messenger__message-text\"> Yes sure. I invited them as well</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-messenger__datetime\">2:30PM</div>\r\n                        <div class=\"m-messenger__wrapper\">\r\n                            <div class=\"m-messenger__message m-messenger__message--in\">\r\n                                <div class=\"m-messenger__message-pic\"><img src=\"./assets/app/media/img//users/user3.jpg\"\r\n                                                                           alt=\"\"/></div>\r\n                                <div class=\"m-messenger__message-body\">\r\n                                    <div class=\"m-messenger__message-arrow\"></div>\r\n                                    <div class=\"m-messenger__message-content\">\r\n                                        <div class=\"m-messenger__message-username\"> Megan wrote</div>\r\n                                        <div class=\"m-messenger__message-text\"> Noted. For the Coca-Cola Mobile App\r\n                                            project as well ?\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-messenger__wrapper\">\r\n                            <div class=\"m-messenger__message m-messenger__message--out\">\r\n                                <div class=\"m-messenger__message-body\">\r\n                                    <div class=\"m-messenger__message-arrow\"></div>\r\n                                    <div class=\"m-messenger__message-content\">\r\n                                        <div class=\"m-messenger__message-text\"> Yes, sure.</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-messenger__wrapper\">\r\n                            <div class=\"m-messenger__message m-messenger__message--out\">\r\n                                <div class=\"m-messenger__message-body\">\r\n                                    <div class=\"m-messenger__message-arrow\"></div>\r\n                                    <div class=\"m-messenger__message-content\">\r\n                                        <div class=\"m-messenger__message-text\"> Please also prepare the quotation for\r\n                                            the Loop CRM project as well.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-messenger__datetime\">3:15PM</div>\r\n                        <div class=\"m-messenger__wrapper\">\r\n                            <div class=\"m-messenger__message m-messenger__message--in\">\r\n                                <div class=\"m-messenger__message-no-pic m--bg-fill-danger\"><span>M</span></div>\r\n                                <div class=\"m-messenger__message-body\">\r\n                                    <div class=\"m-messenger__message-arrow\"></div>\r\n                                    <div class=\"m-messenger__message-content\">\r\n                                        <div class=\"m-messenger__message-username\"> Megan wrote</div>\r\n                                        <div class=\"m-messenger__message-text\"> Noted. I will prepare it.</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-messenger__wrapper\">\r\n                            <div class=\"m-messenger__message m-messenger__message--out\">\r\n                                <div class=\"m-messenger__message-body\">\r\n                                    <div class=\"m-messenger__message-arrow\"></div>\r\n                                    <div class=\"m-messenger__message-content\">\r\n                                        <div class=\"m-messenger__message-text\"> Thanks Megan. I will see you later.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-messenger__wrapper\">\r\n                            <div class=\"m-messenger__message m-messenger__message--in\">\r\n                                <div class=\"m-messenger__message-pic\"><img src=\"./assets/app/media/img//users/user3.jpg\"\r\n                                                                           alt=\"\"/></div>\r\n                                <div class=\"m-messenger__message-body\">\r\n                                    <div class=\"m-messenger__message-arrow\"></div>\r\n                                    <div class=\"m-messenger__message-content\">\r\n                                        <div class=\"m-messenger__message-username\"> Megan wrote</div>\r\n                                        <div class=\"m-messenger__message-text\"> Sure. See you in the meeting soon.</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-messenger__seperator\"></div>\r\n                    <div class=\"m-messenger__form\">\r\n                        <div class=\"m-messenger__form-controls\"><input type=\"text\" name=\"\" placeholder=\"Type here...\"\r\n                                                                       class=\"m-messenger__form-input\"></div>\r\n                        <div class=\"m-messenger__form-tools\"><a href=\"\" class=\"m-messenger__form-attachment\"> <i\r\n                                class=\"la la-paperclip\"></i> </a></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"m_quick_sidebar_tabs_settings\" role=\"tabpanel\">\r\n                <div class=\"m-list-settings m-scrollable\">\r\n                    <div class=\"m-list-settings__group\">\r\n                        <div class=\"m-list-settings__heading\">General Settings</div>\r\n                        <div class=\"m-list-settings__item\"><span\r\n                                class=\"m-list-settings__item-label\">Email Notifications</span> <span\r\n                                class=\"m-list-settings__item-control\"> \t\t\t\t\t\t\t<span\r\n                                class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\"> \t\t\t\t\t\t\t<label> \t\t\t\t\t\t\t<input\r\n                                type=\"checkbox\" checked=\"checked\" name=\"\"> \t\t\t\t\t\t\t<span></span>  \t\t\t\t\t\t\t</label> \t\t\t\t\t\t\t</span>\t  \t\t\t\t\t\t\t</span>\r\n                        </div>\r\n                        <div class=\"m-list-settings__item\"><span\r\n                                class=\"m-list-settings__item-label\">Site Tracking</span> <span\r\n                                class=\"m-list-settings__item-control\"> \t\t\t\t\t\t\t<span\r\n                                class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\"> \t\t\t\t\t\t\t<label> \t\t\t\t\t\t\t<input\r\n                                type=\"checkbox\" name=\"\"> \t\t\t\t\t\t\t<span></span>  \t\t\t\t\t\t\t</label> \t\t\t\t\t\t\t</span>\t  \t\t\t\t\t\t\t</span>\r\n                        </div>\r\n                        <div class=\"m-list-settings__item\"><span class=\"m-list-settings__item-label\">SMS Alerts</span>\r\n                            <span class=\"m-list-settings__item-control\"> \t\t\t\t\t\t\t<span\r\n                                    class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\"> \t\t\t\t\t\t\t<label> \t\t\t\t\t\t\t<input\r\n                                    type=\"checkbox\" name=\"\"> \t\t\t\t\t\t\t<span></span>  \t\t\t\t\t\t\t</label> \t\t\t\t\t\t\t</span>\t  \t\t\t\t\t\t\t</span>\r\n                        </div>\r\n                        <div class=\"m-list-settings__item\"><span\r\n                                class=\"m-list-settings__item-label\">Backup Storage</span> <span\r\n                                class=\"m-list-settings__item-control\"> \t\t\t\t\t\t\t<span\r\n                                class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\"> \t\t\t\t\t\t\t<label> \t\t\t\t\t\t\t<input\r\n                                type=\"checkbox\" name=\"\"> \t\t\t\t\t\t\t<span></span>  \t\t\t\t\t\t\t</label> \t\t\t\t\t\t\t</span>\t  \t\t\t\t\t\t\t</span>\r\n                        </div>\r\n                        <div class=\"m-list-settings__item\"><span class=\"m-list-settings__item-label\">Audit Logs</span>\r\n                            <span class=\"m-list-settings__item-control\"> \t\t\t\t\t\t\t<span\r\n                                    class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\"> \t\t\t\t\t\t\t<label> \t\t\t\t\t\t\t<input\r\n                                    type=\"checkbox\" checked=\"checked\" name=\"\"> \t\t\t\t\t\t\t<span></span>  \t\t\t\t\t\t\t</label> \t\t\t\t\t\t\t</span>\t  \t\t\t\t\t\t\t</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-list-settings__group\">\r\n                        <div class=\"m-list-settings__heading\">System Settings</div>\r\n                        <div class=\"m-list-settings__item\"><span class=\"m-list-settings__item-label\">System Logs</span>\r\n                            <span class=\"m-list-settings__item-control\"> \t\t\t\t\t\t\t<span\r\n                                    class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\"> \t\t\t\t\t\t\t<label> \t\t\t\t\t\t\t<input\r\n                                    type=\"checkbox\" name=\"\"> \t\t\t\t\t\t\t<span></span>  \t\t\t\t\t\t\t</label> \t\t\t\t\t\t\t</span>\t  \t\t\t\t\t\t\t</span>\r\n                        </div>\r\n                        <div class=\"m-list-settings__item\"><span\r\n                                class=\"m-list-settings__item-label\">Error Reporting</span> <span\r\n                                class=\"m-list-settings__item-control\"> \t\t\t\t\t\t\t<span\r\n                                class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\"> \t\t\t\t\t\t\t<label> \t\t\t\t\t\t\t<input\r\n                                type=\"checkbox\" name=\"\"> \t\t\t\t\t\t\t<span></span>  \t\t\t\t\t\t\t</label> \t\t\t\t\t\t\t</span>\t  \t\t\t\t\t\t\t</span>\r\n                        </div>\r\n                        <div class=\"m-list-settings__item\"><span\r\n                                class=\"m-list-settings__item-label\">Applications Logs</span> <span\r\n                                class=\"m-list-settings__item-control\"> \t\t\t\t\t\t\t<span\r\n                                class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\"> \t\t\t\t\t\t\t<label> \t\t\t\t\t\t\t<input\r\n                                type=\"checkbox\" name=\"\"> \t\t\t\t\t\t\t<span></span>  \t\t\t\t\t\t\t</label> \t\t\t\t\t\t\t</span>\t  \t\t\t\t\t\t\t</span>\r\n                        </div>\r\n                        <div class=\"m-list-settings__item\"><span\r\n                                class=\"m-list-settings__item-label\">Backup Servers</span> <span\r\n                                class=\"m-list-settings__item-control\"> \t\t\t\t\t\t\t<span\r\n                                class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\"> \t\t\t\t\t\t\t<label> \t\t\t\t\t\t\t<input\r\n                                type=\"checkbox\" checked=\"checked\" name=\"\"> \t\t\t\t\t\t\t<span></span>  \t\t\t\t\t\t\t</label> \t\t\t\t\t\t\t</span>\t  \t\t\t\t\t\t\t</span>\r\n                        </div>\r\n                        <div class=\"m-list-settings__item\"><span class=\"m-list-settings__item-label\">Audit Logs</span>\r\n                            <span class=\"m-list-settings__item-control\"> \t\t\t\t\t\t\t<span\r\n                                    class=\"m-switch m-switch--outline m-switch--icon-check m-switch--brand\"> \t\t\t\t\t\t\t<label> \t\t\t\t\t\t\t<input\r\n                                    type=\"checkbox\" name=\"\"> \t\t\t\t\t\t\t<span></span>  \t\t\t\t\t\t\t</label> \t\t\t\t\t\t\t</span>\t  \t\t\t\t\t\t\t</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"m_quick_sidebar_tabs_logs\" role=\"tabpanel\">\r\n                <div class=\"m-list-timeline m-scrollable\">\r\n                    <div class=\"m-list-timeline__group\">\r\n                        <div class=\"m-list-timeline__heading\"> System Logs</div>\r\n                        <div class=\"m-list-timeline__items\">\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">12 new users registered <span\r\n                                    class=\"m-badge m-badge--warning m-badge--wide\">important</span></a> <span\r\n                                    class=\"m-list-timeline__time\">Just now</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span> <a href=\"\"\r\n                                                                                                                 class=\"m-list-timeline__text\">System\r\n                                shutdown</a> <span class=\"m-list-timeline__time\">11 mins</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">New invoice received</a> <span\r\n                                    class=\"m-list-timeline__time\">20 mins</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">Database overloaded 89% <span\r\n                                    class=\"m-badge m-badge--success m-badge--wide\">resolved</span></a> <span\r\n                                    class=\"m-list-timeline__time\">1 hr</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">System error</a> <span\r\n                                    class=\"m-list-timeline__time\">2 hrs</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span> <a href=\"\"\r\n                                                                                                                 class=\"m-list-timeline__text\">Production\r\n                                server down <span class=\"m-badge m-badge--danger m-badge--wide\">pending</span></a> <span\r\n                                    class=\"m-list-timeline__time\">3 hrs</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">Production server up</a> <span\r\n                                    class=\"m-list-timeline__time\">5 hrs</span></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-list-timeline__group\">\r\n                        <div class=\"m-list-timeline__heading\"> Applications Logs</div>\r\n                        <div class=\"m-list-timeline__items\">\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span> <a href=\"\"\r\n                                                                                                                 class=\"m-list-timeline__text\">New\r\n                                order received <span class=\"m-badge m-badge--info m-badge--wide\">urgent</span></a> <span\r\n                                    class=\"m-list-timeline__time\">7 hrs</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">12 new users registered</a> <span\r\n                                    class=\"m-list-timeline__time\">Just now</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span> <a href=\"\"\r\n                                                                                                                 class=\"m-list-timeline__text\">System\r\n                                shutdown</a> <span class=\"m-list-timeline__time\">11 mins</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">New invoices received</a> <span\r\n                                    class=\"m-list-timeline__time\">20 mins</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">Database overloaded 89%</a> <span\r\n                                    class=\"m-list-timeline__time\">1 hr</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">System error <span\r\n                                    class=\"m-badge m-badge--info m-badge--wide\">pending</span></a> <span\r\n                                    class=\"m-list-timeline__time\">2 hrs</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span> <a href=\"\"\r\n                                                                                                                 class=\"m-list-timeline__text\">Production\r\n                                server down</a> <span class=\"m-list-timeline__time\">3 hrs</span></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-list-timeline__group\">\r\n                        <div class=\"m-list-timeline__heading\"> Server Logs</div>\r\n                        <div class=\"m-list-timeline__items\">\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">Production server up</a> <span\r\n                                    class=\"m-list-timeline__time\">5 hrs</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span> <a href=\"\"\r\n                                                                                                                 class=\"m-list-timeline__text\">New\r\n                                order received</a> <span class=\"m-list-timeline__time\">7 hrs</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">12 new users registered</a> <span\r\n                                    class=\"m-list-timeline__time\">Just now</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span> <a href=\"\"\r\n                                                                                                                 class=\"m-list-timeline__text\">System\r\n                                shutdown</a> <span class=\"m-list-timeline__time\">11 mins</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-danger\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">New invoice received</a> <span\r\n                                    class=\"m-list-timeline__time\">20 mins</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-warning\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">Database overloaded 89%</a> <span\r\n                                    class=\"m-list-timeline__time\">1 hr</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">System error</a> <span\r\n                                    class=\"m-list-timeline__time\">2 hrs</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span> <a href=\"\"\r\n                                                                                                                 class=\"m-list-timeline__text\">Production\r\n                                server down</a> <span class=\"m-list-timeline__time\">3 hrs</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-success\"></span> <a\r\n                                    href=\"\" class=\"m-list-timeline__text\">Production server up</a> <span\r\n                                    class=\"m-list-timeline__time\">5 hrs</span></div>\r\n                            <div class=\"m-list-timeline__item\"><span\r\n                                    class=\"m-list-timeline__badge m-list-timeline__badge--state-info\"></span> <a href=\"\"\r\n                                                                                                                 class=\"m-list-timeline__text\">New\r\n                                order received</a> <span class=\"m-list-timeline__time\">1117 hrs</span></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> <!-- end::Quick Sidebar -->"

/***/ }),

/***/ "./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: QuickSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickSidebarComponent", function() { return QuickSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickSidebarComponent = /** @class */ (function () {
    function QuickSidebarComponent() {
    }
    QuickSidebarComponent.prototype.ngOnInit = function () {
    };
    QuickSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-quick-sidebar",
            template: __webpack_require__(/*! ./quick-sidebar.component.html */ "./src/app/theme/layouts/quick-sidebar/quick-sidebar.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], QuickSidebarComponent);
    return QuickSidebarComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/default.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/pages/default/default.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \t\t\t \t\t\t\t\t\t\t <app-aside-nav></app-aside-nav> \t\t\t \t\t   \t<div class=\"m-grid__item m-grid__item--fluid m-wrapper\"> \t\t\t     <router-outlet></router-outlet> \t\t    </div>  \t\t\t\t \t\t"

/***/ }),

/***/ "./src/app/theme/pages/default/default.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/pages/default/default.component.ts ***!
  \**********************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/theme/pages/default/default.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/theme-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ThemeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function() { return ThemeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _theme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.component */ "./src/app/theme/theme.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {AuthGuard} from "../auth/_guards/auth.guard";
var routes = [
    {
        "path": "",
        "component": _theme_component__WEBPACK_IMPORTED_MODULE_1__["ThemeComponent"],
        // "canActivate": [AuthGuard],
        "children": [
            // {
            //     "path": "angular/ng-bootstrap",
            //     "loadChildren": "./pages/default/angular/ng-bootstrap/ng-bootstrap.module#NgBootstrapModule"
            // },
            // {
            //     "path": "angular/primeng",
            //     "loadChildren": "./pages/default/angular/primeng/primeng.module#PrimengModule"
            // },
            {
                "path": "index",
                "loadChildren": "./pages/default/index/index.module#IndexModule"
            },
            // {
            //     "path": "components/base/typography",
            //     "loadChildren": "./pages/default/components/base/base-typography/base-typography.module#BaseTypographyModule"
            // },
            // {
            //     "path": "components/base/state",
            //     "loadChildren": "./pages/default/components/base/base-state/base-state.module#BaseStateModule"
            // },
            // {
            //     "path": "components/base/stack",
            //     "loadChildren": "./pages/default/components/base/base-stack/base-stack.module#BaseStackModule"
            // },
            // {
            //     "path": "components/base/tables",
            //     "loadChildren": "./pages/default/components/base/base-tables/base-tables.module#BaseTablesModule"
            // },
            // {
            //     "path": "components/base/modal",
            //     "loadChildren": "./pages/default/components/base/base-modal/base-modal.module#BaseModalModule"
            // },
            // {
            //     "path": "components/base/alerts",
            //     "loadChildren": "./pages/default/components/base/base-alerts/base-alerts.module#BaseAlertsModule"
            // },
            // {
            //     "path": "components/base/progress",
            //     "loadChildren": "./pages/default/components/base/base-progress/base-progress.module#BaseProgressModule"
            // },
            // {
            //     "path": "components/base/popover",
            //     "loadChildren": "./pages/default/components/base/base-popover/base-popover.module#BasePopoverModule"
            // },
            // {
            //     "path": "components/base/tooltip",
            //     "loadChildren": "./pages/default/components/base/base-tooltip/base-tooltip.module#BaseTooltipModule"
            // },
            // {
            //     "path": "components/base/blockui",
            //     "loadChildren": "./pages/default/components/base/base-blockui/base-blockui.module#BaseBlockuiModule"
            // },
            // {
            //     "path": "components/base/spinners",
            //     "loadChildren": "./pages/default/components/base/base-spinners/base-spinners.module#BaseSpinnersModule"
            // },
            // {
            //     "path": "components/base/scrollable",
            //     "loadChildren": "./pages/default/components/base/base-scrollable/base-scrollable.module#BaseScrollableModule"
            // },
            // {
            //     "path": "components/base/dropdown",
            //     "loadChildren": "./pages/default/components/base/base-dropdown/base-dropdown.module#BaseDropdownModule"
            // },
            // {
            //     "path": "components/base/tabs/bootstrap",
            //     "loadChildren": "./pages/default/components/base/tabs/tabs-bootstrap/tabs-bootstrap.module#TabsBootstrapModule"
            // },
            // {
            //     "path": "components/base/tabs/line",
            //     "loadChildren": "./pages/default/components/base/tabs/tabs-line/tabs-line.module#TabsLineModule"
            // },
            // {
            //     "path": "components/base/accordions",
            //     "loadChildren": "./pages/default/components/base/base-accordions/base-accordions.module#BaseAccordionsModule"
            // },
            // {
            //     "path": "components/base/navs",
            //     "loadChildren": "./pages/default/components/base/base-navs/base-navs.module#BaseNavsModule"
            // },
            // {
            //     "path": "components/base/lists",
            //     "loadChildren": "./pages/default/components/base/base-lists/base-lists.module#BaseListsModule"
            // },
            // {
            //     "path": "components/base/treeview",
            //     "loadChildren": "./pages/default/components/base/base-treeview/base-treeview.module#BaseTreeviewModule"
            // },
            // {
            //     "path": "components/base/bootstrap-notify",
            //     "loadChildren": "./pages/default/components/base/base-bootstrap-notify/base-bootstrap-notify.module#BaseBootstrapNotifyModule"
            // },
            // {
            //     "path": "components/base/toastr",
            //     "loadChildren": "./pages/default/components/base/base-toastr/base-toastr.module#BaseToastrModule"
            // },
            // {
            //     "path": "components/base/sweetalert2",
            //     "loadChildren": "./pages/default/components/base/base-sweetalert2/base-sweetalert2.module#BaseSweetalert2Module"
            // },
            // {
            //     "path": "components/icons/flaticon",
            //     "loadChildren": "./pages/default/components/icons/icons-flaticon/icons-flaticon.module#IconsFlaticonModule"
            // },
            // {
            //     "path": "components/icons/fontawesome5",
            //     "loadChildren": "./pages/default/components/icons/icons-fontawesome5/icons-fontawesome5.module#IconsFontawesome5Module"
            // },
            // {
            //     "path": "components/icons/lineawesome",
            //     "loadChildren": "./pages/default/components/icons/icons-lineawesome/icons-lineawesome.module#IconsLineawesomeModule"
            // },
            // {
            //     "path": "components/icons/socicons",
            //     "loadChildren": "./pages/default/components/icons/icons-socicons/icons-socicons.module#IconsSociconsModule"
            // },
            // {
            //     "path": "components/buttons/base/default",
            //     "loadChildren": "./pages/default/components/buttons/base/base-default/base-default.module#BaseDefaultModule"
            // },
            // {
            //     "path": "components/buttons/base/square",
            //     "loadChildren": "./pages/default/components/buttons/base/base-square/base-square.module#BaseSquareModule"
            // },
            // {
            //     "path": "components/buttons/base/pill",
            //     "loadChildren": "./pages/default/components/buttons/base/base-pill/base-pill.module#BasePillModule"
            // },
            // {
            //     "path": "components/buttons/base/air",
            //     "loadChildren": "./pages/default/components/buttons/base/base-air/base-air.module#BaseAirModule"
            // },
            // {
            //     "path": "components/buttons/group",
            //     "loadChildren": "./pages/default/components/buttons/buttons-group/buttons-group.module#ButtonsGroupModule"
            // },
            // {
            //     "path": "components/buttons/dropdown",
            //     "loadChildren": "./pages/default/components/buttons/buttons-dropdown/buttons-dropdown.module#ButtonsDropdownModule"
            // },
            // {
            //     "path": "components/buttons/icon/lineawesome",
            //     "loadChildren": "./pages/default/components/buttons/icon/icon-lineawesome/icon-lineawesome.module#IconLineawesomeModule"
            // },
            // {
            //     "path": "components/buttons/icon/fontawesome",
            //     "loadChildren": "./pages/default/components/buttons/icon/icon-fontawesome/icon-fontawesome.module#IconFontawesomeModule"
            // },
            // {
            //     "path": "components/buttons/icon/flaticon",
            //     "loadChildren": "./pages/default/components/buttons/icon/icon-flaticon/icon-flaticon.module#IconFlaticonModule"
            // },
            // {
            //     "path": "components/buttons/spinner",
            //     "loadChildren": "./pages/default/components/buttons/buttons-spinner/buttons-spinner.module#ButtonsSpinnerModule"
            // },
            // {
            //     "path": "components/portlets/base",
            //     "loadChildren": "./pages/default/components/portlets/portlets-base/portlets-base.module#PortletsBaseModule"
            // },
            // {
            //     "path": "components/portlets/advanced",
            //     "loadChildren": "./pages/default/components/portlets/portlets-advanced/portlets-advanced.module#PortletsAdvancedModule"
            // },
            // {
            //     "path": "components/portlets/creative",
            //     "loadChildren": "./pages/default/components/portlets/portlets-creative/portlets-creative.module#PortletsCreativeModule"
            // },
            // {
            //     "path": "components/portlets/tabbed",
            //     "loadChildren": "./pages/default/components/portlets/portlets-tabbed/portlets-tabbed.module#PortletsTabbedModule"
            // },
            // {
            //     "path": "components/portlets/draggable",
            //     "loadChildren": "./pages/default/components/portlets/portlets-draggable/portlets-draggable.module#PortletsDraggableModule"
            // },
            // {
            //     "path": "components/portlets/tools",
            //     "loadChildren": "./pages/default/components/portlets/portlets-tools/portlets-tools.module#PortletsToolsModule"
            // },
            // {
            //     "path": "components/portlets/sticky-head",
            //     "loadChildren": "./pages/default/components/portlets/portlets-sticky-head/portlets-sticky-head.module#PortletsStickyHeadModule"
            // },
            // {
            //     "path": "components/timeline/timeline-1",
            //     "loadChildren": "./pages/default/components/timeline/timeline-timeline-1/timeline-timeline-1.module#TimelineTimeline1Module"
            // },
            // {
            //     "path": "components/timeline/timeline-2",
            //     "loadChildren": "./pages/default/components/timeline/timeline-timeline-2/timeline-timeline-2.module#TimelineTimeline2Module"
            // },
            // {
            //     "path": "components/widgets/general",
            //     "loadChildren": "./pages/default/components/widgets/widgets-general/widgets-general.module#WidgetsGeneralModule"
            // },
            // {
            //     "path": "components/widgets/chart",
            //     "loadChildren": "./pages/default/components/widgets/widgets-chart/widgets-chart.module#WidgetsChartModule"
            // },
            // {
            //     "path": "components/calendar/basic",
            //     "loadChildren": "./pages/default/components/calendar/calendar-basic/calendar-basic.module#CalendarBasicModule"
            // },
            // {
            //     "path": "components/calendar/list-view",
            //     "loadChildren": "./pages/default/components/calendar/calendar-list-view/calendar-list-view.module#CalendarListViewModule"
            // },
            // {
            //     "path": "components/calendar/google",
            //     "loadChildren": "./pages/default/components/calendar/calendar-google/calendar-google.module#CalendarGoogleModule"
            // },
            // {
            //     "path": "components/calendar/external-events",
            //     "loadChildren": "./pages/default/components/calendar/calendar-external-events/calendar-external-events.module#CalendarExternalEventsModule"
            // },
            // {
            //     "path": "components/calendar/background-events",
            //     "loadChildren": "./pages/default/components/calendar/calendar-background-events/calendar-background-events.module#CalendarBackgroundEventsModule"
            // },
            // {
            //     "path": "components/charts/amcharts/charts",
            //     "loadChildren": "./pages/default/components/charts/amcharts/amcharts-charts/amcharts-charts.module#AmchartsChartsModule"
            // },
            // {
            //     "path": "components/charts/amcharts/stock-charts",
            //     "loadChildren": "./pages/default/components/charts/amcharts/amcharts-stock-charts/amcharts-stock-charts.module#AmchartsStockChartsModule"
            // },
            // {
            //     "path": "components/charts/amcharts/maps",
            //     "loadChildren": "./pages/default/components/charts/amcharts/amcharts-maps/amcharts-maps.module#AmchartsMapsModule"
            // },
            // {
            //     "path": "components/charts/flotcharts",
            //     "loadChildren": "./pages/default/components/charts/charts-flotcharts/charts-flotcharts.module#ChartsFlotchartsModule"
            // },
            // {
            //     "path": "components/charts/google-charts",
            //     "loadChildren": "./pages/default/components/charts/charts-google-charts/charts-google-charts.module#ChartsGoogleChartsModule"
            // },
            // {
            //     "path": "components/charts/morris-charts",
            //     "loadChildren": "./pages/default/components/charts/charts-morris-charts/charts-morris-charts.module#ChartsMorrisChartsModule"
            // },
            // {
            //     "path": "components/maps/google-maps",
            //     "loadChildren": "./pages/default/components/maps/maps-google-maps/maps-google-maps.module#MapsGoogleMapsModule"
            // },
            // {
            //     "path": "components/maps/jqvmap",
            //     "loadChildren": "./pages/default/components/maps/maps-jqvmap/maps-jqvmap.module#MapsJqvmapModule"
            // },
            // {
            //     "path": "components/utils/idle-timer",
            //     "loadChildren": "./pages/default/components/utils/utils-idle-timer/utils-idle-timer.module#UtilsIdleTimerModule"
            // },
            // {
            //     "path": "components/utils/session-timeout",
            //     "loadChildren": "./pages/default/components/utils/utils-session-timeout/utils-session-timeout.module#UtilsSessionTimeoutModule"
            // },
            // {
            //     "path": "crud/forms/controls/base",
            //     "loadChildren": "./pages/default/crud/forms/controls/controls-base/controls-base.module#ControlsBaseModule"
            // },
            // {
            //     "path": "crud/forms/controls/checkbox-radio",
            //     "loadChildren": "./pages/default/crud/forms/controls/controls-checkbox-radio/controls-checkbox-radio.module#ControlsCheckboxRadioModule"
            // },
            // {
            //     "path": "crud/forms/controls/switch",
            //     "loadChildren": "./pages/default/crud/forms/controls/controls-switch/controls-switch.module#ControlsSwitchModule"
            // },
            // {
            //     "path": "crud/forms/controls/input-group",
            //     "loadChildren": "./pages/default/crud/forms/controls/controls-input-group/controls-input-group.module#ControlsInputGroupModule"
            // },
            // {
            //     "path": "crud/forms/controls/option",
            //     "loadChildren": "./pages/default/crud/forms/controls/controls-option/controls-option.module#ControlsOptionModule"
            // },
            // {
            //     "path": "crud/forms/widgets/bootstrap-datepicker",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-datepicker/widgets-bootstrap-datepicker.module#WidgetsBootstrapDatepickerModule"
            // },
            // {
            //     "path": "crud/forms/widgets/bootstrap-datetimepicker",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-datetimepicker/widgets-bootstrap-datetimepicker.module#WidgetsBootstrapDatetimepickerModule"
            // },
            // {
            //     "path": "crud/forms/widgets/bootstrap-timepicker",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-timepicker/widgets-bootstrap-timepicker.module#WidgetsBootstrapTimepickerModule"
            // },
            // {
            //     "path": "crud/forms/widgets/bootstrap-daterangepicker",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-daterangepicker/widgets-bootstrap-daterangepicker.module#WidgetsBootstrapDaterangepickerModule"
            // },
            // {
            //     "path": "crud/forms/widgets/bootstrap-touchspin",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-touchspin/widgets-bootstrap-touchspin.module#WidgetsBootstrapTouchspinModule"
            // },
            // {
            //     "path": "crud/forms/widgets/bootstrap-maxlength",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-maxlength/widgets-bootstrap-maxlength.module#WidgetsBootstrapMaxlengthModule"
            // },
            // {
            //     "path": "crud/forms/widgets/bootstrap-switch",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-switch/widgets-bootstrap-switch.module#WidgetsBootstrapSwitchModule"
            // },
            // {
            //     "path": "crud/forms/widgets/bootstrap-multipleselectsplitter",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-multipleselectsplitter/widgets-bootstrap-multipleselectsplitter.module#WidgetsBootstrapMultipleselectsplitterModule"
            // },
            // {
            //     "path": "crud/forms/widgets/bootstrap-select",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-select/widgets-bootstrap-select.module#WidgetsBootstrapSelectModule"
            // },
            // {
            //     "path": "crud/forms/widgets/select2",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-select2/widgets-select2.module#WidgetsSelect2Module"
            // },
            // {
            //     "path": "crud/forms/widgets/typeahead",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-typeahead/widgets-typeahead.module#WidgetsTypeaheadModule"
            // },
            // {
            //     "path": "crud/forms/widgets/nouislider",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-nouislider/widgets-nouislider.module#WidgetsNouisliderModule"
            // },
            // {
            //     "path": "crud/forms/widgets/form-repeater",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-form-repeater/widgets-form-repeater.module#WidgetsFormRepeaterModule"
            // },
            // {
            //     "path": "crud/forms/widgets/ion-range-slider",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-ion-range-slider/widgets-ion-range-slider.module#WidgetsIonRangeSliderModule"
            // },
            // {
            //     "path": "crud/forms/widgets/input-mask",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-input-mask/widgets-input-mask.module#WidgetsInputMaskModule"
            // },
            // {
            //     "path": "crud/forms/widgets/autosize",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-autosize/widgets-autosize.module#WidgetsAutosizeModule"
            // },
            // {
            //     "path": "crud/forms/widgets/clipboard",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-clipboard/widgets-clipboard.module#WidgetsClipboardModule"
            // },
            // {
            //     "path": "crud/forms/widgets/dropzone",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-dropzone/widgets-dropzone.module#WidgetsDropzoneModule"
            // },
            // {
            //     "path": "crud/forms/widgets/recaptcha",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-recaptcha/widgets-recaptcha.module#WidgetsRecaptchaModule"
            // },
            // {
            //     "path": "crud/forms/widgets/summernote",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-summernote/widgets-summernote.module#WidgetsSummernoteModule"
            // },
            // {
            //     "path": "crud/forms/widgets/bootstrap-markdown",
            //     "loadChildren": "./pages/default/crud/forms/widgets/widgets-bootstrap-markdown/widgets-bootstrap-markdown.module#WidgetsBootstrapMarkdownModule"
            // },
            // {
            //     "path": "crud/forms/layouts/default-forms",
            //     "loadChildren": "./pages/default/crud/forms/layouts/layouts-default-forms/layouts-default-forms.module#LayoutsDefaultFormsModule"
            // },
            // {
            //     "path": "crud/forms/layouts/multi-column-forms",
            //     "loadChildren": "./pages/default/crud/forms/layouts/layouts-multi-column-forms/layouts-multi-column-forms.module#LayoutsMultiColumnFormsModule"
            // },
            // {
            //     "path": "crud/forms/layouts/action-bars",
            //     "loadChildren": "./pages/default/crud/forms/layouts/layouts-action-bars/layouts-action-bars.module#LayoutsActionBarsModule"
            // },
            // {
            //     "path": "crud/forms/layouts/sticky-action-bar",
            //     "loadChildren": "./pages/default/crud/forms/layouts/layouts-sticky-action-bar/layouts-sticky-action-bar.module#LayoutsStickyActionBarModule"
            // },
            // {
            //     "path": "crud/forms/validation/states",
            //     "loadChildren": "./pages/default/crud/forms/validation/validation-states/validation-states.module#ValidationStatesModule"
            // },
            // {
            //     "path": "crud/forms/validation/form-controls",
            //     "loadChildren": "./pages/default/crud/forms/validation/validation-form-controls/validation-form-controls.module#ValidationFormControlsModule"
            // },
            // {
            //     "path": "crud/forms/validation/form-widgets",
            //     "loadChildren": "./pages/default/crud/forms/validation/validation-form-widgets/validation-form-widgets.module#ValidationFormWidgetsModule"
            // },
            // {
            //     "path": "crud/wizard/wizard-1",
            //     "loadChildren": "./pages/default/crud/wizard/wizard-wizard-1/wizard-wizard-1.module#WizardWizard1Module"
            // },
            // {
            //     "path": "crud/wizard/wizard-2",
            //     "loadChildren": "./pages/default/crud/wizard/wizard-wizard-2/wizard-wizard-2.module#WizardWizard2Module"
            // },
            // {
            //     "path": "crud/wizard/wizard-3",
            //     "loadChildren": "./pages/default/crud/wizard/wizard-wizard-3/wizard-wizard-3.module#WizardWizard3Module"
            // },
            // {
            //     "path": "crud/wizard/wizard-4",
            //     "loadChildren": "./pages/default/crud/wizard/wizard-wizard-4/wizard-wizard-4.module#WizardWizard4Module"
            // },
            // {
            //     "path": "crud/wizard/wizard-5",
            //     "loadChildren": "./pages/default/crud/wizard/wizard-wizard-5/wizard-wizard-5.module#WizardWizard5Module"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/data-local",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-data-local/base-data-local.module#BaseDataLocalModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/data-json",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-data-json/base-data-json.module#BaseDataJsonModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/data-ajax",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-data-ajax/base-data-ajax.module#BaseDataAjaxModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/record-selection",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-record-selection/base-record-selection.module#BaseRecordSelectionModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/column-rendering",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-column-rendering/base-column-rendering.module#BaseColumnRenderingModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/row-details",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-row-details/base-row-details.module#BaseRowDetailsModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/column-width",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-column-width/base-column-width.module#BaseColumnWidthModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/responsive-columns",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-responsive-columns/base-responsive-columns.module#BaseResponsiveColumnsModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/translation",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-translation/base-translation.module#BaseTranslationModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/local-sort",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-local-sort/base-local-sort.module#BaseLocalSortModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/html-table",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-html-table/base-html-table.module#BaseHtmlTableModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/base/auto-column-hide",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/base/base-auto-column-hide/base-auto-column-hide.module#BaseAutoColumnHideModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/scrolling/vertical",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/scrolling/scrolling-vertical/scrolling-vertical.module#ScrollingVerticalModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/scrolling/horizontal",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/scrolling/scrolling-horizontal/scrolling-horizontal.module#ScrollingHorizontalModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/scrolling/both",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/scrolling/scrolling-both/scrolling-both.module#ScrollingBothModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/locked/left",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/locked/locked-left/locked-left.module#LockedLeftModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/locked/right",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/locked/locked-right/locked-right.module#LockedRightModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/locked/both",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/locked/locked-both/locked-both.module#LockedBothModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/locked/html-table",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/locked/locked-html-table/locked-html-table.module#LockedHtmlTableModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/child/data-local",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/child/child-data-local/child-data-local.module#ChildDataLocalModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/child/data-ajax",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/child/child-data-ajax/child-data-ajax.module#ChildDataAjaxModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/api/methods",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/api/api-methods/api-methods.module#ApiMethodsModule"
            // },
            // {
            //     "path": "crud/metronic-datatable/api/events",
            //     "loadChildren": "./pages/default/crud/metronic-datatable/api/api-events/api-events.module#ApiEventsModule"
            // },
            // {
            //     "path": "crud/datatables/basic/basic",
            //     "loadChildren": "./pages/default/crud/datatables/basic/basic-basic/basic-basic.module#BasicBasicModule"
            // },
            // {
            //     "path": "crud/datatables/basic/headers",
            //     "loadChildren": "./pages/default/crud/datatables/basic/basic-headers/basic-headers.module#BasicHeadersModule"
            // },
            // {
            //     "path": "crud/datatables/basic/paginations",
            //     "loadChildren": "./pages/default/crud/datatables/basic/basic-paginations/basic-paginations.module#BasicPaginationsModule"
            // },
            // {
            //     "path": "crud/datatables/basic/scrollable",
            //     "loadChildren": "./pages/default/crud/datatables/basic/basic-scrollable/basic-scrollable.module#BasicScrollableModule"
            // },
            // {
            //     "path": "crud/datatables/advanced/column-rendering",
            //     "loadChildren": "./pages/default/crud/datatables/advanced/advanced-column-rendering/advanced-column-rendering.module#AdvancedColumnRenderingModule"
            // },
            // {
            //     "path": "crud/datatables/advanced/multiple-controls",
            //     "loadChildren": "./pages/default/crud/datatables/advanced/advanced-multiple-controls/advanced-multiple-controls.module#AdvancedMultipleControlsModule"
            // },
            // {
            //     "path": "crud/datatables/advanced/column-visibility",
            //     "loadChildren": "./pages/default/crud/datatables/advanced/advanced-column-visibility/advanced-column-visibility.module#AdvancedColumnVisibilityModule"
            // },
            // {
            //     "path": "crud/datatables/advanced/row-callback",
            //     "loadChildren": "./pages/default/crud/datatables/advanced/advanced-row-callback/advanced-row-callback.module#AdvancedRowCallbackModule"
            // },
            // {
            //     "path": "crud/datatables/advanced/row-grouping",
            //     "loadChildren": "./pages/default/crud/datatables/advanced/advanced-row-grouping/advanced-row-grouping.module#AdvancedRowGroupingModule"
            // },
            // {
            //     "path": "crud/datatables/advanced/footer-callback",
            //     "loadChildren": "./pages/default/crud/datatables/advanced/advanced-footer-callback/advanced-footer-callback.module#AdvancedFooterCallbackModule"
            // },
            // {
            //     "path": "crud/datatables/data-sources/html",
            //     "loadChildren": "./pages/default/crud/datatables/data-sources/data-sources-html/data-sources-html.module#DataSourcesHtmlModule"
            // },
            // {
            //     "path": "crud/datatables/data-sources/javascript",
            //     "loadChildren": "./pages/default/crud/datatables/data-sources/data-sources-javascript/data-sources-javascript.module#DataSourcesJavascriptModule"
            // },
            // {
            //     "path": "crud/datatables/data-sources/ajax-client-side",
            //     "loadChildren": "./pages/default/crud/datatables/data-sources/data-sources-ajax-client-side/data-sources-ajax-client-side.module#DataSourcesAjaxClientSideModule"
            // },
            // {
            //     "path": "crud/datatables/data-sources/ajax-server-side",
            //     "loadChildren": "./pages/default/crud/datatables/data-sources/data-sources-ajax-server-side/data-sources-ajax-server-side.module#DataSourcesAjaxServerSideModule"
            // },
            // {
            //     "path": "crud/datatables/extensions/buttons",
            //     "loadChildren": "./pages/default/crud/datatables/extensions/extensions-buttons/extensions-buttons.module#ExtensionsButtonsModule"
            // },
            // {
            //     "path": "crud/datatables/extensions/colreorder",
            //     "loadChildren": "./pages/default/crud/datatables/extensions/extensions-colreorder/extensions-colreorder.module#ExtensionsColreorderModule"
            // },
            // {
            //     "path": "crud/datatables/extensions/keytable",
            //     "loadChildren": "./pages/default/crud/datatables/extensions/extensions-keytable/extensions-keytable.module#ExtensionsKeytableModule"
            // },
            // {
            //     "path": "crud/datatables/extensions/responsive",
            //     "loadChildren": "./pages/default/crud/datatables/extensions/extensions-responsive/extensions-responsive.module#ExtensionsResponsiveModule"
            // },
            // {
            //     "path": "crud/datatables/extensions/rowgroup",
            //     "loadChildren": "./pages/default/crud/datatables/extensions/extensions-rowgroup/extensions-rowgroup.module#ExtensionsRowgroupModule"
            // },
            // {
            //     "path": "crud/datatables/extensions/rowreorder",
            //     "loadChildren": "./pages/default/crud/datatables/extensions/extensions-rowreorder/extensions-rowreorder.module#ExtensionsRowreorderModule"
            // },
            // {
            //     "path": "crud/datatables/extensions/scroller",
            //     "loadChildren": "./pages/default/crud/datatables/extensions/extensions-scroller/extensions-scroller.module#ExtensionsScrollerModule"
            // },
            // {
            //     "path": "crud/datatables/extensions/select",
            //     "loadChildren": "./pages/default/crud/datatables/extensions/extensions-select/extensions-select.module#ExtensionsSelectModule"
            // },
            // {
            //     "path": "crud/datatables/search-options/column-search",
            //     "loadChildren": "./pages/default/crud/datatables/search-options/search-options-column-search/search-options-column-search.module#SearchOptionsColumnSearchModule"
            // },
            // {
            //     "path": "crud/datatables/search-options/advanced-search",
            //     "loadChildren": "./pages/default/crud/datatables/search-options/search-options-advanced-search/search-options-advanced-search.module#SearchOptionsAdvancedSearchModule"
            // },
            // {
            //     "path": "snippets/general/pricing-tables/pricing-table-1",
            //     "loadChildren": "./pages/aside-left-minimize-default-enabled/snippets/general/pricing-tables/pricing-tables-pricing-table-1/pricing-tables-pricing-table-1.module#PricingTablesPricingTable1Module"
            // },
            // {
            //     "path": "snippets/general/pricing-tables/pricing-table-2",
            //     "loadChildren": "./pages/aside-left-minimize-default-enabled/snippets/general/pricing-tables/pricing-tables-pricing-table-2/pricing-tables-pricing-table-2.module#PricingTablesPricingTable2Module"
            // },
            // {
            //     "path": "snippets/general/pricing-tables/pricing-table-3",
            //     "loadChildren": "./pages/aside-left-minimize-default-enabled/snippets/general/pricing-tables/pricing-tables-pricing-table-3/pricing-tables-pricing-table-3.module#PricingTablesPricingTable3Module"
            // },
            // {
            //     "path": "snippets/general/pricing-tables/pricing-table-4",
            //     "loadChildren": "./pages/aside-left-minimize-default-enabled/snippets/general/pricing-tables/pricing-tables-pricing-table-4/pricing-tables-pricing-table-4.module#PricingTablesPricingTable4Module"
            // },
            // {
            //     "path": "snippets/faq/faq-1",
            //     "loadChildren": "./pages/default/snippets/faq/faq-faq-1/faq-faq-1.module#FaqFaq1Module"
            // },
            // {
            //     "path": "snippets/invoices/invoice-1",
            //     "loadChildren": "./pages/default/snippets/invoices/invoices-invoice-1/invoices-invoice-1.module#InvoicesInvoice1Module"
            // },
            // {
            //     "path": "snippets/invoices/invoice-2",
            //     "loadChildren": "./pages/default/snippets/invoices/invoices-invoice-2/invoices-invoice-2.module#InvoicesInvoice2Module"
            // },
            // {
            //     "path": "header/actions",
            //     "loadChildren": "./pages/default/header/header-actions/header-actions.module#HeaderActionsModule"
            // },
            // {
            //     "path": "header/profile",
            //     "loadChildren": "./pages/default/header/header-profile/header-profile.module#HeaderProfileModule"
            // },
            {
                "path": "404",
                "loadChildren": "./pages/default/not-found/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    // {
    //     "path": "snippets/pages/user/login-1",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-1/user-login-1.module#UserLogin1Module"
    // },
    // {
    //     "path": "snippets/pages/user/login-2",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-2/user-login-2.module#UserLogin2Module"
    // },
    // {
    //     "path": "snippets/pages/user/login-3",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-3/user-login-3.module#UserLogin3Module"
    // },
    // {
    //     "path": "snippets/pages/user/login-4",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-4/user-login-4.module#UserLogin4Module"
    // },
    // {
    //     "path": "snippets/pages/user/login-5",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-5/user-login-5.module#UserLogin5Module"
    // },
    // {
    //     "path": "snippets/pages/user/login-6",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/user/user-login-6/user-login-6.module#UserLogin6Module"
    // },
    // {
    //     "path": "snippets/pages/errors/error-1",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-1/errors-error-1.module#ErrorsError1Module"
    // },
    // {
    //     "path": "snippets/pages/errors/error-2",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-2/errors-error-2.module#ErrorsError2Module"
    // },
    // {
    //     "path": "snippets/pages/errors/error-3",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-3/errors-error-3.module#ErrorsError3Module"
    // },
    // {
    //     "path": "snippets/pages/errors/error-4",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-4/errors-error-4.module#ErrorsError4Module"
    // },
    // {
    //     "path": "snippets/pages/errors/error-5",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-5/errors-error-5.module#ErrorsError5Module"
    // },
    // {
    //     "path": "snippets/pages/errors/error-6",
    //     "loadChildren": "./pages/self-layout-blank/snippets/pages/errors/errors-error-6/errors-error-6.module#ErrorsError6Module"
    // },
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];
var ThemeRoutingModule = /** @class */ (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/theme.component.html":
/*!********************************************!*\
  !*** ./src/app/theme/theme.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-nav></app-header-nav>        <!-- begin::Body -->\r\n<router-outlet></router-outlet>        <!-- end:: Body -->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/*!******************************************!*\
  !*** ./src/app/theme/theme.component.ts ***!
  \******************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers.ts");
/* harmony import */ var _services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/script-loader.service */ "./src/app/_services/script-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeComponent = /** @class */ (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js',
            'assets/default/base/scripts.bundle.js',
            'assets/app/js/highstock.js',
            'assets/app/js/drilldown.js',
            'assets/app/js/highcharts-3d.js',
            'assets/app/js/default.js',
        ], true)
            .then(function (result) {
            _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
            // optional js to be loaded once
            _this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js', 'assets/app/js/oee.js'], true);
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                mLayout.closeMobileAsideMenuOffcanvas();
                mLayout.closeMobileHorMenuOffcanvas();
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(true);
                // hide visible popover
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // init required js
                mApp.init();
                mUtil.init();
                _helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    ThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__(/*! ./theme.component.html */ "./src/app/theme/theme.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_services_script_loader_service__WEBPACK_IMPORTED_MODULE_3__["ScriptLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ThemeComponent);
    return ThemeComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! C:\Users\wuxia\WebstormProjects\oee-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map