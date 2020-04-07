import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterInformationPage } from './register-information.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterInformationPageRoutingModule {}
