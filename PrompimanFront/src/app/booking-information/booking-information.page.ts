import { Component, OnInit, ViewChildren } from '@angular/core';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectRoomsPage } from '../select-rooms/select-rooms.page';
import { CloudSyncService } from '../cloud-sync.service';
import { NavController, ModalController } from '@ionic/angular';
import { RoomSelected } from 'src/models/reservation';
import { BillPage } from '../bill/bill.page';
import { DlgRoomDetailPage } from '../dlg-room-detail/dlg-room-detail.page';

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

  constructor(private modalController: ModalController, private fb: FormBuilder, private router: Router, private cloud: CloudSyncService, private navCtrl: NavController, public modals: ModalController) {
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
    this.cloud.lstRoomsSelect = [];
  }

  ionViewDidEnter() {
    let roomsSelect = this.cloud.lstRoomsSelect
    console.log(roomsSelect);
    this.fg.get('rooms').setValue(roomsSelect);
    console.log(this.fg.get('rooms').value);
    console.log(this.cloud.settingAllRoom);

  }

  room() {
    //todo: ถ้ากลับไปเลือกห้องอีกครั้งห้องเดิมต้องไม่หาย
    this.router.navigate(['/select-rooms',
      this.fg.get('checkInDate').value,
      this.fg.get('checkOutDate').value]),
      this.cloud.dataPass = this.fg.get('rooms').value;
    this.cloud.timePeriod.checkInDate = this.fg.get('checkInDate').value;
    this.cloud.timePeriod.checkOutDate = this.fg.get('checkOutDate').value;
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


  async roomSettingModal() {
    const modal = await this.modalController.create({
      component: DlgRoomDetailPage,
      componentProps: { room: this.fg.get('rooms').value, for: 'all' },
      cssClass: 'dialog-modal-4-setting-room',
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log(dataReturned);
        // let dataRet = dataReturned.data;
        console.log(this.cloud.settingAllRoom);

        this.cloud.lstRoomsSelect.forEach(r => r.setting = this.cloud.settingAllRoom);
        // let indexDataWillChange = this.roomsSelect.findIndex(r => r.roomNo == dataRet.roomNo);
        // this.roomsSelect[indexDataWillChange] = dataRet;
        console.log(this.cloud.lstRoomsSelect);

      }
    });
    return await modal.present();
  }

  async presentModal() {
    const modal = await this.modals.create({
      component: BillPage,
      componentProps: {
        'text': this.text,
        'reserve': this.fg.get('reserve').value,
      }
    });
    modal.onWillDismiss().then(data => {
      let isOk = data
      console.log(isOk);

      if (isOk.data) {
        this.cloud.createReservation(this.fg.value).subscribe(data => {
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
