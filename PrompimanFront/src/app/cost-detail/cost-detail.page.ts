import { Component, OnInit } from '@angular/core';
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
  public isIndeterminate: boolean;
  public masterCheck: boolean;
  public checkBoxList: any;

  constructor() {
    console.log(this.masterCheck);

    this.checkBoxList = [
      {
        'room': '201',
        'roomDetail': [
          {
            'name': 'ค่าห้อง', 'price': 600, 'isPaid': false, 'isChecked': true,
          },
          {
            'name': 'อาหารเช้า', 'price': 120, 'isPaid': true, 'isChecked': false,
          },
          {
            'name': 'เสริมเตียง', 'price': 100, 'isPaid': true, 'isChecked': false,
          }
        ],
      },
      {
        'room': '202',
        'roomDetail': [
          {
            'name': 'ค่าห้อง', 'price': 1500, 'isPaid': true, 'isChecked': false,
          },
          {
            'name': 'อาหารเช้า', 'price': 100, 'isPaid': true, 'isChecked': false,
          },
          {
            'name': 'เสริมเตียง', 'price': 20, 'isPaid': true, 'isChecked': false,
          }
        ]
      }
    ];
    console.log(this.checkBoxList);
    console.log(this.checkBoxList[0].roomDetail[0]);
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
  }

  checkMaster() {
    console.log(this.masterCheck); // false
    console.log(this.checkBoxList);

    setTimeout(() => {
      this.checkBoxList.forEach(obj => {
        obj.roomDetail.forEach(item => {
          item.isChecked = this.masterCheck;
          console.log(this.masterCheck);
        });
      });
    });
  }

  checkEvent(event) {
    console.log(event);
    let totalItem = this.checkBoxList.length;
    console.log(totalItem);

    if (event.detail.checked == false) {
      this.masterCheck = false;
    }
    if (event.detail.checked == true) {
      this.masterCheck = true;
    }
  }

}
