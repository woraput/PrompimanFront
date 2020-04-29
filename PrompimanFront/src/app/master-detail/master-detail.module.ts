import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterDetailPageRoutingModule } from './master-detail-routing.module';

import { MasterDetailPage } from './master-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MasterDetailPageRoutingModule
  ],
  declarations: [MasterDetailPage]
})
export class MasterDetailPageModule {}
