import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgSearchReservationPageRoutingModule } from './dlg-search-reservation-routing.module';

import { DlgSearchReservationPage } from './dlg-search-reservation.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgSearchReservationPageRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,

  ],
  declarations: [DlgSearchReservationPage]
})
export class DlgSearchReservationPageModule {}
