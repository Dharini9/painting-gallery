import { Store, StoreConfig } from '@datorama/akita';
import { from } from 'rxjs';
import { EditOperations } from '../../enums/config';

export interface ManageState {
    editOperation: EditOperationDetails;
}

export interface EditOperationDetails {
    operationName: string;
    editDetailsID: number;
}

export const defaultEditOperationDetails: EditOperationDetails = {
    operationName: '',
    editDetailsID: 0
};

export function createInitialManageState(): ManageState {
    return {
        editOperation: defaultEditOperationDetails
    };
}

@StoreConfig({ name: 'manage' })
export class ManageStore extends Store<ManageState> {
    constructor() {
        super(createInitialManageState());
    }
}
