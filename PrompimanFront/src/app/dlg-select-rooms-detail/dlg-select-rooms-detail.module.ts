import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgSelectRoomsDetailPageRoutingModule } from './dlg-select-rooms-detail-routing.module';

import { DlgSelectRoomsDetailPage } from './dlg-select-rooms-detail.page';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgSelectRoomsDetailPageRoutingModule,
  ],
  declarations: [DlgSelectRoomsDetailPage]
})
export class DlgSelectRoomsDetailPageModule { }
