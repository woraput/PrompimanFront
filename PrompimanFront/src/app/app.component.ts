import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'UI-Standard',
      url: '/uistandard',
      icon: 'warning'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'people'
    },
    {
      title: 'Check in',
      url: '/checkin',
      icon: 'log-in'
    },
    {
      title: 'Checkout',
      url: '/checkout',
      icon: 'log-out'
    },
    {
      title: 'Booking',
      url: '/booking',
      icon: 'book'
    },
    {
      title: 'Extra',
      url: '/extra',
      icon: 'pizza'
    },
    {
      title: 'Rooms',
      url: './rooms',
      icon: 'construct'
    },
    {
      title: 'Management',
      url: '/management',
      icon: 'copy'
    },
    {
      title: 'RegisterInformation',
      url: '/register-information',
      icon: 'copy'
    },
    {
      title: 'BookingInformation',
      url: './booking-information',
      icon: 'copy'
    },
    {
      title: 'Bill',
      url: './bill',
      icon: 'copy'
    },
    {
      title: 'dlgBookingDetail',
      url: './dlg-booking-detail',
      icon: 'copy'
    },
  ];

  date: Date;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        page => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
