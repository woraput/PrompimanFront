import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkin-detail',
  templateUrl: './checkin-detail.page.html',
  styleUrls: ['./checkin-detail.page.scss'],
})
export class CheckinDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setColor(status: string) {
    switch (status) {
      case "เข้าพัก":
        return "primary";
      case "คืนห้อง":
        return "danger";
      case "เช็คเอ้าท์":
        return "gray";

      default:
        return "primary";
    }
  }

}
