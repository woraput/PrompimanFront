import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingInformationPageRoutingModule } from './booking-information-routing.module';

import { BookingInformationPage } from './booking-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingInformationPageRoutingModule
  ],
  declarations: [BookingInformationPage]
})
export class BookingInformationPageModule {}
