import { Store, StoreConfig } from '@datorama/akita';

export interface PaintingsState {
    paintingsData: PaintingsDataSource[];
    selectedPaintingsData: {
        selectedPaintingID: number;
        selectedPaintingData: PaintingsDataSource;
    }
}

export interface PaintingsDataSource {
    id: number;
    artistName: string;
    artistImage: string;
    paintingCost: number;
    name: string;
    image: string;
}

export const defaultPaintingDataSource = {
    id: 0,
    artistName: '',
    artistImage: '',
    paintingCost: 0,
    name: '',
    image: ''
};

export function createInitialState(): PaintingsState {
    return {
        paintingsData: [
            defaultPaintingDataSource
        ],
        selectedPaintingsData: {
            selectedPaintingID: 0,
            selectedPaintingData: defaultPaintingDataSource
        }
    };
}

@StoreConfig({ name: 'paintings' })
export class PaintingsStore extends Store<PaintingsState> {
    constructor() {
        super(createInitialState());
    }
}
