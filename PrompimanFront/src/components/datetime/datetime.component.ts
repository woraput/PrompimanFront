import { Component, OnInit } from '@angular/core';
import { MbscCalendarOptions } from '@mobiscroll/angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() { }

  datetimeSettings: MbscCalendarOptions = {
    touchUi: false,
    controls: ['calendar', 'time']
  };

  dateSettings: MbscCalendarOptions = {
    touchUi: false,
    controls: ['calendar']
  };

  setBtnSettings: MbscCalendarOptions = {
    display: 'center',
    touchUi: false,
    buttons: ['set']
  };

  setCancelSettings: MbscCalendarOptions = {
    display: 'center',
    touchUi: false,
    buttons: ['set', 'cancel']
  };

  inlineSettings: MbscCalendarOptions = {
    display: 'inline',
    touchUi: false
  };

}
