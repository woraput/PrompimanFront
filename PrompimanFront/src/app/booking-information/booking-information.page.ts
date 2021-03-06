import { Component, OnInit, ViewChildren } from '@angular/core';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectRoomsPage } from '../select-rooms/select-rooms.page';
import { CloudSyncService } from '../cloud-sync.service';
import { NavController, ModalController } from '@ionic/angular';
import { RoomSelected } from 'src/models/checkin';
import { BillPage } from '../bill/bill.page';
import { DlgRoomDetailPage } from '../dlg-room-detail/dlg-room-detail.page';
import { SharingDataService } from '../sharing-data.service';

@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.page.html',
  styleUrls: ['./booking-information.page.scss'],
})
export class BookingInformationPage implements OnInit {
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];
  public fg: FormGroup;
  public submitRequested: boolean;
  public text = "เงินสำรองจ่าย";
  public addReserve: Number = 0;

  constructor(private shareData: SharingDataService, private fb: FormBuilder, private router: Router, private cloud: CloudSyncService, private navCtrl: NavController, public modals: ModalController) {
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
  }

  async selectRoomModal() {
    this.shareData.timePeriod.checkInDate = this.fg.get('checkInDate').value;
    this.shareData.timePeriod.checkOutDate = this.fg.get('checkOutDate').value;
    const modal = await this.modals.create({
      component: SelectRoomsPage,
      componentProps: { rooms: this.fg.get('rooms').value },
      cssClass: 'dialog-modal-4-select-room',
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data !== null && dataReturned.data !== undefined) {
        let roomsSelect = dataReturned.data;
        this.fg.get('rooms').patchValue(roomsSelect);
      }
    });
    return await modal.present();
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.datetimeComponent.forEach(it => it.submitRequest());

    if (this.fg.valid) {
      this.presentModal();
    }
  }

  async roomSettingModal() {
    const modal = await this.modals.create({
      component: DlgRoomDetailPage,
      componentProps: { room: this.fg.get('rooms').value, for: 'all' },
      cssClass: 'dialog-modal-4-setting-room',
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data !== undefined) {
        let lstRoom = this.fg.get('rooms').value as RoomSelected[];
        lstRoom.forEach(r => r.setting = this.shareData.settingAllRoom);
        this.fg.get('rooms').patchValue(lstRoom);
      }
    });
    return await modal.present();
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
        this.cloud.createReservation(this.fg.value).subscribe(data => {
          if (data != null) {
            console.log("edit success: ", data.isSuccess);
          }
        });
        this.router.navigate(['/booking']);
        // this.navCtrl.navigateForward(['/booking']);
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
