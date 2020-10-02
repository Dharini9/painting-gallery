import { Component, OnInit, Input, Inject } from '@angular/core';
import { Music } from '../../../models/music.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageService } from '@app/shared/services/manage.service';
import { EditOperations } from '@app/shared/enums/config';
import { Router } from '@angular/router';
import { MusicService } from '@app/shared/services/music.service';

@Component({
  selector: 'app-view-music',
  templateUrl: './view-music.component.html',
  styleUrls: ['./view-music.component.css']
})
export class ViewMusicComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewMusicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Music,
    private manageService: ManageService,
    private router: Router,
    private musicService: MusicService
  ) { }

  ngOnInit(): void { }

  updateArtistDetail(ID: number) {
    this.manageService.updateEditSectionDetails({
      operationName: EditOperations.editMusic,
      editDetailsID: ID
    });
    this.router.navigate(['profile']);
  }

  closeTheProfile() {
    this.musicService.removeActiveMusicProfile();
  }

}
