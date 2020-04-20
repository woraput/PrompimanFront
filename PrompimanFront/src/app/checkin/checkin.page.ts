import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DlgRoomDetailPage } from '../dlg-room-detail/dlg-room-detail.page';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async roomSetting() {
    const modal = await this.modalController.create({
      component: DlgRoomDetailPage
    });
    return await modal.present();
  }


}
