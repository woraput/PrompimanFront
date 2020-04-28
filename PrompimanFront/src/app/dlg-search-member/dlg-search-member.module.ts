import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgSearchMemberPageRoutingModule } from './dlg-search-member-routing.module';

import { DlgSearchMemberPage } from './dlg-search-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgSearchMemberPageRoutingModule
  ],
  declarations: [DlgSearchMemberPage]
})
export class DlgSearchMemberPageModule {}
