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
export { SessionStorageStrategy };
//# sourceMappingURL=SessionStorageStrategy.js.map