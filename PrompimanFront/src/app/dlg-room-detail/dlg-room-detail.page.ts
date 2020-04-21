import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { RoomSelected } from 'src/models/reservation';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { CloudSyncService } from '../cloud-sync.service';

@Component({
  selector: 'app-dlg-room-detail',
  templateUrl: './dlg-room-detail.page.html',
  styleUrls: ['../app.component.scss'],
})
export class DlgRoomDetailPage implements OnInit {
  private forType: string;
  private roomNo: string;
  private dataRoom: RoomSelected;
  private fg: FormGroup;
  constructor(private fb: FormBuilder, private modalCtrl: ModalController, private navParams: NavParams, private cloud: CloudSyncService) {
    this.fg = this.fb.group({
      'haveBreakfast': true,
      'haveAddBreakfast': false,
      'addBreakfastCount': null,
      'haveExtraBed': false,
      'extraBedCount': null,
      'discount': null,
    });
    this.roomNo = null;
  }

  ngOnInit() {
    this.forType = this.navParams.data.for;
    this.dataRoom = this.navParams.data.room;
    console.log(this.forType);
    if (this.forType == 'all') {
      this.fg.patchValue(this.cloud.settingAllRoom);
    } else {
      this.fg.patchValue(this.dataRoom.setting);
      console.log(this.fg.value);

      this.roomNo = this.dataRoom.roomNo
    };
  }

  async handleSubmit() {
    if (this.forType == 'each') {
      this.dataRoom.setting = this.fg.value;
      await this.modalCtrl.dismiss(this.dataRoom as RoomSelected);
    } else {
      this.cloud.settingAllRoom = this.fg.value;
      await this.modalCtrl.dismiss('ok');
    };
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }
}
