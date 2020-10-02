import { EntityState, EntityStore, Store, StoreConfig } from '@datorama/akita';

export interface MusicState extends EntityState<MusicDataSource, number> { }

export interface MusicDataSource {
    id: number;
    instrumentName: string;
    teacherName: string;
    cost: number;
    experience: number;
    details: string;
    instrumentImage: string;
}

export const defaultMusicDataSource: MusicDataSource = {
    id: 0,
    instrumentName: '',
    teacherName: '',
    cost: 0,
    experience: 0,
    details: '',
    instrumentImage: ''
};

export function createInitialMusicState(): MusicState {
    return {
        musicData: []
    };
}

@StoreConfig({ name: 'music', cache: { ttl: 15000 }, resettable: true })
export class MusicStore extends EntityStore<MusicState> {
    constructor() {
        super();
    }
}
