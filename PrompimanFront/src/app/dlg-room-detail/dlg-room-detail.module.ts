import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgRoomDetailPageRoutingModule } from './dlg-room-detail-routing.module';

import { DlgRoomDetailPage } from './dlg-room-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgRoomDetailPageRoutingModule
  ],
  declarations: [DlgRoomDetailPage]
})
export class DlgRoomDetailPageModule {}
