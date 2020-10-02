import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { StoreModule } from '../store.module';
import { ManageState, ManageStore } from './manage.store';

@Injectable({
    providedIn: StoreModule
})
export class ManageQuery extends Query<ManageState> {

    manageDetails$ = this.select();
    editOperation$ = this.select('editOperation');

    constructor(protected store: ManageStore) {
        super(store);
    }
}
