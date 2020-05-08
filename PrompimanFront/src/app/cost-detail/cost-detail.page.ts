import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { RoomActivate, Expense } from 'src/models/checkin';
import { BillPage } from '../bill/bill.page';
import { Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
// import { Summm } from 'src/models/reservation';

@Component({
  selector: 'app-cost-detail',
  templateUrl: './cost-detail.page.html',
  styleUrls: ['./cost-detail.page.scss'],
})

export class CostDetailPage implements OnInit {
  public masterCheck: boolean;
  public roomsAct: RoomActivate[] = [];
  public totalCost: number = 0;
  public paid: number = 0;
  public remaining: number = 0;
  public costSelect: number = 0;

  constructor(private navParams: NavParams, private router: Router, private modals: ModalController) {
  }

  ngOnInit() {
    this.roomsAct = this.navParams.get('roomActivate');
    this.totalCost = this.navParams.get('totalCost');
    this.paid = this.navParams.get('paid');
    this.remaining = this.navParams.get('remaining');
    console.log('roomsAct: ', this.roomsAct);
    this.firstCal();
  }

  firstCal() {
    this.roomsAct.forEach(obj => {
      obj.expenseList.forEach(it => {
        if ((it.isSelected == true) && (it.isPaid == false)) {
          this.costSelect += it.totalCost;
        }
        console.log(this.costSelect);
      });
    });
  }

  change() {
    setTimeout(async () => {
      this.costSelect = 0;
      this.roomsAct.forEach(obj => {
        obj.expenseList.forEach(item => {
          if (item.isSelected && (item.isPaid == false)) {
            this.costSelect += item.totalCost;
          }
          console.log(this.roomsAct);

        });
      });
    }, 100);
  }

  checkMaster() {
    setTimeout(() => {
      this.roomsAct.forEach(obj => {
        obj.expenseList.forEach(item => {
          item.isSelected = this.masterCheck;
          console.log(this.masterCheck);
        });
      });
    });
  }

  async ok() {
    const modal = await this.modals.create({
      component: BillPage,
      cssClass: 'dialog-modal-4-regis-info',
      componentProps: {
        'text': '',
        'reserve': this.costSelect,
        'roomActivate': this.roomsAct
      }
    });
    modal.onWillDismiss().then(data => {
      let isOk = data
      console.log(isOk);
      // this.closeModal(this.roomsAct);
      // if (isOk.data) {
      //   // this.router.navigate(['/booking']);
      this.modals.dismiss(this.roomsAct);
      console.log('2222',this.roomsAct);
      // }
    });
    await modal.present();
  }
  // closeModal(roomsAct: RoomActivate[]) {
  //   this.modals.dismiss(roomsAct);
  // }
}
