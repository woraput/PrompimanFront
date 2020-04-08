import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterInformationPage } from '../register-information/register-information.page';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CloudSyncService } from '../cloud-sync.service';
import { member } from 'src/models/member';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public fg: FormGroup;
  // public foo = 'aurora';
  public listdata: member[] = [];
  name: any;
  constructor(private modalController: ModalController, private fb: FormBuilder, private nav: NavController, public router: Router, private cloud: CloudSyncService) {
    // this.fg = this.fb.group({
    //   'CreationDateTime': [''],
    //   '_id': [''],
    //   'Th_Firstname': [''],
    //   'Th_Lastname': [''],
    //   'Telephone': [''],
    // })
    this.cloud.getuser(1, 10).subscribe(data => {
      if (data != null) {
        this.listdata = data
        console.log("data", data);
        console.log("listdata", this.listdata);
      }
    });
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

  // todo() {
  //   this.nav.navigateForward(['/register-detail/${this.foo}'])
  //   console.log(this.foo);
  //   ;
  // }

}
