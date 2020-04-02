import { RegisterPage } from './../register/register.page';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MbscCalendarOptions } from '@mobiscroll/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-uistandard',
  templateUrl: './uistandard.page.html',
  styleUrls: ['../app.component.scss']
})
export class UIStandardPage implements OnInit {
  // date: Date;
  private option = 'element';
  private fg: FormGroup;
  private submitRequested: boolean;
  private top: Date;
  private bottom: Date;
  private anchored: Date;
  private center: Date;
  private datetime: Date;
  private date: Date;
  private setBtn: Date;
  private setCancel: Date;
  private inline: Date;

  constructor(private modalController: ModalController, private fb: FormBuilder) {
    this.fg = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      input3: '',
      date: ['', Validators.required],
      time: ['', Validators.required],
      select: ['', Validators.required],
      detail: ['', Validators.required],
    });

  }

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

  public handleSubmit() {
    this.submitRequested = true;
    if (this.fg.valid) {
      console.log(this.fg.value);

      //   this.store.dispatch(new SaveHouseHold(newHouseHold));
      //   this.navCtrl.popTo("CheckListPage");
    }
  }

  ngOnInit() { }

  segmentChanged() { }

  public isValid(name: string): boolean {
    let ctrl = this.fg.get(name);
    if (name == 'checkMember') {
      const ctrls = this.fg;
      return ctrls.errors && ctrls.errors.checkMember && (ctrls.dirty || this.submitRequested);
    }

    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    return await modal.present();
  }

}
