import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { Music } from '../../models/music.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ViewMusicComponent } from './view-music/view-music.component';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  public musics: Music[];
  displayedColumns: string[] = [ 'instrumentImage', 'instrumentName', 'teacherName', 'cost', 'details', 'action'];
  dataSource;
  user;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private genericService: GenericService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.genericService.getMusics().subscribe((data: Music[]) => {
      this.musics = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  viewMusic(music) {
    const dialogRef = this.dialog.open(ViewMusicComponent, {
      data: music
    });
  }

}
