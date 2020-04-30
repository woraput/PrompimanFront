import { Component, OnInit, ViewChildren } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { DlgRoomDetailPage } from '../dlg-room-detail/dlg-room-detail.page';
import { RoomSelected } from 'src/models/reservation';
import { CloudSyncService } from '../cloud-sync.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SelectRoomsPage } from '../select-rooms/select-rooms.page';
import { DlgSearchMemberPage } from '../dlg-search-member/dlg-search-member.page';
import { DlgSearchReservationPage } from '../dlg-search-reservation/dlg-search-reservation.page';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';


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



  constructor(public alertController: AlertController,private modalController: ModalController, private cloud: CloudSyncService, private fb: FormBuilder) {
    this.fg = this.fb.group({
      'name': [null, Validators.required],
      'checkInDate': [null, Validators.required],
      'checkOutDate': [null, Validators.required],
      'rooms': [],
      // 'telephone': [null, Validators.required],
      // 'reserve': [null, Validators.required],
      // 'active': [null, Validators.required],
    })
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
      console.log("ggg");
      console.log(dataReturned);
      if (dataReturned !== null) {
        // let lstRoom = this.fg.get('rooms').value as RoomSelected[];
        // lstRoom.forEach(r => r.setting = this.cloud.settingAllRoom);
        // console.log(this.cloud.lstRoomsSelect);
        // this.fg.get('rooms').patchValue(lstRoom);
      }
    });
    return await modal.present();
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

  // ข้อมูลการจอง
    async dataReservation() {
      const modal = await this.modalController.create({
        component: DlgSearchReservationPage,
        cssClass: 'dialog-modal-4-ch-re-mm',
      });
      modal.onDidDismiss().then(data=>{
        // this.ionViewDidEnter()
      })
      modal.present();
    }

  

  // ค้นหารายชื่อที่เคย register
    async dataMember() {
      const modal = await this.modalController.create({
        component: DlgSearchMemberPage,
        cssClass: 'dialog-modal-4-ch-re-mm',
      });
      modal.onDidDismiss().then(data=>{
        // this.ionViewDidEnter()
      })
      modal.present();
    }
  
    async presentAlertConfirm() {
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
