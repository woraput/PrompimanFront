import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlgReturnRoomPage } from './dlg-return-room.page';

const routes: Routes = [
  {
    path: '',
    component: DlgReturnRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlgReturnRoomPageRoutingModule {}
