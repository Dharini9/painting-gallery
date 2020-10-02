import { Store, StoreConfig } from '@datorama/akita';

export interface PaintingsState {
    paintingsData: PaintingsDataSource[];
    selectedPaintingsData: SelectedPaintingData;
}

export interface SelectedPaintingData {
    selectedPaintingID: number;
    selectedPaintingData: PaintingsDataSource;
}

export interface PaintingsDataSource {
    id: number;
    artistName: string;
    artistImage: string;
    paintingCost: number;
    name: string;
    image: string;
}

export const defaultPaintingDataSource: PaintingsDataSource = {
    id: 0,
    artistName: '',
    artistImage: '',
    paintingCost: 0,
    name: '',
    image: ''
};

export const defaultSelectedPaintingData: SelectedPaintingData = {
    selectedPaintingID: 0,
    selectedPaintingData: defaultPaintingDataSource
};

export function createInitialState(): PaintingsState {
    return {
        paintingsData: [
            defaultPaintingDataSource
        ],
        selectedPaintingsData: defaultSelectedPaintingData
    };
}

@StoreConfig({ name: 'paintings', resettable: true })
export class PaintingsStore extends Store<PaintingsState> {
    constructor() {
        super(createInitialState());
    }
}
