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
export { StoreHandler };
//# sourceMappingURL=StoreHandler.js.map