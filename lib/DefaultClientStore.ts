
import { CookieService } from "ngx-cookie-service";
import { IClientStore } from "./IClientStore";
import { StoreHandler } from "./StoreHandler";
import { CookieStrategy } from "./CookieStrategy";
import { SessionStorageStrategy } from "./SessionStorageStrategy";
import { LocalStorageStrategy } from "./LocalStorageStrategy";
import { StoreOptions } from "./StoreOptions";

export class DefaultClientStore
{
    public static getDefaultStore():IClientStore
    {
        var handler1,handler2,handler3:StoreHandler;
        var cs:CookieStrategy=new CookieStrategy(new CookieService(document));
        var ss:SessionStorageStrategy=new SessionStorageStrategy();
        var ls:LocalStorageStrategy=new LocalStorageStrategy();
        handler1=new StoreHandler(cs);
        handler2=new StoreHandler(ss);
        handler3=new StoreHandler(ls);
        handler1.setHandler(handler2);
        handler2.setHandler(handler3);
        return handler1.getStore();
    }

    public static getSelectedStore(selection:StoreOptions[]):IClientStore
    {
        var handlers= new Array<StoreHandler>(0);
        var lastHandler:StoreHandler;
        selection.forEach(s => {
               var h:IClientStore;
               switch (s) {
                   case StoreOptions.Local:
                       h=new LocalStorageStrategy();
                       break;
                   case StoreOptions.Session:
                       h=new SessionStorageStrategy();
                       break;
                   case StoreOptions.Cookie:
                       h=new CookieStrategy(new CookieService(document));
                       break;
                   default:
                       h=new CookieStrategy(new CookieService(document));
                       break;
               }
               var hndlr = new StoreHandler(h);
               handlers.push(hndlr);
        });
       
        handlers.forEach(h => {
            if(lastHandler!=null)
            {
                lastHandler.setHandler(h);
            }
            lastHandler=h;
        });

        return handlers[0].getStore();
    }

}