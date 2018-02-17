import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

var StoreHandler = /** @class */ (function () {
    function StoreHandler(preferedStore) {
        this.preferedStore = preferedStore;
    }
    StoreHandler.prototype.setHandler = function (handler) {
        this.handler = handler;
    };
    StoreHandler.prototype.getStore = function () {
        if (this.preferedStore.checkEnbled()) {
            return this.preferedStore;
        }
        else {
            return this.handler.getStore();
        }
    };
    return StoreHandler;
}());

/*
Cookie: stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).
Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.
Cookie is being deleted when the  browser is closed by default.
*/
var CookieStrategy = /** @class */ (function () {
    function CookieStrategy(_cookies) {
        this._cookies = _cookies;
    }
    CookieStrategy.prototype.save = function (key, value) {
        this._cookies.set(key, value);
    };
    CookieStrategy.prototype.get = function (key) {
        return this._cookies.get(key);
    };
    CookieStrategy.prototype.checkEnbled = function () {
        return navigator.cookieEnabled;
    };
    return CookieStrategy;
}());

/*
localStorage: stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data
localStorage is stored in browser until you delete it and in considiration of sensitive data you should not use or use it carefuly.
*/
var LocalStorageStrategy = /** @class */ (function () {
    function LocalStorageStrategy() {
    }
    LocalStorageStrategy.prototype.save = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageStrategy.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageStrategy.prototype.checkEnbled = function () {
        return typeof (Storage) !== "undefined";
    };
    return LocalStorageStrategy;
}());

/*
sessionStorage: stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data
Session storage also deleted once you close the tab.
*/
var SessionStorageStrategy = /** @class */ (function () {
    function SessionStorageStrategy() {
    }
    SessionStorageStrategy.prototype.save = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    SessionStorageStrategy.prototype.get = function (key) {
        return sessionStorage.getItem(key);
    };
    SessionStorageStrategy.prototype.checkEnbled = function () {
        return typeof (Storage) !== "undefined";
    };
    return SessionStorageStrategy;
}());

var DefaultClientStore = /** @class */ (function () {
    function DefaultClientStore() {
    }
    DefaultClientStore.getDefaultStore = function () {
        var handler1, handler2, handler3;
        var cs = new CookieStrategy(new CookieService(document));
        var ss = new SessionStorageStrategy();
        var ls = new LocalStorageStrategy();
        handler1 = new StoreHandler(cs);
        handler2 = new StoreHandler(ss);
        handler3 = new StoreHandler(ls);
        handler1.setHandler(handler2);
        handler2.setHandler(handler3);
        return handler1.getStore();
    };
    DefaultClientStore.getSelectedStore = function (selection) {
        var handlers = new Array(0);
        var lastHandler;
        selection.forEach(function (s) {
            var h;
            switch (s) {
                case 1 /* Local */:
                    h = new LocalStorageStrategy();
                    break;
                case 2 /* Session */:
                    h = new SessionStorageStrategy();
                    break;
                case 0 /* Cookie */:
                    h = new CookieStrategy(new CookieService(document));
                    break;
                default:
                    h = new CookieStrategy(new CookieService(document));
                    break;
            }
            var hndlr = new StoreHandler(h);
            handlers.push(hndlr);
        });
        handlers.forEach(function (h) {
            if (lastHandler != null) {
                lastHandler.setHandler(h);
            }
            lastHandler = h;
        });
        return handlers[0].getStore();
    };
    return DefaultClientStore;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var ClientStore = /** @class */ (function () {
    function ClientStore() {
        this.strategy = DefaultClientStore.getDefaultStore();
    }
    ClientStore.prototype.changeClientStore = function (pSelection) {
        this.strategy = DefaultClientStore.getSelectedStore(pSelection);
    };
    ClientStore.prototype.save = function (key, value) {
        this.strategy.save(key, value);
    };
    ClientStore.prototype.get = function (key) {
        return this.strategy.get(key);
    };
    ClientStore = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ClientStore);
    return ClientStore;
}());

export { StoreHandler, CookieStrategy, LocalStorageStrategy, SessionStorageStrategy, DefaultClientStore, ClientStore };
