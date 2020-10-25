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

/** This is entity store
 * We can reset the state setting property resettable
 * We can set the time to live for cache - Here I have set time 15 minutes,
 * after 15 minutes it will call API and refresh the storage with new data
 */
@StoreConfig({ name: 'music', cache: { ttl: 900000 }, resettable: true })
export class MusicStore extends EntityStore<MusicState> {
    constructor() {
        super();
    }
}
