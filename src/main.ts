import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PaintingsState, PaintingsStore } from '@app/shared/store/paintings/paintings.store';
import { persistState } from '@datorama/akita';
import { PersistStateSelectFn, PersistStateStorage } from '@datorama/akita/lib/persistState';
import 'hammerjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const storage = persistState({
  include: [
    'paintings.selectedPaintingsData',
    'music'
  ]
});
const providers = [{
  provide: 'persistStorage',
  useValue: storage
}];

if (environment.production) {
  // enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
