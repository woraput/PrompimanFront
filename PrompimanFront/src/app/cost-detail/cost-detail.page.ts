import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { RoomActivate, Expense } from 'src/models/checkin';
// import { Summm } from 'src/models/reservation';

@Component({
  selector: 'app-cost-detail',
  templateUrl: './cost-detail.page.html',
  styleUrls: ['./cost-detail.page.scss'],
})

export class CostDetailPage implements OnInit {
  public masterCheck: boolean;
  public roomsAct: RoomActivate[] = [];
  public cost: Expense[] = [];
  public totalCost: number;
  public paid: number;
  public remaining: number;
  public costSelect: number = 0;

  constructor(private navParams: NavParams, private modalCtrl: ModalController) {
  }

  change2(item2, roomNo) {
    console.log('roomNo' + roomNo);
    console.log('Expense' + item2);
    let roomInd = this.roomsAct.findIndex(it => it.roomNo == roomNo);
    let find = this.cost.findIndex(it => it.name == item2.name);

    console.log(roomInd);
    console.log(find);

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
  }

  ngOnInit() {
    this.masterCheck = true;
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
        if (it.isSelected && (it.isPaid == false)) {
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

}
