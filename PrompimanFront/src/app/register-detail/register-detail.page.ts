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
  private urlPhoto = "../../assets/image/user-silhouette.png";

  constructor(private fb: FormBuilder, private modalController: ModalController, private cloud: CloudSyncService, private activatedRoute: ActivatedRoute) {
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.cloud.getByID(this._id).subscribe(data => {
      if (data != null) {
        this.listdata = data;
        if (this.listdata.photo !== null) { this.urlPhoto = this.listdata.photo; }
      }
    });
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
