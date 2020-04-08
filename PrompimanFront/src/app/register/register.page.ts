import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterInformationPage } from '../register-information/register-information.page';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public fg: FormGroup;

  constructor(private modalController: ModalController, private fb: FormBuilder) {
    this.fg = this.fb.group({
      'CreationDateTime': [''],
      '_id': [''],
      'Th_Firstname': [''],
      'Th_Lastname': [''],
      'Telephone': [''],
    })
  }

  ngOnInit() {
  }

  async register() {
    const modal = await this.modalController.create({
      component: RegisterInformationPage
    });
    return await modal.present();
  }

  handleSubmit() {

  }


}
