import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UIStandardPage } from './uistandard.page';

const routes: Routes = [
  {
    path: '',
    component: UIStandardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIStandardPageRoutingModule {}
