import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { Paintings } from '../../models/paintings.model';
import { PaintingsQuery } from '@app/shared/store/paintings/paintings.query';
import { PaintingsService } from '../../shared/services/paintings.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})


export class PaintingsComponent implements OnInit {

  public isArtistSelected = false;
  public selectedPainting;
  public paintings: Paintings[];

  constructor(
    private genericService: GenericService,
    private paintingsQuery: PaintingsQuery,
    private paintingsService: PaintingsService
  ) { }

  ngOnInit(): void {
    this.genericService.getPaintings().subscribe(data => {
      this.paintingsService.storePaintingsData(data);
    });

    this.paintingsQuery.paintingsDetails$.subscribe(state => {
      if (state && state.paintingsData && state.paintingsData.length) {
        this.paintings = state.paintingsData;
      }
    });

    this.paintingsQuery.paintingsDetails$.subscribe(state => {
      if (state && state.selectedPaintingsData && state.selectedPaintingsData.selectedPaintingID) {
        this.isArtistSelected = true;
        this.selectedPainting = state.selectedPaintingsData.selectedPaintingData;
      }
    });
  }

  displayCard(data: Paintings) {
    this.paintingsService.storeSelectedPaintingData(data.id, data);
  }

}
