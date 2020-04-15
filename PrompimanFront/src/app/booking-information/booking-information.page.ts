import { Component, OnInit, ViewChildren } from '@angular/core';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectRoomsPage } from '../select-rooms/select-rooms.page';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.page.html',
  styleUrls: ['../app.component.scss'],
})
export class BookingInformationPage implements OnInit {
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];
  public fg: FormGroup;
  public submitRequested: boolean;

  constructor(private fb: FormBuilder, private router: Router) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'telephone': [null, Validators.required],
      'checkInDate': [null, Validators.required],
      'checkOutDate': [null, Validators.required],
      // 'rooms': SelectRoomsPage.CreateFormGroup(this.fg),
      'reserve': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  room() {
  }

  public handleSubmit() {
    console.log(this.fg.value)
    console.log(this.fg.valid)
    this.submitRequested = true;
    this.datetimeComponent.forEach(it => it.submitRequest());
    
    if (this.fg.valid) {
      this.router.navigate(['/bill',this.fg.value]);
      console.log(this.fg.value);
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  // public isValid(name: string): boolean {
  //   var ctrl = this.FormItem.get(name);
  //   if (name == "plantings") {
  //     let ctrls = this.FormItem;
  //     return ctrls.errors && ctrls.errors.plantings && (ctrl.dirty || this.submitRequested);
  //   };
  //   return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  // }
}
