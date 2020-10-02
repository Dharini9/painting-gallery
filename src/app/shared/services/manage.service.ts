import { Injectable } from '@angular/core';
import { EditOperationDetails, ManageStore } from '../store/manage/manage.store';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor(
    private manageStore: ManageStore
  ) { }

  updateEditSectionDetails(data: EditOperationDetails) {
    this.manageStore.update(state => {
      return {
        ...state,
        editOperation: data
      };
    });
  }
}
