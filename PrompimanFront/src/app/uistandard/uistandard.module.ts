import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UIStandardPageRoutingModule } from './uistandard-routing.module';

import { UIStandardPage } from './uistandard.page';
import { DisplayDatePipe } from '../pipe/displayDate/display-date.pipe';
import { MbscModule } from '@mobiscroll/angular';
@NgModule({
  imports: [
    CommonModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UIStandardPageRoutingModule
  ],
  declarations: [UIStandardPage, DisplayDatePipe],
})
export class UIStandardPageModule { }
