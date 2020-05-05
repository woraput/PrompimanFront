import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlgAddExtraPage } from './dlg-add-extra.page';

const routes: Routes = [
  {
    path: '',
    component: DlgAddExtraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlgAddExtraPageRoutingModule {}
