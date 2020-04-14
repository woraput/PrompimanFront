import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgBookingDetailPageRoutingModule } from './dlg-booking-detail-routing.module';

import { DlgBookingDetailPage } from './dlg-booking-detail.page';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    DlgBookingDetailPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DlgBookingDetailPage]
})
export class DlgBookingDetailPageModule {}
