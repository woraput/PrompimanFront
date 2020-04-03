import { Component, OnInit, Input } from '@angular/core';
import { MbscCalendarOptions } from '@mobiscroll/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent implements OnInit {
  private top: Date;
  private bottom: Date;
  private anchored: Date;
  private center: Date;
  private date: Date;
  private time: Date;
  private setBtn: Date;
  private setCancel: Date;
  private inline: Date;
  private submitRequested = false;
  private fg: FormGroup;
  @Input() public FormItem: FormGroup;

  constructor(private fb: FormBuilder) {
    this.FormItem = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  datetimeSettings1: MbscCalendarOptions = {
    touchUi: false,
    controls: ['calendar'],
    buttons: ['set'],
  };

  datetimeSettings2: MbscCalendarOptions = {
    touchUi: false,
    controls: ['time'],
    buttons: ['set'],
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


  ngOnInit() {
    console.log('เข้า onInit');

    this.submitRequested = false;
  }

  submitRequest() {
    console.log('ถึง component');
    this.submitRequested = true;
  }

  public isValid(name: string): boolean {
    const ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }
}