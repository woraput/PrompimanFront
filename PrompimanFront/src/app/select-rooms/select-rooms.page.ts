import { CloudSyncService } from './../cloud-sync.service';
import { Component, OnInit } from '@angular/core';
import { AllRooms, RoomsSelect, RoomsNotAvailable, Floor } from 'src/models/rooms';
import { NavController, ModalController } from '@ionic/angular';
import { DlgSelectRoomsDetailPage } from '../dlg-select-rooms-detail/dlg-select-rooms-detail.page';
import { DateRequest } from 'src/models/reservation';

@Component({
  selector: 'app-select-rooms',
  templateUrl: './select-rooms.page.html',
  styleUrls: ['./select-rooms.page.scss'],
})
export class SelectRoomsPage implements OnInit {
  public rooms = AllRooms.sort((a, b) => a.localeCompare(b));
  public roomsSelect = RoomsSelect;
  private floors = Floor;
  private color: "green";
  private timePeriod: DateRequest;
  constructor(private api: CloudSyncService, private navCtrl: NavController, private modalController: ModalController) {
  }


  ngOnInit() {
    // this.timePeriod.CheckInDate = Date.now();
    // this.timePeriod.CheckInDate = Date.now();
    // this.api.getAllRooms(this.checkInDate, this.checkOutDate).subscribe(data => {
    //   if (data !== null) {
    //     console.log(data);
    //   }
    // })
  }


  async detailRooms() {
    const modal = await this.modalController.create({
      component: DlgSelectRoomsDetailPage,
    });
    return await modal.present();
  }


  selectRoom(room: string) {
    if (this.roomsSelect.every(r => r != room)) {
      this.roomsSelect.push(room);
      this.roomsSelect.sort((a, b) => (Number)(a) - (Number)(b));
    } else {
      this.deleteRoom(room);
    }
  }

  deleteRoom(room: string) {
    let index = this.roomsSelect.indexOf(room);
    this.roomsSelect.splice(index, 1);
  }

  selected(room: string): boolean {
    return RoomsSelect.some(r => r == room);
  }

  notAvailable(room: string): boolean {
    return RoomsNotAvailable.some(r => r == room);
  }

  confirm() {
    this.navCtrl.pop();
  }
}
