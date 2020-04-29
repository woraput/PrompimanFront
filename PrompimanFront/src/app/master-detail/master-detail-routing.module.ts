import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterDetailPage } from './master-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MasterDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterDetailPageRoutingModule {}
