import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dlg-room-detail',
  templateUrl: './dlg-room-detail.page.html',
  styleUrls: ['../app.component.scss'],
})
export class DlgRoomDetailPage implements OnInit {

  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }
}
