import { ActivatedRoute } from '@angular/router';
import { CloudSyncService } from './../cloud-sync.service';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Master, RoomActivate } from 'src/models/checkin';

@Component({
  selector: 'app-checkin-detail',
  templateUrl: './checkin-detail.page.html',
  styleUrls: ['./checkin-detail.page.scss'],
})
export class CheckinDetailPage implements OnInit {
  private _id: string;
  private master = new Master();
  private rooms: any[] = [];
  constructor(private api: CloudSyncService, private activatedRoute: ActivatedRoute) {
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
  }

  ngOnInit() {
    this._id = "637242708563864454";
    // this._id = this.navParams.data._id;
    this.api.getCheckinDetail(this._id).subscribe(dataRes => {
      if (dataRes != null) {
        console.log(dataRes);
        this.master = dataRes.master;
        this.rooms = dataRes.roomActLst;
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
    return this.rooms.every(r => r.status == "เช็คเอ้าท์" || r.status == "ออก");
  }

}
