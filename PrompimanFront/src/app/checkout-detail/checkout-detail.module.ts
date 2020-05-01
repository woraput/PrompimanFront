import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutDetailPageRoutingModule } from './checkout-detail-routing.module';

import { CheckoutDetailPage } from './checkout-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutDetailPageRoutingModule
  ],
  declarations: [CheckoutDetailPage]
})
export class CheckoutDetailPageModule {}
