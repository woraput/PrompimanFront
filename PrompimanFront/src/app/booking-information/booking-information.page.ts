import { Component, OnInit, ViewChildren } from '@angular/core';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectRoomsPage } from '../select-rooms/select-rooms.page';
import { CloudSyncService } from '../cloud-sync.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.page.html',
  styleUrls: ['../app.component.scss'],
})
export class BookingInformationPage implements OnInit {
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];
  public fg: FormGroup;
  public submitRequested: boolean;
  public text = "เงินสำรองจ่าย";
  public test = [{ 'roomNo': '201', 'Setting': null }, { 'roomNo': '202', 'Setting': null }];
  public addReserve: Number = 0;
  public pageName = "BookingInformationPage";

  constructor(private fb: FormBuilder, private router: Router, private clound: CloudSyncService, private navCtrl: NavController) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'telephone': [null, Validators.required],
      'checkInDate': [null, Validators.required],
      'checkOutDate': [null, Validators.required],
      'rooms': [],
      'reserve': [null, Validators.required],
    });
    console.log(this.fg.value);
  }

  ngOnInit() {
    this.fg.get('rooms').setValue(this.test);
    console.log(this.fg.get('rooms').value);
    console.log(this.fg.value);
  }

  room() {
    this.router.navigate(['/select-rooms',
      this.fg.get('checkInDate').value,
      this.fg.get('checkOutDate').value]);
    this.clound.timePeriod.checkInDate = this.fg.get('checkInDate').value;
    this.clound.timePeriod.checkOutDate = this.fg.get('checkOutDate').value;
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.datetimeComponent.forEach(it => it.submitRequest());
    if (this.fg.valid) {
      this.clound.dataPass = this.fg.value;
      this.router.navigate(['/bill', this.text, this.pageName]);
      // this.navCtrl.navigateForward(['/bill',this.text]);
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
