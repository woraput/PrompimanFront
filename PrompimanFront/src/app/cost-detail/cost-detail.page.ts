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
  //todo add Model (ex.)
  // export class Summm{
  //   name: string
  //   price:number
  // }

  // public Cost : Summm[] = [];
  // public checkBoxList: any;
  // public isIndeterminate: boolean;
  public masterCheck: boolean;
  public roomsAct: RoomActivate[] = [];
  public expenseList: Expense[] = [];
  public totalCost: number;
  public paid: number;
  public remaining: number;

  constructor(private navParams: NavParams, private modalCtrl: ModalController) {
    // this.checkBoxList = [
    //   {
    //     'room': '201',
    //     'roomDetail': [
    //       {
    //         'name': 'ค่าห้อง', 'price': 600, 'isPaid': false, 'isChecked': true,
    //       },
    //       {
    //         'name': 'อาหารเช้า', 'price': 120, 'isPaid': true, 'isChecked': false,
    //       },
    //       {
    //         'name': 'เสริมเตียง', 'price': 100, 'isPaid': true, 'isChecked': false,
    //       }
    //     ],
    //   },
    //   {
    //     'room': '202',
    //     'roomDetail': [
    //       {
    //         'name': 'ค่าห้อง', 'price': 1500, 'isPaid': true, 'isChecked': false,
    //       },
    //       {
    //         'name': 'อาหารเช้า', 'price': 100, 'isPaid': true, 'isChecked': false,
    //       },
    //       {
    //         'name': 'เสริมเตียง', 'price': 20, 'isPaid': true, 'isChecked': false,
    //       }
    //     ]
    //   }
    // ];
  }

  onClick(item2: Expense, room) {
    console.log('item2.isSelected:', item2.isSelected);
    console.log(room);

    let roomInd = this.roomsAct.findIndex(it => it.roomNo == room);
    console.log(roomInd);
    
    if (roomInd < 0) {
      this.roomsAct.push(item2[roomInd]);
    }
    else {
      this.roomsAct.splice(roomInd, 1)
    }
    console.log(this.roomsAct);


    // let expenseInd = this.expenseList.forEach(element => {
    //   element.name == item2.name
    //   console.log(expenseInd);
    // });


  }
  // change(item:Summm, room){
  //   console.log(item);
  //   console.log(room);
  //   //todo: ต้องส่งห้องเข้าไปตอน findIndex ด้วยเพราะจะได้รู้ว่าคือห้องไหน
  //   let find = this.Cost.findIndex(it => it.name == item.name);
  //   console.log(find);
  //   if (find < 0) {
  //     this.Cost.push(item);
  //   }else{
  //     this.Cost.splice(find,1);
  //   }

  //   // this.Cost += price;
  //   console.log(this.Cost);
  //   let price = 0


  //   this.Cost.forEach(item => {
  //     price += item.price
  //   });


  //   console.log(price);

  // }

  ngOnInit() {
    this.roomsAct = this.navParams.get('roomActivate');
    this.totalCost = this.navParams.get('totalCost');
    this.paid = this.navParams.get('paid');
    this.remaining = this.navParams.get('remaining');

    console.log(this.navParams.get('roomActivate'));
    console.log('roomsAct: ', this.roomsAct);
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
