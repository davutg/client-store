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
export { LocalStorageStrategy };
//# sourceMappingURL=LocalStorageStrategy.js.map