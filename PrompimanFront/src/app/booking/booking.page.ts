import { Component, OnInit, NgZone } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
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
  public _id: string;
  check: boolean;
  private timeoutId: number;
  constructor(public router: Router, public alertController: AlertController, private cloud: CloudSyncService, public zone: NgZone, private navCtrl: NavController) {
    this.searchBar = new FormControl('');
  }

  ionViewDidEnter() {
    this.cloud.getReservation().subscribe(data => {
      console.log(data);
      this.reservation = data;
      console.log('1');
      console.log(this.reservation);
    });
    //   // this.cloud.getReservation().subscribe(data => {
    //   //   console.log(data);
    //   //   this.reservation = data;
    //   // });
    //   // console.log(this.check);
    //   // if (this.check == true) {
    //   //   this.cloud.getReservation().subscribe(data => {
    //   //     console.log(data);
    //   //     this.reservation = data;
    //   //   });
    //   // }
    //   this.cloud.getReservation().subscribe(data => {
    //     console.log(data);
    //     this.reservation = data;
    //   });
  }


  ngOnInit() {
    // this.zone.run(data => {
    // setTimeout(() => {
    // this.ionViewDidEnter()
    // }, 2000);
    // })
    // this.ngOnInit();
    // this.cloud.getReservation().subscribe(data => {
    //   console.log(data);
    //   this.reservation = data;
    // });
  }

  confirmMembers(_id: string) {
    console.log(_id);
    this.confirmMember(_id);
  }

  async confirmMember(_id: string) {
    console.log(_id);
    this._id = _id;
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
            this.cloud.confirmReservation(_id).subscribe(data => {
              console.log('xxxxxxxxxxxxxx', data);
              alert.onDidDismiss().then(data => {
                // this.router.navigate(['/booking']);
                this.zone.run(data => {
                  // this.ngOnInit();
                  this.ionViewDidEnter()
                });
              })
              // setTimeout(() => {
              //   this.ngOnInit();
              // }, 2000);
            });
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
      console.log(this.reservation.length);
    });
  }
}
