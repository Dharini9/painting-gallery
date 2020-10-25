import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { Paintings } from '../../models/paintings.model';
import { PaintingsQuery } from '@app/shared/store/paintings/paintings.query';
import { PaintingsService } from '../../shared/services/paintings.service';
import { ManageService } from '../../shared/services/manage.service';
import { defaultSelectedPaintingData, SelectedPaintingData } from '@app/shared/store/paintings/paintings.store';
import { EditOperations } from '@app/shared/enums/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})


export class PaintingsComponent implements OnInit {

  public isArtistSelected = false;
  public selectedPainting: SelectedPaintingData = defaultSelectedPaintingData;
  public paintings: Paintings[];

  constructor(
    private genericService: GenericService,
    private paintingsQuery: PaintingsQuery,
    private paintingsService: PaintingsService,
    private manageService: ManageService,
    private router: Router
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

    this.paintingsQuery.selectedPaintingDetail$.subscribe(selectedPaintingData => {
      this.selectedPainting = selectedPaintingData;
    });
  }

  removeSelectedCard() {
    this.paintingsService.removeSelectedCardData();
  }

  displayCard(data: Paintings) {
    this.paintingsService.storeSelectedPaintingData(data.id, data);
  }

  /** On click on edit button - need to redirect to manage tab and updating the data */
  updateSelectedCardDetails() {
    this.manageService.updateEditSectionDetails({
      operationName: EditOperations.editPainting,
      editDetailsID: this.selectedPainting.selectedPaintingID
    });
    this.router.navigate(['profile']);
  }

}
