import { CookieService } from "ngx-cookie-service";
import { IClientStore } from "./IClientStore";
/*
Cookie: stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).
Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.
Cookie is being deleted when the  browser is closed by default.
*/  
export class CookieStrategy implements IClientStore {
        constructor(private _cookies:CookieService) {}

        save(key: string,value:string): void {
            this._cookies.set(key,value); 
        }
        get(key: string): string {
           return this._cookies.get(key);
        }     
        
        checkEnbled(): boolean {
           return navigator.cookieEnabled;
        }
    }