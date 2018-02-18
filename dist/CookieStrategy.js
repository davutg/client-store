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
export { CookieStrategy };
//# sourceMappingURL=CookieStrategy.js.map