import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingDetailPageRoutingModule } from './booking-detail-routing.module';

import { BookingDetailPage } from './booking-detail.page';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    BookingDetailPageRoutingModule,
  ],
  declarations: [BookingDetailPage]
})
export class BookingDetailPageModule {}
