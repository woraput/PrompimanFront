import { Component, OnInit, ViewChildren } from '@angular/core';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectRoomsPage } from '../select-rooms/select-rooms.page';
import { CloudSyncService } from '../cloud-sync.service';
import { NavController, ModalController } from '@ionic/angular';
import { RoomSelected } from 'src/models/reservation';
import { BillPage } from '../bill/bill.page';

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
  public addReserve: Number = 0;

  constructor(private fb: FormBuilder, private router: Router, private clound: CloudSyncService, private navCtrl: NavController, public modals: ModalController) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'telephone': [null, Validators.required],
      'checkInDate': [null, Validators.required],
      'checkOutDate': [null, Validators.required],
      'rooms': [null, Validators.required],
      'reserve': [null, Validators.required],
    });
    console.log(this.fg.value);
  }

  ngOnInit() {
    this.clound.lstRoomsSelect = [];
  }

  ionViewDidEnter() {
    let roomsSelect = this.clound.lstRoomsSelect
    console.log(roomsSelect);
    this.fg.get('rooms').setValue(roomsSelect);
    console.log(this.fg.get('rooms').value);
    console.log(this.clound.settingAllRoom);

  }

  room() {
    //todo: ถ้ากลับไปเลือกห้องอีกครั้งห้องเดิมต้องไม่หาย
    this.router.navigate(['/select-rooms',
      this.fg.get('checkInDate').value,
      this.fg.get('checkOutDate').value]),
      this.clound.dataPass = this.fg.get('rooms').value;
    this.clound.timePeriod.checkInDate = this.fg.get('checkInDate').value;
    this.clound.timePeriod.checkOutDate = this.fg.get('checkOutDate').value;
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.datetimeComponent.forEach(it => it.submitRequest());

    if (this.fg.valid) {
      this.presentModal();
      // this.clound.dataPass = this.fg.value;
      // this.router.navigate(['/bill', this.text]);
      // this.navCtrl.navigateForward(['/bill',this.text]);
    }
    // console.log(this.fg.valid);
  }

  async presentModal() {
    const modal = await this.modals.create({
      component: BillPage,
      cssClass: 'dialog-modal-4-regis-info',
      componentProps: {
        'text': this.text,
        'reserve': this.fg.get('reserve').value,
      }
    });
    modal.onWillDismiss().then(data => {
      let isOk = data
      console.log(isOk);
      
      if (isOk.data) {
        this.clound.createReservation(this.fg.value).subscribe(data => {
          if (data != null) {
            console.log("edit success: ", data.isSuccess);
          }
        });
        this.router.navigate(['/booking']);
      }
    });
    modal.present();
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
