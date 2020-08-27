import { Component, OnInit } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { Paintings } from '../../models/paintings.model';

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
    private genericService: GenericService
  ) { }

  ngOnInit(): void {

    this.genericService.getPaintings().subscribe(data => {
      this.paintings = data;
    });
  }


  displayCard(data) {
    this.isArtistSelected = true;
    this.selectedPainting = data;
  }

}
