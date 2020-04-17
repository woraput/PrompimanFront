import { CloudSyncService } from './../cloud-sync.service';
import { Component, OnInit } from '@angular/core';
import { Floor } from 'src/models/rooms';
import { NavController, ModalController } from '@ionic/angular';
import { DlgSelectRoomsDetailPage } from '../dlg-select-rooms-detail/dlg-select-rooms-detail.page';
import { DateRequest, Room, RoomSelected } from 'src/models/reservation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-rooms',
  templateUrl: './select-rooms.page.html',
  styleUrls: ['./select-rooms.page.scss'],
})
export class SelectRoomsPage implements OnInit {
  // public rooms = AllRooms.sort((a, b) => a.localeCompare(b));
  private roomsSelect: RoomSelected[] = [];
  private floors = Floor;
  private timePeriod = new DateRequest();
  private roomsStatic: Room[] = [];
  public roomStaticSelect: Room[] = [];
  private date1: Date;
  private date2: Date;
  private typeRoom: number;
  private typeBed: number;
  constructor(private api: CloudSyncService, private navCtrl: NavController, private modalController: ModalController, private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.paramMap.get('checkInDate'));
    console.log(this.activatedRoute.snapshot.paramMap.get('checkOutDate'));
  }

  ngOnInit() {
  }

  async detailRooms() {
    const modal = await this.modalController.create({
      component: DlgSelectRoomsDetailPage,
    });
    return await modal.present();
  }

  setTime() {
    if ((this.date1 && this.date2) != null) {
      this.timePeriod.checkInDate = this.date1;
      this.timePeriod.checkOutDate = this.date2;
      console.log(this.timePeriod);
      this.api.getAllRooms(this.timePeriod).subscribe(data => {
        if (data !== null) {
          this.roomsStatic = data;
        }
      })
    }
  }

  selectRoom(room: Room) {
    if (room.status == "ว่าง") {
      var room4Add = new RoomSelected();

      if (this.roomsSelect.every(r => r.roomNo != room._id)) {
        room4Add.roomNo = room._id;
        this.roomsSelect.push(room4Add);
        console.log(this.roomsSelect);

        this.roomsSelect.sort((a, b) => (Number)(a) - (Number)(b));
      } else {
        this.deleteRoom(room._id);
      }
    }
  }

  deleteRoom(noRoom: string) {
    let dupRoom = this.roomsSelect.find(r => r.roomNo == noRoom);
    let index = this.roomsSelect.indexOf(dupRoom);
    console.log(this.roomsSelect);
    console.log(index);
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
          return "../../assets/icon/standardmdpi.svg";
          break;
      }
  }

  // notAvailable(status: string): boolean {
  //   return status != "ว่าง";
  // }
  settingRoom() {
  }

  clearRooms() {
    this.roomsSelect = [];
  }

  confirm() {
    this.navCtrl.pop();
  }
}
