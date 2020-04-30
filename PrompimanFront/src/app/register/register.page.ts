import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterInformationPage } from '../register-information/register-information.page';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CloudSyncService } from '../cloud-sync.service';
import { Paging } from 'src/models/Member';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../app.component.scss'],
})
export class RegisterPage implements OnInit {

  public fg: FormGroup;
  public paging: Paging = new Paging;
  p: number = 1;
  public searchBar: FormControl;


  constructor(private modalController: ModalController, private fb: FormBuilder, private nav: NavController, public router: Router, private cloud: CloudSyncService) {
    this.searchBar = new FormControl('');

  }

  ionViewDidEnter() {
    this.getPageUsers(this.p);

  }


  ngOnInit() {
  }

  async register() {
    const modal = await this.modalController.create({
      component: RegisterInformationPage,
      cssClass: 'dialog-modal-4-regis-info',
    });
    modal.onDidDismiss().then(data => {
      this.ionViewDidEnter()
    })
    modal.present();
  }


  handleSubmit() {
  }

  getPageUsers(p: number) {
    this.cloud.getuser(p, 10).subscribe(data => {
      this.paging = data;
      console.log(this.paging.members);
      console.log(this.paging.count);
      console.log(this.paging.page);
    });
  }

  search(searchBar: string) {
    this.p = 1;
    console.log(searchBar);
    this.cloud.search(this.p, 10, searchBar).subscribe(data => {
      this.paging = data;
      console.log(this.paging.members);
      console.log(this.paging.count);
      console.log(this.paging.page);
    });
  }
}
