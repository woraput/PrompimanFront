import { RegisterPage } from './../register/register.page';
import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MbscCalendarOptions } from '@mobiscroll/angular';
import { ModalController } from '@ionic/angular';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';

@Component({
  selector: 'app-uistandard',
  templateUrl: './uistandard.page.html',
  styleUrls: ['../app.component.scss']
})
export class UIStandardPage implements OnInit {
  // date: Date;
  private option = 'element';
  public fg: FormGroup;
  private submitRequested: boolean;
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];

  constructor(private modalController: ModalController, private fb: FormBuilder) {
    this.fg = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      date_time: fb.group({
        date: ['', Validators.required],
        time: ['', Validators.required],
      }),
      input3: [''],
      select: ['', Validators.required],
      detail: ['', Validators.required],
    });

  }


  public handleSubmit() {

    this.submitRequested = true;
    this.datetimeComponent.forEach(it => it.submitRequest());

    console.log(this.fg.value);
    if (this.fg.valid) {
    }
  }

  ngOnInit() {
  }

  segmentChanged() { }

  public isValid(name: string): boolean {
    let ctrl = this.fg.get(name);
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    return await modal.present();
  }

}
