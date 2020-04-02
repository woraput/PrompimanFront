import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraPage } from './extra.page';

const routes: Routes = [
  {
    path: '',
    component: ExtraPage
  }
];

@NgModule({
  imports: [ 
    FormsModule,  
    MbscModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraPageRoutingModule {}
