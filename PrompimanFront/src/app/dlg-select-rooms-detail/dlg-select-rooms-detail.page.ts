import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-dlg-select-rooms-detail',
  templateUrl: './dlg-select-rooms-detail.page.html',
  styleUrls: ['./dlg-select-rooms-detail.page.scss'],
})
export class DlgSelectRoomsDetailPage implements OnInit {

  constructor(private modalCtrl: ModalController, private navParams: NavParams) { }

  ngOnInit() {
  }


  async closeModal() {
    await this.modalCtrl.dismiss();
  }

}
