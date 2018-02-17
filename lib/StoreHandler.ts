import { IClientStore } from "./IClientStore";

export class StoreHandler{
    private handler:StoreHandler ;

    constructor(private preferedStore:IClientStore)
    {
       
    }

    public setHandler(handler:StoreHandler)
    {
        this.handler=handler;
    }

    public getStore():IClientStore
    {
        if(this.preferedStore.checkEnbled())
        {
            return this.preferedStore;
        }else
        {
            return this.handler.getStore();
        }
    }
}