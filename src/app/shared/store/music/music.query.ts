import { Injectable } from '@angular/core';
import { Order, Query, QueryConfig, QueryEntity } from '@datorama/akita';
import { StoreModule } from '../store.module';
import { MusicState, MusicStore } from './music.store';

@Injectable({
    providedIn: StoreModule
})
/** Query config provides sorting of the data */
@QueryConfig({
    sortBy: 'id',
    sortByOrder: Order.ASC
})
export class MusicQuery extends QueryEntity<MusicState> {

    musicDetails$ = this.selectAll();

    constructor(protected store: MusicStore) {
        super(store);
    }

    /**
     * It returns single entity object
     * @param ID Entitiy ID
     * getEntity is the method of QueryEntity
     */
    musicDataByID(ID: number) {
        return this.getEntity(ID);
    }
}
