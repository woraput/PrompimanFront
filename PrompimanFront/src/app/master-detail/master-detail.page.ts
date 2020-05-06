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
    this.api.getLstMasterNotCloseYet(this.p, 10, '').subscribe(dataRes => {
      if (dataRes != null) {
        console.log(dataRes);
        this.paging = dataRes;
      }
    })

  }

  calDay(dayOut: Date, dayIn: Date) {

    let result = dayOut.valueOf() - dayIn.valueOf();
    console.log(result);
    let a: Date;
    a.setDate(result);
    console.log(a);

    return a;
  }

}
