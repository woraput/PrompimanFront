import { Component, OnInit, ViewChildren } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DlgRoomDetailPage } from '../dlg-room-detail/dlg-room-detail.page';
import { RoomSelected, Master } from 'src/models/checkin';
// import { RoomSelected } from 'src/models/reservation';
import { CloudSyncService } from '../cloud-sync.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SelectRoomsPage } from '../select-rooms/select-rooms.page';
import { DlgSearchMemberPage } from '../dlg-search-member/dlg-search-member.page';
import { DlgSearchReservationPage } from '../dlg-search-reservation/dlg-search-reservation.page';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { SharingDataService } from '../sharing-data.service';
// import { RoomSelected } from 'src/models/checkin';
import { ActivatedRoute } from '@angular/router';
import { CostDetailPage } from '../cost-detail/cost-detail.page';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {
  private roomsSelect: RoomSelected[] = [];
  public fg: FormGroup;
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];
  private submitRequested: boolean;
  public _id: string;
  public _idReservation: string;
  // public roomslength: number;
  public listdata: any = {};
  private urlPhoto = "../../assets/image/user-silhouette.png";
  public rommsNumber: RoomSelected[];
  datacheckin: Master = new Master;
  datacheckin2: Master = new Master;

  constructor(private shareData: SharingDataService, public alertController: AlertController, private activatedRoute: ActivatedRoute, private modalController: ModalController, private cloud: CloudSyncService, private fb: FormBuilder) {

    this.fg = this.fb.group({
      '_id': [null],
      'memberId': [null],
      'name': [null, Validators.required],
      'telephone': [null, Validators.required],
      'reserve': [null, Validators.required],
      'groupName': [null, Validators.required],
      'checkInDate': [null, Validators.required],
      'checkOutDate': [null, Validators.required],
      'rooms': [],
      'haveRoomDeposit': [true, Validators.required],
      'haveTaxInvoice': [null, Validators.required],
      // 'deposit': [null],
      // 'totalCost': [null],
      // 'paid': [null],
      // 'remaining': [null],
      // 'active': [null],
      // 'creationDateTime': [null],
      // 'lastUpdate': [null],
    })
  }

  ionViewDidEnter() {
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
    console.log("yyyyyyyy", this._id);
    this.cloud.getByID(this._id).subscribe(data => {
      console.log(data);
      this.datacheckin = data;
      console.log("DeJa", this.datacheckin);
      if (data != null) {
        this.fg.get('telephone').setValue(data.telephone);
        console.log("uuuuu", this.fg);

        if (data.th_Firstname != null) {
          this.fg.get('name').setValue(data.th_Firstname + "   "   + data.th_Lastname);
          console.log(this.fg.get('name').value);
        }
        if (data.th_Firstname == "") {
          this.fg.get('name').setValue(data.en_Firstname + "   "   + data.en_Lastname);
          console.log(this.fg.get('name').value);
        }
        this.listdata = data;
        if (this.listdata.photo != null && this.listdata.photo != '') {
          this.urlPhoto = this.listdata.photo;
        }
        else if (this.listdata.photo == null) {
          this.listdata.photo = this.urlPhoto
        }
        else if (this.listdata.photo == '') {
          this.listdata.photo = this.urlPhoto
        }
      }
    });
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.datetimeComponent.forEach(it => it.submitRequest());
    console.log(this.fg.value);
    if (this.fg.valid) {
    }
  }

  public isValid(name: string): boolean {
    var ctrl = this.fg.get(name);
    if (name == 'anycheck') {
      ctrl = this.fg;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  ngOnInit() {

  }

  async roomSetting() {
    const modal = await this.modalController.create({
      component: DlgRoomDetailPage,
      componentProps: { room: this.roomsSelect, for: 'all' },
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

  async selectRoomModal() {
    this.shareData.timePeriod.checkInDate = this.fg.get('checkInDate').value;
    this.shareData.timePeriod.checkOutDate = this.fg.get('checkOutDate').value;
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

  async dataReservation() {
    const modal = await this.modalController.create({
      component: DlgSearchReservationPage,
      cssClass: 'dialog-modal-4-ch-re-mm',
    });
    modal.onDidDismiss().then(data => {
      // this.ionViewDidEnter()
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", data);
      this._idReservation = data.data;
      this.cloud.getByIDReservation(this._idReservation).subscribe(data => {
        this.datacheckin2 = data;
        console.log("Deja2", this.datacheckin2);
        if (data != null) {
          this.fg.get('checkInDate').setValue(data.checkInDate);
          this.fg.get('checkOutDate').setValue(data.checkOutDate);
          this.fg.get('reserve').setValue(data.reserve);
          this.fg.get('rooms').setValue(data.rooms);
          // console.log(this.fg.value);
          // this.fg.get('rooms').setValue(this.fg.get('rooms').value.length);
          // this.roomslength = this.listdata.rooms.length;
          // console.log(this.fg.get('rooms').value);
          this.rommsNumber = this.fg.get('rooms').value;
          this.shareData.roomReserve = this.rommsNumber.map(r => r.roomNo);
        }
      });
    })
    modal.present();
  }

  async dataMember() {
    const modal = await this.modalController.create({
      component: DlgSearchMemberPage,
      cssClass: 'dialog-modal-4-ch-re-mm',
    });
    modal.onDidDismiss().then(data => {
      // this.ionViewDidEnter()
    })
    modal.present();
  }


  isReserve() {
    this.fg.value.haveRoomDeposit = !this.fg.value.haveRoomDeposit;
    console.log(this.fg.value.haveRoomDeposit);
  }

  isReserve2() {
    this.fg.value.haveTaxInvoice = !this.fg.value.haveTaxInvoice;
    console.log(this.fg.value.haveTaxInvoice);
  }

  async presentAlertConfirm() {
    if (this.fg.value._id == null) {
      const modal = await this.modalController.create({
        component: CostDetailPage, 
        cssClass: 'dialog-modal-4-regis-info',
      });
      modal.onDidDismiss().then(data => {
        this.ionViewDidEnter()
      })
      modal.present();
    }

    if (this.fg.value._id != null) {
      const alert = await this.alertController.create({
        // header: 'Confirm!',
        message: 'ต้องการ<strong>เพิ่มห้องในกรุ๊ปเดิม</strong>หรือไม่',
        buttons: [
          {
            text: 'ยกเลิก',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'ยืนยัน',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
      await alert.present();
    }
  }
}
