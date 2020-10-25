import { Injectable } from '@angular/core';
import { Music } from '@app/models/music.model';
import { GenericService } from '@app/services/generic.service';
import { EMPTY } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { MusicQuery } from '../store/music/music.query';
import { MusicStore } from '../store/music/music.store';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(
    private musicStore: MusicStore,
    private musicQuery: MusicQuery,
    private genericService: GenericService
  ) { }

  /**
   * This method is used to check if the data in cache is valid then returns cached data,
   * if ttl which we have set is invalidate the cached data then it calls an API for getting new data
   */
  getMusicData() {
    return this.musicQuery.selectHasCache().pipe(
      switchMap(hasCache => {
         const apiCall = this.genericService.getMusics().pipe(
           tap(data => this.musicStore.set(data))
         );
         return hasCache ? EMPTY : apiCall;
      })
    );
  }

  /**
   * For Storing music data to store
   * The entity store bydefault provides cache so we do not need to set setHasCache like the custom store
   * @param musicDataSource
   */
  storeMusicData(musicDataSource: Music[]) {
    this.musicStore.set(musicDataSource);
  }

  /** It is used to set the active entity ID */
  setActiveMusicProfile(profileId: number) {
    this.musicStore.setActive(profileId);
  }

  /** It is used to remove the active entity ID */
  removeActiveMusicProfile() {
    this.musicStore.setActive(null);
  }

  /** For adding new music data to the Music store from Manage Teacher */
  addMusicData(musicData: Music) {
    this.musicStore.add(musicData);
  }

  /** Updating music teacher's data */
  updateMusicData(musicData: Music) {
    // For entity updation need to pass entity ID as well as data
    this.musicStore.update(musicData.id, musicData);
  }
}
