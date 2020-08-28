import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericService } from '../../../services/generic.service';
import { Router } from '@angular/router';

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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.teacherFormGroup = this.formBuilder.group({
      id: [],
      teacherName: ['', Validators.required],
      cost: ['', Validators.required],
      details: ['', Validators.required],
      experience: ['', Validators.required],
      instrumentName: ['', Validators.required],
      instrumentImage: ['', Validators.required]
    });
    if (this.musicId && this.musicId > 0 && this.loadProfile) {
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
    this.genericService.getMusic(this.musicId).subscribe(data => {
      if (data) {
        this.teacherFormGroup.setValue(data);
      }
    });
  }

  addMusic() {
    this.genericService.addMusic(this.teacherFormGroup.value).subscribe(data => {
      if (data) {
        this.router.navigate(['music']);
      }
    });
  }

  updateMusic() {
    this.genericService.updateMusic(this.teacherFormGroup.value).subscribe(data => {
      if (data) {
        this.router.navigate(['music']);
      }
    });
  }

}
