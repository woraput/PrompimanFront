import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostDetailPage } from './cost-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CostDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostDetailPageRoutingModule {}
