import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericService } from '../../../services/generic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  @Input() artistId: number;
  @Input() loadProfile: boolean;

  artistFormGroup: FormGroup;

  constructor(
    private genericService: GenericService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.artistFormGroup = this.formBuilder.group({
      id: [],
      artistName: ['', Validators.required],
      artistImage: ['', Validators.required],
      paintingCost: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required]
    });
    if (this.artistId && this.artistId > 0 && this.loadProfile) {
      this.getArtist();
    }
  }

  onFormSubmit() {
    if (this.artistFormGroup.valid) {
      if (!this.artistId) {
        this.addArtist();
      } else {
        this.updateArtist();
      }
    }
  }

  getArtist() {
    this.genericService.getPainting(this.artistId).subscribe(data => {
      this.artistFormGroup.setValue(data);
    });
  }

  addArtist() {
    this.genericService.addPainting(this.artistFormGroup.value).subscribe(data => {
      if (data) {
        this.router.navigate(['painting']);
      }
    });
  }

  updateArtist() {
    this.genericService.updatePainting(this.artistFormGroup.value).subscribe(data => {
      if (data) {
        this.router.navigate(['painting']);
      }
    });
  }

}
