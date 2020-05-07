import { async } from '@angular/core/testing';
import { CloudSyncService } from './../cloud-sync.service';
import { Component, OnInit } from '@angular/core';
import { PagingMaster } from 'src/models/checkin';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.page.html',
  styleUrls: ['./master-detail.page.scss'],
})
export class MasterDetailPage implements OnInit {
  private option = 'value1';
  private p = 1;
  // private paging = new PagingMaster();
  private paging = new PagingMaster();

  constructor(private api: CloudSyncService) { }

  ngOnInit() {
    this.api.getLstMasterNotCloseYet(this.p, 10).subscribe(dataRes => {
      if (dataRes != null) {
        console.log(dataRes);
        this.paging = dataRes;
      }
    })

  }

  segmentChanged(ev: CustomEvent) {
    console.log(ev);

    switch (ev.detail.value) {
      case "value1":
        this.api.getLstMasterNotCloseYet(this.p, 10).subscribe(dataRes => {
          if (dataRes != null) {
            console.log(dataRes);
            this.paging = dataRes;
          }
        });
        break;
      case "value2":
        this.api.getLstMasterHaveOrNotRemaining(this.p, 10, true).subscribe(dataRes => {
          if (dataRes != null) {
            console.log(dataRes);
            this.paging = dataRes;
          }
        })
        break;
      case "value3":
        this.api.getLstMasterHaveOrNotRemaining(this.p, 10, false).subscribe(dataRes => {
          if (dataRes != null) {
            console.log(dataRes);
            this.paging = dataRes;
          }
        })
        break;
      case "value4":
        this.api.getLstMasterHistory(this.p, 10).subscribe(dataRes => {
          if (dataRes != null) {
            console.log(dataRes);
            this.paging = dataRes;
          }
        })
        break;

      default:
        break;
    }
  }



}
