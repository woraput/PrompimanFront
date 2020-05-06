import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterDetailPageRoutingModule } from './master-detail-routing.module';

import { MasterDetailPage } from './master-detail.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasterDetailPageRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [MasterDetailPage]
})
export class MasterDetailPageModule { }
