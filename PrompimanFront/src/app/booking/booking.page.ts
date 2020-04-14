import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor(private modalController: ModalController, public router:Router) { }

  ngOnInit() {
  }

editMember() {
  this.router.navigate(['/booking-detail']);

 
      
  }

  bookinginformation(){
    this.router.navigate(['/booking-information']);

  }
}
