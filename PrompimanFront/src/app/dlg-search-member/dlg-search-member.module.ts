import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlgSearchMemberPageRoutingModule } from './dlg-search-member-routing.module';

import { DlgSearchMemberPage } from './dlg-search-member.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlgSearchMemberPageRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  declarations: [DlgSearchMemberPage]
})
export class DlgSearchMemberPageModule { }
