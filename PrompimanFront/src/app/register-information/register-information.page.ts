import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';

@Component({
  selector: 'app-register-information',
  templateUrl: './register-information.page.html',
  styleUrls: ['./register-information.page.scss'],
})
export class RegisterInformationPage implements OnInit {
  public option = 'thai';
  private submitRequested: boolean;
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];
  public fg: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'idCard': ['', Validators.required],
      'passportNo': ['', Validators.required],
      'th_Prefix': ['', Validators.required],
      'th_Firstname': ['', Validators.required],
      'th_Lastname': ['', Validators.required],
      'en_Prefix': ['', Validators.required],
      'en_Firstname': ['', Validators.required],
      'en_Lastname': ['', Validators.required],
      'sex': ['', Validators.required],
      'birthday': ['', Validators.required],
      'address': ['', Validators.required],
      'issueDate': ['', Validators.required],
      'expiryDate': ['', Validators.required],
      'telephone': ['', Validators.required],
      'job': [null, Validators.required],
      'nationality': [null, Validators.required],
      'photo': [null, Validators.required],
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

}
