# ClientStore is a library provides meaningful use of client side storages.
You simply inject a ClientStore object in your constructor and store your data in an available client store
Project initailly checks for Cookie availability then tries SessionStorage and LocalStorage options respectively. We can also give preferred storage options after injection. 

## Installation
  `npm install clientstore`
  
## Sample usecase 

    import { ClientStore, StoreOptions } from 'clientstore';
    
    private storeSelection: StoreOptions[] = new Array<StoreOptions>(StoreOptions.Cookie, StoreOptions.Local);

    @Injectable()
    export class SomeService {
      constructor(private _clientContext: ClientStore) {
        this._clientContext.changeClientStore(this.storeSelection);  //optional
        this.loadFromCache();

        loadFromCache() {
          var cartCache = this._clientContext.get('shoppingList');
          if (cartCache != null && cartCache != "") {
            var cachedItems = JSON.parse(cartCache) as CartItemModel[];
            //this.loadCart(cachedItems);
          }
        }

        addToCart(pm: ProductModel) {
          this.items.push(cartItem);
          this.updateCache();
        }

        updateCache() {
          this._clientContext.save('shoppingList', JSON.stringify(this.items));
        }

      }
