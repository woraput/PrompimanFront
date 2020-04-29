import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.page.html',
  styleUrls: ['./master-detail.page.scss'],
})
export class MasterDetailPage implements OnInit {
  private option = 'value1';

  constructor() { }

  ngOnInit() {
  }

}
