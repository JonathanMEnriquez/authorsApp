webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n  <a [routerLink]=\"['']\">Home</a>\n  <p>We have quotes by:</p>\n</div>\n<div id=\"form\">\n  <form (submit)=\"addAuthor()\">\n    <p>Name:</p>\n    <input type=\"text\" name=\"nameField\" [(ngModel)]=\"newAuthor.name\">\n    <button (click)=\"clearField()\">Cancel</button>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/add/add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var api_service_1 = __webpack_require__("../../../../../src/app/api.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AddComponent = /** @class */ (function () {
    function AddComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.newAuthor = { name: "" };
        this.error = "";
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.clearField = function () {
        this.newAuthor.name = "";
        this._router.navigate(['']);
    };
    AddComponent.prototype.addAuthor = function () {
        console.log(this.newAuthor);
        if (this.newAuthor.name != "") {
            var observable = this._apiService.newAuthor(this.newAuthor);
            observable.subscribe(function (responseData) {
                console.log(responseData);
            });
        }
        // clear field
        this.clearField();
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            template: __webpack_require__("../../../../../src/app/add/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;


/***/ }),

/***/ "../../../../../src/app/all/all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n  <a [routerLink]=\"['new']\">Add an author</a>\n  <p>We have quotes by:</p>\n</div>\n<div id=\"table\">\n  <table *ngIf=\"allAuthors != undefined\" >\n    <tr>\n      <th>Author</th>\n      <th>Actions Available</th>\n    </tr>\n    <tr *ngFor=\"let author of allAuthors.data\" >\n      <td>{{author.name}}</td>\n      <td><button [routerLink]=\"['quotes/'+author._id]\">Quotes</button> <button [routerLink]=\"['edit/'+author._id]\">Edit</button> <button (click)=\"deleteAuthor(author._id)\">Delete</button></td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/all/all.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var api_service_1 = __webpack_require__("../../../../../src/app/api.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var AllComponent = /** @class */ (function () {
    function AllComponent(_apiService, _router, _route) {
        this._apiService = _apiService;
        this._router = _router;
        this._route = _route;
    }
    AllComponent.prototype.ngOnInit = function () {
        // get all the authors
        this.getAllAuthors();
    };
    AllComponent.prototype.getAllAuthors = function () {
        var _this = this;
        console.log('get all authors');
        var observable = this._apiService.getAuthors();
        observable.subscribe(function (responseData) {
            console.log(responseData);
            if (responseData.errors) {
                console.log(responseData.errors);
            }
            else {
                _this.allAuthors = responseData;
            }
        });
    };
    AllComponent.prototype.deleteAuthor = function (authorId) {
        var _this = this;
        console.log('delete author, ', authorId);
        var observable = this._apiService.deleteOne(authorId);
        observable.subscribe(function (responseData) {
            if (responseData.errors) {
                console.log(responseData.errors);
                _this.errorMessage = responseData.errors;
            }
            else {
                _this.getAllAuthors();
            }
        });
    };
    AllComponent = __decorate([
        core_1.Component({
            selector: 'app-all',
            template: __webpack_require__("../../../../../src/app/all/all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            router_1.Router,
            router_2.ActivatedRoute])
    ], AllComponent);
    return AllComponent;
}());
exports.AllComponent = AllComponent;


/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.newAuthor = function (author) {
        console.log('newAuthor api');
        return this._http.post('/api/authors', author);
    };
    ApiService.prototype.getAuthors = function () {
        console.log('get authors');
        return this._http.get('/api/authors');
    };
    ApiService.prototype.deleteOne = function (auth_id) {
        console.log('delete one apiservice');
        return this._http.delete('/api/authors/' + auth_id);
    };
    ApiService.prototype.getOne = function (auth_id) {
        console.log('get one apiService');
        return this._http.get('/api/authors/' + auth_id);
    };
    ApiService.prototype.editOne = function (author) {
        console.log('edit one api');
        return this._http.put('/api/authors/' + author._id, author);
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var all_component_1 = __webpack_require__("../../../../../src/app/all/all.component.ts");
var add_component_1 = __webpack_require__("../../../../../src/app/add/add.component.ts");
var edit_component_1 = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
var quotes_component_1 = __webpack_require__("../../../../../src/app/quotes/quotes.component.ts");
var new_quotes_component_1 = __webpack_require__("../../../../../src/app/new-quotes/new-quotes.component.ts");
var routes = [
    { path: '', component: all_component_1.AllComponent },
    { path: 'new', component: add_component_1.AddComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'quotes/:id', component: quotes_component_1.QuotesComponent },
    { path: 'write/:id', component: new_quotes_component_1.NewQuotesComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <h1>Quote Ranks</h1>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var add_component_1 = __webpack_require__("../../../../../src/app/add/add.component.ts");
var edit_component_1 = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
var all_component_1 = __webpack_require__("../../../../../src/app/all/all.component.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var api_service_1 = __webpack_require__("../../../../../src/app/api.service.ts");
var quotes_component_1 = __webpack_require__("../../../../../src/app/quotes/quotes.component.ts");
var new_quotes_component_1 = __webpack_require__("../../../../../src/app/new-quotes/new-quotes.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                all_component_1.AllComponent,
                add_component_1.AddComponent,
                edit_component_1.EditComponent,
                quotes_component_1.QuotesComponent,
                new_quotes_component_1.NewQuotesComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [api_service_1.ApiService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n  <button (click)=\"goHome()\">Home</button>\n  <p>Edit this author</p>\n</div>\n<div id=\"outerBox\">\n  <p>Name: </p>\n  <form (submit)=\"editAuthor()\">\n    <input type=\"text\" [(ngModel)]=\"author.name\" name=\"authorInput\">\n    <button (click)=\"clearField()\">Cancel</button>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var api_service_1 = __webpack_require__("../../../../../src/app/api.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var EditComponent = /** @class */ (function () {
    function EditComponent(_apiService, _router, _route) {
        this._apiService = _apiService;
        this._router = _router;
        this._route = _route;
        this.author = {
            _id: "",
            name: ""
        };
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.author._id = params['id']; });
        this.getAuthor(this.author._id);
    };
    EditComponent.prototype.goHome = function () {
        this._router.navigate(['']);
    };
    EditComponent.prototype.getAuthor = function (author_id) {
        var _this = this;
        var observable = this._apiService.getOne(author_id);
        observable.subscribe(function (responseData) {
            console.log(responseData);
            if (responseData.errors) {
                // let user know
            }
            else {
                _this.author = responseData.data;
            }
        });
    };
    EditComponent.prototype.editAuthor = function (author_id) {
        var _this = this;
        if (this.author.name != "") {
            var observable = this._apiService.editOne(this.author);
            observable.subscribe(function (response) {
                console.log(response);
                if (response.errors) {
                    //let user know
                }
                else {
                    _this._router.navigate(['']);
                }
            });
        }
    };
    EditComponent.prototype.clearField = function () {
        this.author.name = "";
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router, router_2.ActivatedRoute])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "../../../../../src/app/new-quotes/new-quotes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-quotes/new-quotes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\" *ngIf=\"author.name != ''\" >\n  <a [routerLink]=\"['']\">Home</a>\n  <p>Provide a quote by {{author.name}}:</p>\n</div>\n<div *ngIf=\"errors != undefined\" >\n  <p>{{errors}}</p>\n</div>\n<div id=\"form\">\n  <form (submit)=\"addQuote()\">\n    <p>Quote:</p>\n    <input type=\"text\" name=\"quoteField\" [(ngModel)]=\"newQuote.content\">\n    <button (click)=\"clearField()\">Cancel</button>\n    <input type=\"submit\" value=\"Submit\">\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-quotes/new-quotes.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var api_service_1 = __webpack_require__("../../../../../src/app/api.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var NewQuotesComponent = /** @class */ (function () {
    function NewQuotesComponent(_apiService, _route, _router) {
        this._apiService = _apiService;
        this._route = _route;
        this._router = _router;
        this.emptyArr = [];
        this.author = {
            id: "",
            name: "",
            quotes: this.emptyArr
        };
        this.newQuote = {
            content: "",
            score: 0
        };
    }
    NewQuotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.getAuthor(this.id);
    };
    NewQuotesComponent.prototype.getAuthor = function (author_id) {
        var _this = this;
        var observable = this._apiService.getOne(author_id);
        observable.subscribe(function (responseData) {
            console.log(responseData);
            if (responseData.errors) {
                _this._router.navigate(['']);
            }
            else {
                _this.author = responseData.data;
            }
        });
    };
    NewQuotesComponent.prototype.addQuote = function () {
        if (this.newQuote.content.length < 3) {
            this.errors = "A quote must contain at least 3 characters!";
            return;
        }
        console.log(this.newQuote);
        this.author.quotes.push(this.newQuote);
        console.log(this.author);
        this.editAuthor();
    };
    NewQuotesComponent.prototype.editAuthor = function () {
        var _this = this;
        var observable = this._apiService.editOne(this.author);
        observable.subscribe(function (response) {
            console.log(response);
            if (response.errors) {
                //let user know
            }
            else {
                _this._router.navigate(['quotes/' + _this.id]);
            }
        });
    };
    NewQuotesComponent.prototype.clearField = function () {
        this._router.navigate(['/quotes/' + this.id]);
    };
    NewQuotesComponent = __decorate([
        core_1.Component({
            selector: 'app-new-quotes',
            template: __webpack_require__("../../../../../src/app/new-quotes/new-quotes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-quotes/new-quotes.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.ActivatedRoute, router_2.Router])
    ], NewQuotesComponent);
    return NewQuotesComponent;
}());
exports.NewQuotesComponent = NewQuotesComponent;


/***/ }),

/***/ "../../../../../src/app/quotes/quotes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotes/quotes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\" *ngIf=\"author != undefined\" >\n  <a [routerLink]=\"['']\">Home</a>\n  <a [routerLink]=\"['/write/'+author._id]\">Add quote</a>\n  <p>We have quotes by: {{author.name}}</p>\n</div>\n<div id=\"table\">\n  <table *ngIf=\"author != undefined\" >\n    <tr>\n      <th>Quote</th>\n      <th>Votes</th>\n      <th>Actions Available</th>\n    </tr>\n    <tr  *ngFor=\"let quote of author.quotes; let i = index\" >\n      <td>{{author.quotes[i].content}}</td>\n      <td>{{author.quotes[i].score}}</td>\n      <td><button (click)=\"upVote(i)\">Vote up</button> <button (click)=\"downVote(i)\">Vote down</button> <button (click)=\"deleteQuote()\">Delete</button></td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/quotes/quotes.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var api_service_1 = __webpack_require__("../../../../../src/app/api.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var router_2 = __webpack_require__("../../../router/esm5/router.js");
var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(_apiService, _router, _route) {
        this._apiService = _apiService;
        this._router = _router;
        this._route = _route;
        this.author = {
            _id: "",
            name: "",
            quotes: []
        };
    }
    QuotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.getAuthor(this.id);
    };
    QuotesComponent.prototype.getAuthor = function (author_id) {
        var _this = this;
        var observable = this._apiService.getOne(author_id);
        observable.subscribe(function (responseData) {
            console.log(responseData);
            if (responseData.errors) {
                _this._router.navigate(['']);
            }
            else {
                _this.author = responseData.data;
            }
        });
    };
    QuotesComponent.prototype.upVote = function (index) {
        this.author.quotes[index].score += 1;
        this.editAuthor();
    };
    QuotesComponent.prototype.downVote = function (index) {
        this.author.quotes[index].score -= 1;
        this.editAuthor();
    };
    QuotesComponent.prototype.deleteQuote = function (index) {
        this.author.quotes.splice(index, 1);
        this.editAuthor();
    };
    QuotesComponent.prototype.editAuthor = function () {
        var _this = this;
        var observable = this._apiService.editOne(this.author);
        observable.subscribe(function (response) {
            console.log(response);
            if (response.errors) {
                //let user know
            }
            else {
                _this._route.params.subscribe(function (params) { return _this.id = params['id']; });
                _this.getAuthor(_this.id);
            }
        });
    };
    QuotesComponent = __decorate([
        core_1.Component({
            selector: 'app-quotes',
            template: __webpack_require__("../../../../../src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router, router_2.ActivatedRoute])
    ], QuotesComponent);
    return QuotesComponent;
}());
exports.QuotesComponent = QuotesComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map