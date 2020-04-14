import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudSyncService } from '../cloud-sync.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/models/Member';
import { ModalController } from '@ionic/angular';
import { RegisterInformationPage } from '../register-information/register-information.page';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.page.html',
  styleUrls: ['../app.component.scss'],
})
export class RegisterDetailPage implements OnInit {

  public fg: FormGroup;
  public _id: string;
  public listdata: any = {};

  constructor(private fb: FormBuilder, private modalController: ModalController, private cloud: CloudSyncService, private activatedRoute: ActivatedRoute) {
    // this.fg = this.fb.group({
    //   'idCard': [null],
    //   'th_Prefix': [null],
    //   'th_Firstname': [null],
    //   'th_Lastname': [null],
    //   'en_Prefix': [null],
    //   'en_Firstname': [null],
    //   'en_Lastname': [null],
    //   'birthday': [null],
    //   'address': [null],
    //   'issueDate': [null],
    //   'expiryDate': [null],
    //   'telephone': [null],
    //   'job': [null],
    //   'sex': [null],
    //   'photo': [null],
    //   'passportNo': [null],
    // });

    this._id = this.activatedRoute.snapshot.paramMap.get('_id');
    console.log('_id is:', this._id);

    this.cloud.getByID(this._id).subscribe(data => {
      if (data != null) {
        this.listdata = data
        console.log('getByID', this.listdata);
        // console.log('idCard', this.listdata.idCard);
      }
    })
  }

  async editMember() {
    const modal = await this.modalController.create({
      component: RegisterInformationPage,
      cssClass: 'dialog-modal-4-regis-info',
      componentProps: {
        passed_id: this._id
      }
    });
    return await modal.present();
  }

  ngOnInit() {

  }

  handleSubmit() {

  }

}
