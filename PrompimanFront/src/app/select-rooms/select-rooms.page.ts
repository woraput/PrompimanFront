import { async } from '@angular/core/testing';
import { CloudSyncService } from './../cloud-sync.service';
import { Component, OnInit } from '@angular/core';
import { Floor } from 'src/models/rooms';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { DlgSelectRoomsDetailPage } from '../dlg-select-rooms-detail/dlg-select-rooms-detail.page';
import { DateRequest, Room, RoomSelected, SettingRoom } from 'src/models/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { DlgRoomDetailPage } from '../dlg-room-detail/dlg-room-detail.page';

@Component({
  selector: 'app-select-rooms',
  templateUrl: './select-rooms.page.html',
  styleUrls: ['./select-rooms.page.scss'],
})
export class SelectRoomsPage implements OnInit {
  private roomsSelect: RoomSelected[];
  private floors = Floor;
  private roomsStatic: Room[] = [];
  private roomsByFilter: Room[] = [];
  private displayDateIn: Date;
  private displayDateOut: Date;
  private roomType: number;
  private roomParam: RoomSelected[];
  private bedType: number;
  constructor(private modalCtrl: ModalController, private api: CloudSyncService, private navParams: NavParams, private navCtrl: NavController, private activatedRoute: ActivatedRoute, private route: Router) {
    this.roomType = 0;
    this.bedType = 0;
  }

  ngOnInit() {
    this.checkNewOrEdit();
    this.displayDateIn = this.api.timePeriod.checkInDate;
    this.displayDateOut = this.api.timePeriod.checkOutDate;
    this.api.getAllRooms(this.api.timePeriod).subscribe(data => {
      if (data !== null) {
        this.roomsStatic = data;
        this.roomsByFilter = this.roomsStatic;
        this.api.roomReserve
        // let newLstNoRoom = this.roomsSelect.map(r => r.roomNo);
        for (const i of this.api.roomReserve) {
          this.roomsByFilter.find(r => r._id == i).status = "ว่าง";
        }
      }
    });
  }

  private checkNewOrEdit() {
    this.roomParam = this.navParams.data.rooms;
    if ((this.roomParam && this.roomParam.length !== 0) || this.roomParam !== null) {
      this.roomsSelect = this.navParams.data.rooms;
    }
    else {
      this.roomsSelect = [];
    }

  }

  async settingRoom(room: RoomSelected) {
    const modal = await this.modalCtrl.create({
      component: DlgRoomDetailPage,
      componentProps: { room: room, for: 'each' },
      cssClass: 'dialog-modal-4-setting-room',
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data !== undefined) {
        console.log(dataReturned);
        let dataRet = dataReturned.data;
        let indexDataWillChange = this.roomsSelect.findIndex(r => r.roomNo == dataRet.roomNo);
        this.roomsSelect[indexDataWillChange] = dataRet;
      }
    });
    return await modal.present();
  }

  async detailRooms() {
    const modal = await this.modalCtrl.create({
      component: DlgSelectRoomsDetailPage,
    });
    return await modal.present();
  }

  filterRoom() {
    this.roomsByFilter = this.roomsStatic;
    if (this.roomType != 0) {
      this.roomsByFilter = this.roomsByFilter.filter(r => r.roomType == this.roomType);
    }
    if (this.bedType != 0) {
      this.roomsByFilter = this.roomsByFilter.filter(r => r.bedType == this.bedType);
    }
  }

  selectRoom(room: Room) {
    if (room.status == "ว่าง") {
      if (this.roomsSelect.every(r => r.roomNo != room._id)) {
        let room4Add = new RoomSelected();
        room4Add.roomNo = room._id;
        room4Add.setting = new SettingRoom();
        room4Add.setting.haveBreakfast = true;
        room4Add.setting.haveAddBreakfast = false;
        room4Add.setting.addBreakfastCount = 0;
        room4Add.setting.haveExtraBed = false;
        room4Add.setting.extraBedCount = 0;
        room4Add.setting.discount = 0;
        this.roomsSelect.push(room4Add);
        this.roomsSelect.sort((a, b) => (Number)(a.roomNo) - (Number)(b.roomNo));
      } else {
        this.deleteRoom(room._id);
      }
    }
  }

  deleteRoom(noRoom: string) {
    let dupRoom = this.roomsSelect.find(r => r.roomNo == noRoom);
    let index = this.roomsSelect.indexOf(dupRoom);
    this.roomsSelect.splice(index, 1);
  }

  setColor(status: string) {
    switch (status) {
      case "ว่าง":
        return "primary";
        break;
      case "ขายแล้ว":
        return "danger";
        break;
      case "กำลังซ่อม":
        return "brown";
        break;
      case "จอง":
        return "warning";
        break;
      case "ห้องพักผู้บริหาร":
        return "blue";
        break;
      default:
        return "primary";
        break;
    }
  }

  setIconIonSelect(type: number) {
    switch (type) {
      case 1:
        return "../../assets/icon/standardmdpi.svg";
        break;
      case 2:
        return "../../assets/icon/superiormdpi.svg";
        break;
      case 3:
        return "../../assets/icon/deluxemdpi.svg";
        break;
      case 4:
        return "../../assets/icon/grand_deiuxemdpi.svg";
        break;
      default:
        return "";
        break;
    }
  }

  setIconIonSelect4Bed(type: number) {
    switch (type) {
      case 1:
        return "../../assets/icon/bedmdpi.svg";
        break;
      case 2:
        return "../../assets/icon/double_bedmdpi.svg";
        break;
      default:
        return "";
        break;
    }
  }

  setIcon(room: Room) {
    let dupRoom = this.roomsSelect.find(r => r.roomNo == room._id);
    if (this.roomsSelect.indexOf(dupRoom) != -1) {
      return "../../assets/icon/checkmark-outline.svg"
    }
    else
      switch (room.roomType) {
        case 1:
          return "../../assets/icon/standardmdpi.svg";
        case 2:
          return "../../assets/icon/superiormdpi.svg";
        case 3:
          return "../../assets/icon/deluxemdpi.svg";
        case 4:
          return "../../assets/icon/grand_deiuxemdpi.svg";
        default:
          return "../../assets/icon/help-circle-outline.svg";
      }
  }

  clearRooms() {
    this.roomsSelect = [];
  }

  clearFilter() {
    this.roomsByFilter = this.roomsStatic;
    this.roomType = null;
    this.bedType = null;
  }

  async closeModal() {
    if (this.roomsSelect.length !== 0) {
      await this.modalCtrl.dismiss(this.roomsSelect);
    }
    else if (this.roomsSelect.length == 0 && this.roomParam !== null) {
      await this.modalCtrl.dismiss(this.roomParam);
    }
    else await this.modalCtrl.dismiss([] as RoomSelected[]);
  }

}
