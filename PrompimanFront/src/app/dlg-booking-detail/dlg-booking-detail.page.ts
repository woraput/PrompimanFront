import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';

@Component({
  selector: 'app-dlg-booking-detail',
  templateUrl: './dlg-booking-detail.page.html',
  styleUrls: ['./dlg-booking-detail.page.scss'],
})
export class DlgBookingDetailPage implements OnInit {
  public fg: FormGroup;
  private submitRequested: boolean;
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];



  constructor(private fb: FormBuilder) { 
    this.fg = this.fb.group({
      'name': ['', Validators.required],
      'telephone': ['', Validators.required],
      'date1': ['', Validators.required],
      'date2': ['', Validators.required],
      'count': ['', Validators.required],
      // room ของ component
      'money': ['', Validators.required],

    })
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

}
