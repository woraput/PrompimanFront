import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgReturnRoomPageRoutingModule } from './dlg-return-room-routing.module';

import { DlgReturnRoomPage } from './dlg-return-room.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgReturnRoomPageRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ComponentsModule,
  ],
  declarations: [DlgReturnRoomPage]
})
export class DlgReturnRoomPageModule {}
