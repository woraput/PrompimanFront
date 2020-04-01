import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UIStandardPageRoutingModule } from './uistandard-routing.module';

import { UIStandardPage } from './uistandard.page';
import { DisplayDatePipe } from '../pipe/displayDate/display-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UIStandardPageRoutingModule
  ],
  declarations: [UIStandardPage, DisplayDatePipe],
})
export class UIStandardPageModule {}
