import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostDetailPageRoutingModule } from './cost-detail-routing.module';

import { CostDetailPage } from './cost-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CostDetailPageRoutingModule
  ],
  declarations: [CostDetailPage]
})
export class CostDetailPageModule {}
