import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckinDetailPage } from './checkin-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CheckinDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckinDetailPageRoutingModule {}
