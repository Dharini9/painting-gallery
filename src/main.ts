import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { persistState } from '@datorama/akita';
import 'hammerjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import SimpleCrypto from 'simple-crypto-js';

const secretKey = SimpleCrypto.generateRandom();
const simpleCrypto = new SimpleCrypto(secretKey);

// For configure Persist state
const storage = persistState({
  // It includes which part of state we need to sync with local storage
  include: [
    'paintings.selectedPaintingsData',
    'music'
  ],
  preStorageUpdate(storeName, state) {
    // This function is called before storing data into local storgage.
    if (simpleCrypto) {
      return simpleCrypto.encrypt(state);
    }
    return state;
  },
  preStoreUpdate(storeName, state) {
    // This function is called before storing data in in-memory storage.
    // E.g, what you see in Redux tab in browser.
    if (simpleCrypto) {
      return simpleCrypto.decrypt(state);
    }
    return state;
  }
});

const providers = [{
  provide: 'persistStorage',
  useValue: storage
}];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
