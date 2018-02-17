import { StoreOptions } from "./StoreOptions";
export declare class ClientStore {
    private strategy;
    constructor();
    changeClientStore(pSelection: StoreOptions[]): void;
    save(key: string, value: string): void;
    get(key: string): string;
}
