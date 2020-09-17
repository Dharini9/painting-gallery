import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingsStore } from './paintings/paintings.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PaintingsStore
  ],
  exports: []
})
export class StoreModule { }
