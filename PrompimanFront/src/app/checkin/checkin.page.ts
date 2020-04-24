import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DlgRoomDetailPage } from '../dlg-room-detail/dlg-room-detail.page';
import { RoomSelected } from 'src/models/reservation';
import { CloudSyncService } from '../cloud-sync.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {
  private roomsSelect: RoomSelected[] = [];

  constructor(private modalController: ModalController, private cloud: CloudSyncService) { }

  ngOnInit() {
  }

  async roomSetting() {
    const modal = await this.modalController.create({
      component: DlgRoomDetailPage,
      componentProps: { room: this.roomsSelect, for: 'all' },
      cssClass: 'dialog-modal-4-setting-room',
    });
    modal.onDidDismiss().then((dataReturned) => {
      console.log("ggg");
      console.log(dataReturned);
      if (dataReturned !== null) {
        // let dataRet = dataReturned.data;
        console.log(this.cloud.settingAllRoom);

        this.cloud.lstRoomsSelect.forEach(r => r.setting = this.cloud.settingAllRoom);
        // let indexDataWillChange = this.roomsSelect.findIndex(r => r.roomNo == dataRet.roomNo);
        // this.roomsSelect[indexDataWillChange] = dataRet;
        console.log(this.cloud.lstRoomsSelect);
      }
    });
    return await modal.present();
  }
}
