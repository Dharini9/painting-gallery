import { Component, OnInit, ViewChild } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { Music } from '../../models/music.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ViewMusicComponent } from './view-music/view-music.component';
import { MusicService } from '../../shared/services/music.service';
import { MusicQuery } from '../../shared/store/music/music.query';
import { defaultMusicDataSource } from '@app/shared/store/music/music.store';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['instrumentImage', 'instrumentName', 'teacherName', 'cost', 'details', 'action'];
  dataSource;
  musicData: Music[] = [defaultMusicDataSource];
  user;

  constructor(
    private genericService: GenericService,
    private musicService: MusicService,
    private musicQuery: MusicQuery,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.musicService.getMusicData().subscribe();
    if (!this.musicQuery.hasEntity()) {
    }

    this.musicQuery.musicDetails$.subscribe(musicData => {
      this.musicData = musicData;
      this.dataSource = new MatTableDataSource(musicData);
      this.dataSource.sort = this.sort;
    });
  }

  viewMusic(music: Music) {
    // For setting active Entity
    this.musicService.setActiveMusicProfile(music.id);
    const dialogRef = this.dialog.open(ViewMusicComponent, {
      data: music
    });
  }

}

