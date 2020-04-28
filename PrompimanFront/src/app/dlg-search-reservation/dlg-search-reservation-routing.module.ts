import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlgSearchReservationPage } from './dlg-search-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: DlgSearchReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlgSearchReservationPageRoutingModule {}
