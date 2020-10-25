import { Injectable } from '@angular/core';
import { Paintings } from '@app/models/paintings.model';
import { defaultSelectedPaintingData, PaintingsStore } from '../store/paintings/paintings.store';

@Injectable({
  providedIn: 'root'
})
export class PaintingsService {

  constructor(
    private paintingsStore: PaintingsStore
  ) { }

  /** For storing paitings data */
  storePaintingsData(paintingsDataSource: Paintings[]) {
    // If the store is custom and we need to cache the data - need to setHasCache true
    this.paintingsStore.setHasCache(true);
    this.paintingsStore.update(state => {
      return {
        ...state,
        paintingsData: paintingsDataSource
      };
    });
  }

  /** For storing selected paitings data */
  storeSelectedPaintingData(selectedPaintingID: number, selectedPaintingData: Paintings) {
    this.paintingsStore.update(state => {
      return {
        ...state,
        selectedPaintingsData: {
          selectedPaintingID,
          selectedPaintingData
        }
      };
    });
  }

  /** For removing selected paitings data */
  removeSelectedCardData() {
    this.paintingsStore.update(state => {
      return {
        ...state,
        selectedPaintingsData: defaultSelectedPaintingData
      };
    });
  }
}
