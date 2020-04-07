import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterInformationPageRoutingModule } from './register-information-routing.module';

import { RegisterInformationPage } from './register-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterInformationPageRoutingModule
  ],
  declarations: [RegisterInformationPage]
})
export class RegisterInformationPageModule {}
