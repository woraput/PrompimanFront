import { Component, OnInit } from '@angular/core';
import { CloudSyncService } from '../cloud-sync.service';
import { Reservation } from 'src/models/checkin';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dlg-search-reservation',
  templateUrl: './dlg-search-reservation.page.html',
  styleUrls: ['./dlg-search-reservation.page.scss'],
})
export class DlgSearchReservationPage implements OnInit {
  public dataReservation: Reservation[] = [];
  p: number = 1;
  public searchBar: FormControl;

  constructor(private cloud: CloudSyncService, public modaLCtrl: ModalController, public router: Router) {
    this.searchBar = new FormControl('');
    this.cloud.getReservation().subscribe(data => {
      console.log(data);
      this.dataReservation = data;
      console.log('1');
      console.log(this.dataReservation);
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // this.cloud.getReservation().subscribe(data => {
    //   console.log(data);
    //   this.dataReservation = data;
    //   console.log('1');
    //   console.log(this.dataReservation);
    // });
  }

  search(searchBar: string) {
    this.p = 1;
    console.log(searchBar);
    this.cloud.searchReservation(searchBar).subscribe(data => {
      this.dataReservation = data;
    });
  }

  cancel() {
    this.modaLCtrl.dismiss();
  }

  confirmReservation(_idReservation: string){
    // this.router.navigate(['/checkin', _id]);
    this.modaLCtrl.dismiss(_idReservation)
    console.log(_idReservation);
    

  }
}
