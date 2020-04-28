import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinPageRoutingModule } from './checkin-routing.module';

import { CheckinPage } from './checkin.page';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CheckinPageRoutingModule,
    NgxPaginationModule,
    ComponentsModule,

  ],
  declarations: [CheckinPage]
})
export class CheckinPageModule {}
