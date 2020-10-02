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

  getMusicData() {
    return this.musicQuery.selectHasCache().pipe(
      switchMap(hasCache => {
         const apiCall = this.genericService.getMusics().pipe(
           tap(data => this.musicStore.set(data))
         );
         return hasCache ? EMPTY : apiCall;
      })
    );
    // const getMusicDataRequest = this.genericService.getMusics().pipe(
    //   tap(data => {
    //     this.storeMusicData(data);
    //   })
    // );
    // return this.musicQuery.getHasCache() ? EMPTY : getMusicDataRequest; // request
  }

  storeMusicData(musicDataSource: Music[]) {
    this.musicStore.set(musicDataSource);
  }

  setActiveMusicProfile(profileId: number) {
    this.musicStore.setActive(profileId);
  }

  removeActiveMusicProfile() {
    this.musicStore.setActive(null);
  }

  addMusicData(musicData: Music) {
    this.musicStore.add(musicData, { prepend: true });
  }

  updateMusicData(musicData: Music) {
    this.musicStore.update(musicData.id, musicData);
  }
}
