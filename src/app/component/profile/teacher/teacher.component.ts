import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericService } from '../../../services/generic.service';
import { Router } from '@angular/router';
import { MusicQuery } from '@app/shared/store/music/music.query';
import { MusicService } from '@app/shared/services/music.service';
import { Music } from '@app/models/music.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() musicId: number;
  @Input() loadProfile: boolean;

  teacherFormGroup: FormGroup;

  constructor(
    private genericService: GenericService,
    private router: Router,
    private formBuilder: FormBuilder,
    private musicQuery: MusicQuery,
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.teacherFormGroup = this.formBuilder.group({
      id: [],
      teacherName: ['', Validators.required],
      cost: ['', Validators.required],
      details: ['', Validators.required],
      experience: ['', Validators.required],
      instrumentName: ['', Validators.required],
      instrumentImage: ['https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg']
    });
    if (this.musicQuery.hasActive()) {
      this.getMusic();
    }
  }

  onFormSubmit() {
    if (this.teacherFormGroup.valid) {
      if (!this.musicId) {
        this.addMusic();
      } else {
        this.updateMusic();
      }
    }
  }

  getMusic() {
    const musicData = this.musicQuery.musicDataByID(this.musicQuery.getActiveId());
    if (musicData) {
      this.teacherFormGroup.setValue(musicData);
    }
  }

  addMusic() {
    // this.genericService.addMusic(this.teacherFormGroup.value).subscribe(data => {
    //   if (data) {
    //     this.backToMusic();
    //   }
    // });
    const teacherData: Music = this.teacherFormGroup.value;
    const newEntityID = this.musicQuery.getCount() + 1;
    teacherData.id = newEntityID;
    this.musicService.addMusicData(teacherData);
    this.backToMusic();
  }

  updateMusic() {
    // this.genericService.updateMusic(this.teacherFormGroup.value).subscribe(data => {
    //   if (data) {
    //     this.backToMusic();
    //   }
    // });
    this.musicService.updateMusicData(this.teacherFormGroup.value);
    this.backToMusic();
  }

  cancelMusicUpdation() {
    this.musicService.removeActiveMusicProfile();
    this.backToMusic();
  }

  backToMusic() {
    this.router.navigate(['music']);
  }

}
