import { CookieService } from "ngx-cookie-service";
import { IClientStore } from "./IClientStore";
export declare class CookieStrategy implements IClientStore {
    private _cookies;
    constructor(_cookies: CookieService);
    save(key: string, value: string): void;
    get(key: string): string;
    checkEnbled(): boolean;
}
