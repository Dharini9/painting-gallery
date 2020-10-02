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

  storePaintingsData(paintingsDataSource: Paintings[]) {
    this.paintingsStore.setHasCache(true);
    this.paintingsStore.update(state => {
      return {
        ...state,
        paintingsData: paintingsDataSource
      };
    });
  }

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

  removeSelectedCardData() {
    this.paintingsStore.update(state => {
      return {
        ...state,
        selectedPaintingsData: defaultSelectedPaintingData
      };
    });
  }
}
