import { IClientStore } from "./IClientStore";

/*
localStorage: stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data 
localStorage is stored in browser until you delete it and in considiration of sensitive data you should not use or use it carefuly.
*/

export class LocalStorageStrategy implements IClientStore {
        constructor() {}

        save(key: string,value:string): void {
            localStorage.setItem(key,value); 
        }
        get(key: string): string {
            return localStorage.getItem(key);
        }    
        checkEnbled(): boolean {
            return typeof(Storage) !== "undefined";
         }     
    }   