import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlgBookingDetailPage } from './dlg-booking-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DlgBookingDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlgBookingDetailPageRoutingModule {}
