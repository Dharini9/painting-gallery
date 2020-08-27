import { Component, OnInit, Input, Inject } from '@angular/core';
import { Music } from '../../../models/music.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-music',
  templateUrl: './view-music.component.html',
  styleUrls: ['./view-music.component.css']
})
export class ViewMusicComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewMusicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Music) { }

  ngOnInit(): void {

  }

}
