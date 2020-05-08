import { Component, OnInit, ViewChildren, NgZone } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DlgRoomDetailPage } from '../dlg-room-detail/dlg-room-detail.page';
import { RoomSelected, Master, Room } from 'src/models/checkin';
import { CloudSyncService } from '../cloud-sync.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SelectRoomsPage } from '../select-rooms/select-rooms.page';
import { DlgSearchMemberPage } from '../dlg-search-member/dlg-search-member.page';
import { DlgSearchReservationPage } from '../dlg-search-reservation/dlg-search-reservation.page';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { SharingDataService } from '../sharing-data.service';
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
  public listdata: any = {};
  private urlPhoto = "../../assets/image/user-silhouette.png";
  public rommsNumber: RoomSelected[];
  public groupName: string;

  constructor(private shareData: SharingDataService, public alertController: AlertController, private activatedRoute: ActivatedRoute, private modalController: ModalController, private cloud: CloudSyncService, private fb: FormBuilder) {
    this.fg = this.fb.group({
      '_id': [null],
      'memberId': [null],
      'name': [null, Validators.required],
      'telephone': [null, Validators.required],
      'reserve': [0, Validators.required],
      'groupName': [null, Validators.required],
      'checkInDate': [null, Validators.required],
      'checkOutDate': [null, Validators.required],
      'rooms': [null, Validators.required],
      'haveRoomDeposit': [true, Validators.required],
      'haveTaxInvoice': [false, Validators.required],
      'deposit': [0],
      'totalCost': [0],
      'paid': [0],
      'remaining': [0],
      'active': [false],
      // 'creationDateTime': [null],
      // 'lastUpdate': [null],
    })
  }

  ionViewDidEnter() {
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
    this.fg.get('memberId').setValue(this._id);
    console.log("yyyyyyyy", this._id);
    this.cloud.getByID(this._id).subscribe(data => {
      console.log(data);
      if (data != null) {
        this.fg.get('telephone').setValue(data.telephone);
        console.log("uuuuu", this.fg);
        if (data.th_Firstname != null) {
          this.fg.get('name').setValue(data.th_Firstname + "   " + data.th_Lastname);
          console.log(this.fg.get('name').value);
          this.groupName = this.fg.get('name').value
          console.log(' this.groupName1', this.groupName);
        }
        if (data.th_Firstname == "") {
          this.fg.get('name').setValue(data.en_Firstname + "   " + data.en_Lastname);
          console.log(this.fg.get('name').value);
          this.groupName = this.fg.get('name').value
          console.log(' this.groupName2' ,this.groupName);
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
      console.log("xxx", data);
      this._idReservation = data.data;
      this.cloud.getByIDReservation(this._idReservation).subscribe(data => {
        if (data != null) {
          this.fg.get('checkInDate').setValue(data.checkInDate);
          this.fg.get('checkOutDate').setValue(data.checkOutDate);
          this.fg.get('reserve').setValue(data.reserve);
          this.fg.get('rooms').setValue(data.rooms);
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
    })
    modal.present();
  }

  isReserve(event) {
    console.log(this.fg.get('haveRoomDeposit').value);
    console.log('event:' + event.detail.checked);
    this.fg.get('haveRoomDeposit').setValue(event.detail.checked);
    console.log(this.fg.get('haveRoomDeposit').value);
  }

  isReserve2(event) {
    console.log('event:' + event.detail.checked);
    this.fg.get('haveTaxInvoice').setValue(event.detail.checked);
    console.log(this.fg.get('haveTaxInvoice').value);
  }

  presentAlertConfirm() {
    console.log(this.fg.value);
    this.cloud.getIsAlready(this.fg.value.memberId, this.fg.value.groupName).subscribe(data => {
      console.log(data);
      if (data == "0") {
        console.log(data);
        this.goCostDetail()
      }
      if (data == "1") {
        console.log(data);
        this.confirmMaster()
      }
      if (data == "2") {
        console.log(data);
        this.changeGroupName()
      }
    })
  }

  async goCostDetail() {
    let roomAct
    console.log('bbbbbbbbbbbb');
    this.cloud.putGetRoomActLst(this.fg.value).subscribe(data => {
      console.log('5555555555555555555', data);
      if (data != null) {
        console.log('5555555555555555555');
        roomAct = data
        console.log('roomNonaja', roomAct);
      }
    })

    setTimeout(async () => {
      const modal = await this.modalController.create({
        component: CostDetailPage,
        componentProps: {
          roomActivate: roomAct,
          totalCost: this.fg.get('totalCost').value,
          paid: this.fg.get('paid').value,
          remaining: this.fg.get('remaining').value,
        },
        cssClass: 'dialog-modal-4-select-room',
      });
      modal.onDidDismiss().then(dataDismiss => {
      })
      modal.present();
    }, 100);
  }

  async confirmMaster() {
    const alert = await this.alertController.create({
      header: 'เพิ่มห้องต่อ Master เดิม',
      buttons: [
        {
          text: 'ยกเลิก',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('textCancel');
            this.changeGroupName()
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            alert.onDidDismiss().then(data => {
              this.goCostDetail()
            });
            console.log('ConfirmOkay');
          }
        }
      ]
    });
    await alert.present();
  }

  async changeGroupName() {
    const alert = await this.alertController.create({
      header: 'เปลี่ยนชื่อ Group',
      inputs: [
        {
          name: 'changeGroupName',
          type: 'text',
          value: this.fg.get('groupName').value,
        },
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('textCancel');
            // alert.onDidDismiss().then(data => {
            // });
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            alert.onDidDismiss().then(data => {
              console.log("heha",data.data.values.changeGroupName);
              console.log("heha2",this.fg.get('groupName').value);
              if(data.data.values.changeGroupName == this.fg.get('groupName').value){
                  console.log('เหมือน');
                  
              }    
              if(data.data.values.changeGroupName != this.fg.get('groupName').value){
                console.log('ไม่เหมือน');
              }   
            });
            console.log('ConfirmOkay');
          }
        }
      ]
    });
    await alert.present();
  }

  changeNameGroup(event){
    console.log(event.detail.value);   
    this.fg.get('groupName').setValue(event.detail.value);
  }
}
