import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterInformationPage } from '../register-information/register-information.page';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CloudSyncService } from '../cloud-sync.service';
import { Paging } from 'src/models/Member';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public fg: FormGroup;
  public paging: Paging = new Paging;
  // public currentPage = 1;
  // public page =  this.cloud.getuser(1, 10);
  p: number = 1;

  constructor(private modalController: ModalController, private fb: FormBuilder, private nav: NavController, public router: Router, private cloud: CloudSyncService) {
    this.getPageUsers(1);
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

  getPageUsers(page: number) {
    this.cloud.getuser(1, 10).subscribe(data => {
      this.paging = data;
      console.log(this.paging.members);
      console.log(this.paging.count);
      console.log(this.paging.page);
    });
  }

  // getPageUsers2(page: number) {
  //   console.log(page);
  //         this.cloud.getuser(page, 10).subscribe(data => {
  //           this.paging = data;
  //           console.log(this.paging.members);
  //           console.log(this.paging.count);
  //           console.log(this.paging.page);
  //         });
  // }


}
