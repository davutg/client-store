import { IClientStore } from "./IClientStore";
import { StoreOptions } from "./StoreOptions";
export declare class DefaultClientStore {
    static getDefaultStore(): IClientStore;
    static getSelectedStore(selection: StoreOptions[]): IClientStore;
}
