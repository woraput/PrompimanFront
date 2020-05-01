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

  public allRoom = [
    {
      'room': '201',
      'roomDetail': [
        { 'name': 'ค่าห้อง', 'price': 600, 'isPaid': false },
        { 'name': 'อาหารเช้า', 'price': 120, 'isPaid': true },
        { 'name': 'เสริมเตียง', 'price': 100, 'isPaid': true }
      ]
    },
    {
      'room': '202',
      'roomDetail': [
        { 'name': 'ค่าห้อง', 'price': 1500, 'isPaid': true },
        { 'name': 'อาหารเช้า', 'price': 10, 'isPaid': true },
        { 'name': 'เสริมเตียง', 'price': 20, 'isPaid': true }
      ]
    }
  ];

  constructor() {
    console.log(this.allRoom);
    console.log(this.allRoom[0].roomDetail[0]);
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

}
