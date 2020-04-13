import { Component, OnInit, ViewChildren } from '@angular/core';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.page.html',
  styleUrls: ['../app.component.scss'],
})
export class BookingInformationPage implements OnInit {

@ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];

  constructor() { }

  ngOnInit() {
  }

}
