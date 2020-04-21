import { DlgSelectRoomsDetailPageModule } from './dlg-select-rooms-detail/dlg-select-rooms-detail.module';
import { RegisterInformationPageModule } from './register-information/register-information.module';
import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterPageModule } from './register/register.module';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookingDetailPageModule } from './booking-detail/booking-detail.module';
import { DlgRoomDetailPageModule } from './dlg-room-detail/dlg-room-detail.module';
import { BookingCancelPageModule } from './booking-cancel/booking-cancel.module';
import { BillPageModule } from './bill/bill.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [

  ],
  imports: [NgxPaginationModule,
    FormsModule,
    RegisterPageModule,
    RegisterInformationPageModule,
    BookingDetailPageModule,
    DlgSelectRoomsDetailPageModule,
    BookingCancelPageModule,
    DlgRoomDetailPageModule,
    BillPageModule,
    MbscModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
