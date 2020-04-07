import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterInformationPageRoutingModule } from './register-information-routing.module';

import { RegisterInformationPage } from './register-information.page';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterInformationPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [RegisterInformationPage]
})
export class RegisterInformationPageModule { }
