import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {


  constructor(private modalController: ModalController, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  // editMember(isCancel : string) {
  //   this.router.navigate(['/booking-detail', isCancel]);
  //   console.log(isCancel);
    
  // }

  // cancelMember() {
  //   this.router.navigate(['/booking-detail']);
  // }

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
}
