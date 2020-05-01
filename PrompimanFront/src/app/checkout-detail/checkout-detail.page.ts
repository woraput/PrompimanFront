import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.page.html',
  styleUrls: ['./checkout-detail.page.scss'],
})
export class CheckoutDetailPage implements OnInit {
  private urlPhoto = "../../assets/image/user-silhouette.png";

  constructor() { }

  ngOnInit() {
  }

}
