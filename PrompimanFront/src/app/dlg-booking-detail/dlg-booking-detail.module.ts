import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgBookingDetailPageRoutingModule } from './dlg-booking-detail-routing.module';

import { DlgBookingDetailPage } from './dlg-booking-detail.page';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DlgBookingDetailPageRoutingModule
  ],
  declarations: [DlgBookingDetailPage]
})
export class DlgBookingDetailPageModule {}
