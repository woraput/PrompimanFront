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
        // let lstRoom = this.fg.get('rooms').value as RoomSelected[];
        // lstRoom.forEach(r => r.setting = this.cloud.settingAllRoom);
        // console.log(this.cloud.lstRoomsSelect);
        // this.fg.get('rooms').patchValue(lstRoom);

      }
    });
    return await modal.present();
  }
}
