import { Component, OnInit, ViewChildren, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { CloudSyncService } from '../cloud-sync.service';
import { Reservation, RoomSelected } from 'src/models/reservation';
import { AlertController, ModalController } from '@ionic/angular';
import { BookingCancelPage } from '../booking-cancel/booking-cancel.page';
import { BillPage } from '../bill/bill.page';
import { DlgRoomDetailPage } from '../dlg-room-detail/dlg-room-detail.page';
import { SelectRoomsPage } from '../select-rooms/select-rooms.page';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.page.html',
  styleUrls: ['../app.component.scss'],
})
export class BookingDetailPage implements OnInit {
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];

  public fg: FormGroup;
  public isCancel2: string;
  public _id: string;
  public listdataReservation: any = {};
  public roomslength: number;
  private submitRequested: boolean;
  public rommsNumber: RoomSelected[];
  public isAddreserve: boolean = false;
  public addreserve: number = 0;
  public text = "เงินสำรองจ่าย";

  constructor(private fb: FormBuilder, private modalController: ModalController, public router: Router, private cloud: CloudSyncService, private activatedRoute: ActivatedRoute,
    public alertController: AlertController, private clound: CloudSyncService) {
    this.isCancel2 = this.activatedRoute.snapshot.paramMap.get('isCancel');
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'telephone': [null, Validators.required],
      'checkInDate': [null, Validators.required],
      'checkOutDate': [null, Validators.required],
      'rooms': [],
      'reserve': [null, Validators.required],
      'active': [null, Validators.required],
      // 'note': [],
    })

    this.cloud.getByIDReservation(this._id).subscribe(data => {
      if (data != null) {
        this.listdataReservation = data;
        this.fg.patchValue(data);
        console.log(this.fg.value);
        // this.fg.get('rooms').setValue(this.fg.get('rooms').value.length);
        this.roomslength = this.listdataReservation.rooms.length;
        console.log(this.fg.get('rooms').value);
        this.rommsNumber = this.fg.get('rooms').value;
        this.cloud.roomReserve = this.rommsNumber.map(r => r.roomNo);
      }
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
    console.log(this.addreserve);
    console.log("xxxxx", this.addreserve);
    console.log("this.fg.valid", this.fg.valid);

    if (this.fg.valid) {
      this.presentModal();
      // this.clound.dataEdit = this.fg.value;
      // this.router.navigate(['/bill', this.text,this.addreserve]);
    }
  }

  async roomSettingModal() {
    const modal = await this.modalController.create({
      component: DlgRoomDetailPage,
      componentProps: { room: this.fg.get('rooms').value, for: 'all' },
      cssClass: 'dialog-modal-4-setting-room',
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data !== undefined) {
        let lstRoomWillSetting = this.fg.get('rooms').value as RoomSelected[];
        lstRoomWillSetting.forEach(r => r.setting = this.cloud.settingAllRoom);
        console.log(this.cloud.lstRoomsSelect);
        this.fg.get('rooms').patchValue(lstRoomWillSetting);

      }
    });
    return await modal.present();
  }

  async presentModal() {
    console.log("modal");

    const modal = await this.modalController.create({
      component: BillPage,
      cssClass: 'dialog-modal-4-regis-info',
      componentProps: {
        'text': this.text,
        'reserve': this.addreserve,
      }
    });
    modal.onWillDismiss().then(data => {
      let isOk = data
      if (isOk.data) {
        console.log(this._id);

        this.clound.editReservation(this._id, this.addreserve, this.fg.value).subscribe(data => {
          if (data != null) {
            console.log("edit success: ", data.isSuccess);
          }
        });
        this.router.navigate(['/booking']);
      }
    });
    modal.present();
  }

  async selectRoomModal() {
    this.cloud.timePeriod.checkInDate = this.fg.get('checkInDate').value;
    this.cloud.timePeriod.checkOutDate = this.fg.get('checkOutDate').value;
    const modal = await this.modalController.create({
      component: SelectRoomsPage,
      componentProps: { rooms: this.fg.get('rooms').value },
      cssClass: 'dialog-modal-4-select-room',
    });
    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);
      console.log(this.fg.value);
      if (dataReturned !== null && dataReturned.data !== undefined) {
        console.log(dataReturned.data);
        let roomsSelect = dataReturned.data;
        console.log(roomsSelect);
        this.fg.get('rooms').patchValue(roomsSelect);
        console.log(this.fg.get('rooms').value);
      }
    });
    return await modal.present();
  }

  ngOnInit() {
  }

  async cancelReservation() {
    const modal = await this.modalController.create({
      component: BookingCancelPage,
      cssClass: 'dialog-modal-4-regis-info',
      componentProps: {
        '_id': this._id,
      }
    });
    return await modal.present();
  }

  isReserve() {
    this.isAddreserve = !this.isAddreserve;
  }

  isAdd(number: any) {
    console.log(number);
    console.log(number.detail.value);
    this.addreserve = number.detail.value;
    console.log(this.addreserve);

  }


}
