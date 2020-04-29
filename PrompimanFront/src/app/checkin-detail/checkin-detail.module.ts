import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinDetailPageRoutingModule } from './checkin-detail-routing.module';

import { CheckinDetailPage } from './checkin-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinDetailPageRoutingModule
  ],
  declarations: [CheckinDetailPage]
})
export class CheckinDetailPageModule {}
