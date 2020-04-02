import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutPage } from './checkout.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPage
  }
];

@NgModule({
  imports: [ 
    FormsModule,  
    MbscModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutPageRoutingModule {}
