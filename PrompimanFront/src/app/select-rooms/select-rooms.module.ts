import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRoomsPageRoutingModule } from './select-rooms-routing.module';

import { SelectRoomsPage } from './select-rooms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRoomsPageRoutingModule
  ],
  declarations: [SelectRoomsPage]
})
export class SelectRoomsPageModule {}
