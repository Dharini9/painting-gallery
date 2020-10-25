import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditOperations } from '@app/shared/enums/config';
import { ManageService } from '@app/shared/services/manage.service';
import { MusicService } from '@app/shared/services/music.service';
import { defaultEditOperationDetails } from '@app/shared/store/manage/manage.store';
import { ManageQuery } from '../../shared/store/manage/manage.query';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  id: number;
  operationName = '';
  editOperations = EditOperations;

  constructor(
    private manageQuery: ManageQuery,
    private manageService: ManageService,
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.manageQuery.editOperation$.subscribe(editOperation => {
      this.id = editOperation.editDetailsID;
      this.operationName = editOperation.operationName;
    });
  }

  /** For setting default details of Edit and removing active entity */
  setDefaultEditDetails() {
    this.manageService.updateEditSectionDetails(defaultEditOperationDetails);
    this.musicService.removeActiveMusicProfile();
  }

  ngOnDestroy() {
    this.setDefaultEditDetails();
  }

}
