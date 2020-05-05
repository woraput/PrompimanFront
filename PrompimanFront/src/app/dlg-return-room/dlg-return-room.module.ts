import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgReturnRoomPageRoutingModule } from './dlg-return-room-routing.module';

import { DlgReturnRoomPage } from './dlg-return-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgReturnRoomPageRoutingModule
  ],
  declarations: [DlgReturnRoomPage]
})
export class DlgReturnRoomPageModule {}
