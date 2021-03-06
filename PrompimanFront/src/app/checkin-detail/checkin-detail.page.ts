import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { CloudSyncService } from './../cloud-sync.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Master, RoomActivate, RoomActRequest } from 'src/models/checkin';
import { CostDetailPage } from '../cost-detail/cost-detail.page';

@Component({
  selector: 'app-checkin-detail',
  templateUrl: './checkin-detail.page.html',
  styleUrls: ['./checkin-detail.page.scss'],
})
export class CheckinDetailPage implements OnInit {
  private _id: string;
  private master = new Master();
  private roomsAct: any[] = [];
  constructor(private api: CloudSyncService, private modalController: ModalController, private activatedRoute: ActivatedRoute) {
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
  }

  ngOnInit() {
    this.api.getCheckinDetail(this._id).subscribe(dataRes => {
      if (dataRes != null) {
        console.log(dataRes);
        this.master = dataRes.master;
        this.roomsAct = dataRes.roomActLst;
      }
    })
  }

  setColor(status: string) {
    switch (status) {
      case "เข้าพัก":
        return "primary";
      case "คืนห้อง":
        return "danger";
      case "เช็คเอ้าท์":
        return "gray";
      case "ออก":
        return "gray";
      default:
        return "primary";
    }
  }

  checkDisplayCloseMasterButton(): boolean {
    return this.roomsAct.every(r => r.status == "เช็คเอ้าท์" || r.status == "ออก");
  }


  async costDetail4All() {
    let roomAct;
    await this.api.getRoomAct(this._id, '').subscribe(dataRes => {
      if (dataRes != null) {
        roomAct = dataRes;
      }
    });

    setTimeout(async () => {
      const modal = await this.modalController.create({
        component: CostDetailPage,
        componentProps: {
          roomActivate: roomAct, totalCost: this.master.totalCost,
          paid: this.master.paid, remaining: this.master.remaining,
        },
        cssClass: 'dialog-modal-4-select-room',
      });
      modal.onDidDismiss().then(dataDismiss => {
        if (dataDismiss.data != null || dataDismiss.data != undefined) {
          let roomActRequest: RoomActRequest = new RoomActRequest();
          roomActRequest.masterId = this._id;
          roomActRequest.roomActLst = dataDismiss.data;
          console.log(roomActRequest);
          this.api.updateRoomAct(roomActRequest).subscribe(dataRes => {
            if (dataRes != null) {
              console.log(dataRes.isSuccess);
            }
          })
        }
      })
      modal.present();
    }, 100);
  }

  async costDetail4EachRoom(room_id: string) {
    let roomAct;

    await this.api.getRoomAct(this._id, room_id).subscribe(dataRes => {
      if (dataRes != null) {
        roomAct = dataRes;
      }
    });

    setTimeout(async () => {
      const modal = await this.modalController.create({
        component: CostDetailPage,
        componentProps: {
          roomActivate: roomAct, totalCost: this.master.totalCost,
          paid: this.master.paid, remaining: this.master.remaining,
        },
        cssClass: 'dialog-modal-4-select-room',
        // backdropDismiss: false
      });
      modal.onWillDismiss().then( dataDismiss => {
        if (dataDismiss.data != null || dataDismiss.data != undefined) {
          let roomActRequest: RoomActRequest = new RoomActRequest();
          roomActRequest.masterId = this._id;
          roomActRequest.roomActLst =  dataDismiss.data;
          console.log(roomActRequest);
          this.api.updateRoomAct(roomActRequest).subscribe(dataRes => {
            if (dataRes != null) {
              console.log(dataRes.isSuccess);
            }
          })
        }
      })
      modal.present()
      return this.modalController.dismiss();
    }, 100);


  }
}
