import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRoomsPage } from './select-rooms.page';

const routes: Routes = [
  {
    path: '',
    component: SelectRoomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRoomsPageRoutingModule {}
