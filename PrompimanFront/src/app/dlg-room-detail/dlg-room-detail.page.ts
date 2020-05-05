import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { RoomSelected } from 'src/models/checkin';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CloudSyncService } from '../cloud-sync.service';

@Component({
  selector: 'app-dlg-room-detail',
  templateUrl: './dlg-room-detail.page.html',
  styleUrls: ['../app.component.scss'],
})
export class DlgRoomDetailPage implements OnInit {
  private forType: string;
  private roomNo: string;
  private dataRoom: RoomSelected[] = [];
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
    if (this.forType == 'all') {
      this.fg.patchValue(this.cloud.settingAllRoom);
      this.dataRoom = this.navParams.data.room as RoomSelected[];
      console.log(this.dataRoom);
    } else {
      this.dataRoom.push(this.navParams.data.room);
      console.log(this.dataRoom);
      this.fg.patchValue(this.dataRoom[0].setting);

      this.roomNo = this.dataRoom[0].roomNo;
    };
  }

  setColor(contName: string) {
    if (this.forType == 'all') {
      switch (contName) {
        case "haveAddBreakfast":
          if (this.dataRoom.some(r => r.setting.haveAddBreakfast == true)) {
            return "gray";
          }
        case "haveExtraBed":
          if (this.dataRoom.some(r => r.setting.haveExtraBed == true)) {
            return "gray";
          }
        default:
          return "primary";
      }
    }
    return "primary";
  }

  private checkValidData() {
    const haveAddBreakfast = this.fg.get('haveAddBreakfast').value;
    const addBreakfastCount = this.fg.get('addBreakfastCount').value;
    const haveExtraBed = this.fg.get('haveExtraBed').value;
    const extraBedCount = this.fg.get('extraBedCount').value;

    console.log("enter validate", haveAddBreakfast, addBreakfastCount, haveExtraBed, extraBedCount);

    if (!haveAddBreakfast && (addBreakfastCount != 0 || addBreakfastCount == null)) {
      this.fg.get('addBreakfastCount').patchValue(0);
    }
    if (haveAddBreakfast && (addBreakfastCount == 0 || addBreakfastCount == null)) {
      this.fg.get('haveAddBreakfast').patchValue(false);
    }
    if (!haveExtraBed && (extraBedCount != 0 || extraBedCount == null)) {
      this.fg.get('extraBedCount').patchValue(0);
    }
    if (haveExtraBed && (extraBedCount == 0 || extraBedCount == null)) {
      this.fg.get('haveExtraBed').patchValue(false);
    }
  }

  async handleSubmit() {
    this.checkValidData();
    if (this.forType == 'each') {
      this.dataRoom[0].setting = this.fg.value;
      await this.modalCtrl.dismiss(this.dataRoom[0] as RoomSelected);
    } else {
      this.cloud.settingAllRoom = this.fg.value;
      await this.modalCtrl.dismiss('ok');
    };
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }
}
