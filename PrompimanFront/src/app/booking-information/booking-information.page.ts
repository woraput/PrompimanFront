import { Component, OnInit, ViewChildren } from '@angular/core';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.page.html',
  styleUrls: ['../app.component.scss'],
})
export class BookingInformationPage implements OnInit {

  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];
  public fg: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.fg = this.fb.group({
    'xxx':''
    });

  }

  ngOnInit() {
  }

}
