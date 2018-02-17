import { IClientStore } from "./IClientStore";
import { DefaultClientStore } from "./DefaultClientStore";
import { StoreOptions } from "./StoreOptions";
import { Injectable, Optional } from '@angular/core';

@Injectable()
export class ClientStore {
        private strategy: IClientStore;  

        constructor() {                                   
            this.strategy = DefaultClientStore.getDefaultStore();                                
        }

        public changeClientStore(pSelection:StoreOptions[]):void{
            this.strategy =DefaultClientStore.getSelectedStore(pSelection);
        }

        public save(key:string,value:string): void {
            this.strategy.save(key,value);
        }

        public get(key:string): string {
            return this.strategy.get(key);
        }

    }