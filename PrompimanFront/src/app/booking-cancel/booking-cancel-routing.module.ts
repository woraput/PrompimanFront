import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingCancelPage } from './booking-cancel.page';

const routes: Routes = [
  {
    path: '',
    component: BookingCancelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingCancelPageRoutingModule {}
