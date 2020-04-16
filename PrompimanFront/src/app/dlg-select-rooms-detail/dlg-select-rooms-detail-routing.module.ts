import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlgSelectRoomsDetailPage } from './dlg-select-rooms-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DlgSelectRoomsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlgSelectRoomsDetailPageRoutingModule {}
