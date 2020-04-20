import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CloudSyncService } from '../cloud-sync.service';
import { Reservation } from 'src/models/reservation';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  public reservation: Reservation[] = [];
  public searchBar: FormControl;



  constructor(private modalController: ModalController, public router: Router, public alertController: AlertController, private cloud: CloudSyncService) {
    this.searchBar = new FormControl('');
  }

  ionViewDidEnter() {
    this.cloud.getReservation().subscribe(data => {
      console.log(data);
      this.reservation = data;
      console.log(this.reservation);
    });
  }

  ngOnInit() {
  }
  // let test = this.reservation[0]
  // console.log(test.name);
  // // console.log(this.roomCount);

  // for (let index = 0; index < this.reservation.length; index++) {
  //   // this.roomCount =+ this.reservation[index].rooms.length;
  //   console.log(this.reservation[index].rooms.length);
  //   this.roomCount += Number(this.reservation[index].rooms.length);
  //   // console.log(index , "/",this.reservation[index].rooms  );
  //       }
  // console.log(this.roomCount);

  async confirmMember() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการจองห้อง',
      buttons: [
        {
          text: 'ยกเลิก',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('textCancel');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            console.log('ConfirmOkay');
          }
        }
      ]
    });
    await alert.present();
  }

  bookinginformation() {
    this.router.navigate(['/booking-information']);

  }
  searchReservation(searchBar: string) {
    console.log(searchBar);
    this.cloud.searchReservation(searchBar).subscribe(data => {
      this.reservation = data;
    });
  }
}
