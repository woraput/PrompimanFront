import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterInformationPage } from '../register-information/register-information.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async register() {
    const modal = await this.modalController.create({
      component: RegisterInformationPage
    });
    return await modal.present();
  }


}
