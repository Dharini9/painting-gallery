import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingsStore } from './paintings/paintings.store';
import { MusicStore } from './music/music.store';
import { ManageStore } from './manage/manage.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PaintingsStore,
    MusicStore,
    ManageStore
  ],
  exports: []
})
export class StoreModule { }
