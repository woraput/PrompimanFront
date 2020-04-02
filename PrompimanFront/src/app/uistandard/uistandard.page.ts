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
  option = "element";
  time: Date;
  todo: FormGroup;
  top: Date;
  bottom: Date;
  anchored: Date;
  center: Date;
  datetime: Date;
  date: Date;
  setBtn: Date;
  setCancel: Date;
  inline: Date;
  constructor(private modalController: ModalController, private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
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

  logForm() {
    console.log(this.todo.value)
  }
  ngOnInit() { }

  segmentChanged() { }

  dateSelect(ev) {
    console.log(this.date);
    console.log(ev);
  }

  async presentModal() {
    console.log("faaw");
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    return await modal.present();
  }

}
