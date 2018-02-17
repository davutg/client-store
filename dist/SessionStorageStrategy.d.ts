import { IClientStore } from "./IClientStore";
export declare class SessionStorageStrategy implements IClientStore {
    constructor();
    save(key: string, value: string): void;
    get(key: string): string;
    checkEnbled(): boolean;
}
