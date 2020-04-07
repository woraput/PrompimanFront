import { RegisterPage } from './../register/register.page';
import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
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
      'input1': ['', Validators.required],
      'input2': ['', Validators.required],
      'date': ['', Validators.required],
      'time': ['', Validators.required],
      'input3': [''],
      'select': ['', Validators.required],
      'detail': ['', Validators.required],
      'checkbox': UIStandardPage.CreateFormGroup(fb),
      'tax': ['', Validators.required],
      'tax2': ['', Validators.required],
      'room1': ['', Validators.required],
      'room2': ['', Validators.required],
      'room3': ['', Validators.required],
      'room4': ['', Validators.required],
    });
  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'checkbox1': [false, Validators.required],
      'checkbox2': [false, Validators.required],
      'checkbox3': [false, Validators.required],
    }, {
      validator: UIStandardPage.checkAnyOrOther()
    });
  }

  public isValid(name: string): boolean {
    var ctrl = this.fg.get(name);
    if (name == 'anycheck') {
      ctrl = this.fg;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public static checkAnyOrOther(): ValidatorFn {
    return (c: AbstractControl): ValidationErrors | null => {
      const checkbox1 = c.get('checkbox1');
      const checkbox2 = c.get('checkbox2');
      const checkbox3 = c.get('checkbox3');
      if (!checkbox1.value && !checkbox2.value && !checkbox3.value) {
        return { 'anycheck': true };
      }
      return null;
    }
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

  // public isValid(name: string): boolean {
  //   let ctrl = this.fg.get(name);
  //   return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  // }

  async presentModal() {
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    return await modal.present();
  }

}
