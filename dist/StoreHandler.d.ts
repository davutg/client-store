import { IClientStore } from "./IClientStore";
export declare class StoreHandler {
    private preferedStore;
    private handler;
    constructor(preferedStore: IClientStore);
    setHandler(handler: StoreHandler): void;
    getStore(): IClientStore;
}
