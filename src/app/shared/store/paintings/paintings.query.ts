import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { StoreModule } from '../store.module';
import { PaintingsState, PaintingsStore } from './paintings.store';

@Injectable({
    providedIn: StoreModule
})
export class PaintingsQuery extends Query<PaintingsState> {

    paintingsDetails$ = this.select();
    selectedPaintingDetail$ = this.select('selectedPaintingsData');

    constructor(protected store: PaintingsStore) {
        super(store);
    }
}
