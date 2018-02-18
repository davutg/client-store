import { CookieService } from "ngx-cookie-service";
import { StoreHandler } from "./StoreHandler";
import { CookieStrategy } from "./CookieStrategy";
import { SessionStorageStrategy } from "./SessionStorageStrategy";
import { LocalStorageStrategy } from "./LocalStorageStrategy";
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
export { DefaultClientStore };
//# sourceMappingURL=DefaultClientStore.js.map