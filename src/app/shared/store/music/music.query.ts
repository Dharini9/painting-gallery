import { Injectable } from '@angular/core';
import { Order, Query, QueryConfig, QueryEntity } from '@datorama/akita';
import { StoreModule } from '../store.module';
import { MusicState, MusicStore } from './music.store';

@Injectable({
    providedIn: StoreModule
})
@QueryConfig({
    sortBy: 'id',
    sortByOrder: Order.ASC
})
export class MusicQuery extends QueryEntity<MusicState> {

    musicDetails$ = this.selectAll();

    constructor(protected store: MusicStore) {
        super(store);
    }

    musicDataByID(ID: number) {
        return this.getEntity(ID);
    }
}
