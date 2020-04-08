import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterInformationPage } from '../register-information/register-information.page';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CloudSyncService } from '../cloud-sync.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public fg: FormGroup;
  listdata:any;
  constructor(private modalController: ModalController, private fb: FormBuilder, private cloud: CloudSyncService) {
    this.fg = this.fb.group({
      'CreationDateTime': [''],
      '_id': [''],
      'Th_Firstname': [''],
      'Th_Lastname': [''],
      'Telephone': [''],
    })
    this.cloud.getuser(1, 10).subscribe(data => {
      console.log("data",data);
      this.listdata = data
      console.log("listdata",this.listdata);      
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


}
