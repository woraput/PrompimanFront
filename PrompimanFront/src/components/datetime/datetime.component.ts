import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MbscCalendarOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent implements OnInit {
  @Input('text') public text: string;
  @Input('mode') public mode: string;
  private submitRequested = false;
  @Input() public fg: FormGroup;
  @Input() public formName: string;

  // private top: Date;
  // private bottom: Date;
  // private anchored: Date;
  // private center: Date;
  // private date: Date;
  // private time: Date;
  // private setBtn: Date;
  // private setCancel: Date;
  // private inline: Date;

  constructor() {
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

  // dateSettings: MbscCalendarOptions = {
  //   touchUi: false,
  //   controls: ['calendar']
  // };

  // setBtnSettings: MbscCalendarOptions = {
  //   display: 'center',
  //   touchUi: false,
  //   buttons: ['set']
  // };

  // setCancelSettings: MbscCalendarOptions = {
  //   display: 'center',
  //   touchUi: false,
  //   buttons: ['set', 'cancel']
  // };

  // inlineSettings: MbscCalendarOptions = {
  //   display: 'inline',
  //   touchUi: false
  // };

  // public static CreateFormGroup(fb: FormBuilder): FormGroup {
  //   return fb.group({
  //     'date-time': ['', Validators.required],
  //   });
  // }


  public isValid(name: string): boolean {
    var ctrl = this.fg.get(name);
    // if (name == 'anycheck') {
    //   ctrl = this.FormItem;
    //   return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    // }

    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }


  ngOnInit() {

    this.submitRequested = false;
  }

  submitRequest() {
    this.submitRequested = true;
  }

}
