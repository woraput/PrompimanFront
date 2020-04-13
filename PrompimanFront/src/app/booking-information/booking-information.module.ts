import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingInformationPageRoutingModule } from './booking-information-routing.module';

import { BookingInformationPage } from './booking-information.page';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BookingInformationPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [BookingInformationPage]
})
export class BookingInformationPageModule {}
