import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgAddExtraPageRoutingModule } from './dlg-add-extra-routing.module';

import { DlgAddExtraPage } from './dlg-add-extra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgAddExtraPageRoutingModule
  ],
  declarations: [DlgAddExtraPage]
})
export class DlgAddExtraPageModule {}
