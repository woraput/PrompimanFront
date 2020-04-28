import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlgSearchMemberPage } from './dlg-search-member.page';

const routes: Routes = [
  {
    path: '',
    component: DlgSearchMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlgSearchMemberPageRoutingModule {}
