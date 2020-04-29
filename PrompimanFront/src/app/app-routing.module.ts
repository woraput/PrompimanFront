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
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'uistandard',
    loadChildren: () => import('./uistandard/uistandard.module').then(m => m.UIStandardPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'checkin',
    loadChildren: () => import('./checkin/checkin.module').then(m => m.CheckinPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingPageModule)
  },
  {
    path: 'extra',
    loadChildren: () => import('./extra/extra.module').then(m => m.ExtraPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsPageModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./management/management.module').then(m => m.ManagementPageModule)
  },
  {
    path: 'register-information',
    loadChildren: () => import('./register-information/register-information.module').then(m => m.RegisterInformationPageModule)
  },
  {
    path: 'register-detail/:_id',
    loadChildren: () => import('./register-detail/register-detail.module').then(m => m.RegisterDetailPageModule)
  },
  {
    path: 'register-detail',
    loadChildren: () => import('./register-detail/register-detail.module').then(m => m.RegisterDetailPageModule)
  },
  {
    path: 'booking-information',
    loadChildren: () => import('./booking-information/booking-information.module').then(m => m.BookingInformationPageModule)
  },
  {
    path: 'bill',
    loadChildren: () => import('./bill/bill.module').then(m => m.BillPageModule)
  },
  {
    path: 'bill/:text',
    loadChildren: () => import('./bill/bill.module').then(m => m.BillPageModule)
  },
  {
    path: 'booking-detail',
    loadChildren: () => import('./booking-detail/booking-detail.module').then(m => m.BookingDetailPageModule)
  },
  {
    path: 'booking-detail/:_id/:isCancel',
    loadChildren: () => import('./booking-detail/booking-detail.module').then(m => m.BookingDetailPageModule)
  },
  {
    path: 'select-rooms/:checkInDate/:checkOutDate',
    loadChildren: () => import('./select-rooms/select-rooms.module').then(m => m.SelectRoomsPageModule)
  },
  {
    path: 'select-rooms',
    loadChildren: () => import('./select-rooms/select-rooms.module').then(m => m.SelectRoomsPageModule)
  },
  {
    path: 'dlg-select-rooms-detail',
    loadChildren: () => import('./dlg-select-rooms-detail/dlg-select-rooms-detail.module').then(m => m.DlgSelectRoomsDetailPageModule)
  },
  {
    path: 'dlg-room-detail',
    loadChildren: () => import('./dlg-room-detail/dlg-room-detail.module').then(m => m.DlgRoomDetailPageModule)
  },
  {
    path: 'booking-cancel',
    loadChildren: () => import('./booking-cancel/booking-cancel.module').then(m => m.BookingCancelPageModule)
  },
  {
    path: 'dlg-search-member',
    loadChildren: () => import('./dlg-search-member/dlg-search-member.module').then(m => m.DlgSearchMemberPageModule)
  },
  {
    path: 'dlg-search-reservation',
    loadChildren: () => import('./dlg-search-reservation/dlg-search-reservation.module').then(m => m.DlgSearchReservationPageModule)
  },
  {
    path: 'master-detail',
    loadChildren: () => import('./master-detail/master-detail.module').then(m => m.MasterDetailPageModule)
  },
  {
    path: 'checkin-detail',
    loadChildren: () => import('./checkin-detail/checkin-detail.module').then(m => m.CheckinDetailPageModule)
  },
  {
    path: 'cost-detail',
    loadChildren: () => import('./cost-detail/cost-detail.module').then(m => m.CostDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
