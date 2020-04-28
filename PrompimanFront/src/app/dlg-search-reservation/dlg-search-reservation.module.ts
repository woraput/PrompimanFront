import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgSearchReservationPageRoutingModule } from './dlg-search-reservation-routing.module';

import { DlgSearchReservationPage } from './dlg-search-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgSearchReservationPageRoutingModule
  ],
  declarations: [DlgSearchReservationPage]
})
export class DlgSearchReservationPageModule {}
