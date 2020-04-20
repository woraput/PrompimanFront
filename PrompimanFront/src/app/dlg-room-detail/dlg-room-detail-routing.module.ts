import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlgRoomDetailPage } from './dlg-room-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DlgRoomDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlgRoomDetailPageRoutingModule {}
