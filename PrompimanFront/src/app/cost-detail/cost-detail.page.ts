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
  public roomsActBySelect: RoomActivate[] = [];
  public cost: Expense[] = [];
  public totalCost: number;
  public paid: number;
  public remaining: number;
  public costSelect: number = 0;

  constructor(private navParams: NavParams, private router: Router, private modals: ModalController) {
  }

  change2(item2, roomNo) {
    console.log('roomNo', roomNo);
    console.log('Expense', item2);

    let roomInd = this.roomsAct.findIndex(it => it.roomNo == roomNo);
    let find = this.cost.findIndex(it => it.name == item2.name);

    console.log(roomInd);
    console.log(find);
    // if ((this.roomsAct[roomInd]).expenseList[find]) {
    console.log('11111');

    if (find < 0) {
      this.cost.push(item2);
    } else {
      this.cost.splice(find, 1);
    }
    console.log(this.cost);

    let price = 0
    this.cost.forEach(item => {
      price += item.totalCost
    });

    this.costSelect -= price;
    // }
  }


  ngOnInit() {
    this.masterCheck = true;
    this.roomsAct = this.navParams.get('roomActivate');
    console.log(this.roomsAct);

    // this.roomsActBySelect = this.roomsAct;
    // console.log(this.roomsActBySelect);

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

  checkMaster() {
    console.log(this.masterCheck); // false
    console.log(this.roomsAct);

    setTimeout(() => {
      this.roomsAct.forEach(obj => {
        obj.expenseList.forEach(item => {
          item.isSelected = this.masterCheck;
          console.log(this.masterCheck);
        });
      });
    });
  }

  checkEvent(event) {
    console.log(event);
    let totalItem = this.roomsAct.length;
    console.log(totalItem);

    if (event.detail.checked == false) {
      this.masterCheck = false;
    }
    if (event.detail.checked == true) {
      this.masterCheck = true;
    }
  }

  async ok() {
    const modal = await this.modals.create({
      component: BillPage,
      cssClass: 'dialog-modal-4-regis-info',
      componentProps: {
        'text': '',
        'reserve': this.costSelect,
      }
    });
    modal.onWillDismiss().then(data => {
      let isOk = data
      console.log(isOk);
      this.closeModal(this.roomsAct);
      // if (isOk.data) {
      //   // this.router.navigate(['/booking']);
      //   this.modals.dismiss(this.roomsAct);
      // }
    });
    await modal.present();
  }


  closeModal(roomsAct: RoomActivate[]) {

    this.modals.dismiss(roomsAct);
  }
}
