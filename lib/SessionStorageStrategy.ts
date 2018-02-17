import { IClientStore } from "./IClientStore";

/*
sessionStorage: stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data 
Session storage also deleted once you close the tab.
*/
export class SessionStorageStrategy implements IClientStore {
    constructor() { }        

    save(key: string,value:string): void {
        sessionStorage.setItem(key,value); 
    }
    get(key: string): string {
        return sessionStorage.getItem(key);
    }     
    checkEnbled(): boolean {
        return typeof(Storage) !== "undefined";
     }   
}