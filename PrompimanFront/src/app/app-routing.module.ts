import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'uistandard',
    loadChildren: () => import('./uistandard/uistandard.module').then( m => m.UIStandardPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'checkin',
    loadChildren: () => import('./checkin/checkin.module').then( m => m.CheckinPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'extra',
    loadChildren: () => import('./extra/extra.module').then( m => m.ExtraPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then( m => m.RoomsPageModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./management/management.module').then( m => m.ManagementPageModule)
  },
  {
    path: 'register-information',
    loadChildren: () => import('./register-information/register-information.module').then( m => m.RegisterInformationPageModule)
  },
  {
    path: 'register-detail/:_id',
    loadChildren: () => import('./register-detail/register-detail.module').then( m => m.RegisterDetailPageModule)
  },
  {
    path: 'register-detail',
    loadChildren: () => import('./register-detail/register-detail.module').then( m => m.RegisterDetailPageModule)
  },
  {
    path: 'dlg-booking-detail',
    loadChildren: () => import('./dlg-booking-detail/dlg-booking-detail.module').then( m => m.DlgBookingDetailPageModule)
  },
  {  
    path: 'booking-information',
    loadChildren: () => import('./booking-information/booking-information.module').then( m => m.BookingInformationPageModule)
  },
  {
    path: 'bill',
    loadChildren: () => import('./bill/bill.module').then( m => m.BillPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
