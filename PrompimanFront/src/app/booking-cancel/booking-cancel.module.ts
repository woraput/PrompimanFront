import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingCancelPageRoutingModule } from './booking-cancel-routing.module';

import { BookingCancelPage } from './booking-cancel.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingCancelPageRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ComponentsModule,



  ],
  declarations: [BookingCancelPage]
})
export class BookingCancelPageModule {}
