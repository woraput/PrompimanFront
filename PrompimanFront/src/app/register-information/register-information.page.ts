import { async } from '@angular/core/testing';
import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { CloudSyncService } from '../cloud-sync.service';
import { nationalityData, Nationality } from 'src/models/Member';
import { IonSelect, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register-information',
  templateUrl: './register-information.page.html',
  styleUrls: ['./register-information.page.scss'],
})
export class RegisterInformationPage implements OnInit {
  @ViewChild("nationSelect", { static: false }) private nation: IonSelect;
  public option = 'thai';
  private submitRequested: boolean;
  public Nation: Nationality[] = nationalityData.filter(it => it.Tag == true);
  public OtherNation: Nationality[] = nationalityData;
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];
  public fg: FormGroup;
  public fgTh: FormGroup;
  public fgEn: FormGroup;
  private urlPhoto = "../../assets/image/user-silhouette.png";
  private paramData: string;
  private isEdit = false;
  constructor(private modalCtrl: ModalController, private fb: FormBuilder, private api: CloudSyncService, private navParam: NavParams) {
    this.fg = this.fb.group({
      '_id': '',
      'idCard': '',
      'passportNo': '',
      'th_Prefix': '',
      'th_Firstname': '',
      'th_Lastname': '',
      'en_Prefix': '',
      'en_Firstname': '',
      'en_Lastname': '',
      'sex': '',
      'birthday': '',
      'address': '',
      'issueDate': '',
      'expiryDate': '',
      'telephone': '',
      'job': null,
      'nationality': null,
      'photo': null,
    });

    this.fgTh = this.fb.group({
      'idCard': [null, Validators.required],
      'th_Prefix': [null, Validators.required],
      'th_Firstname': [null, Validators.required],
      'th_Lastname': [null, Validators.required],
      'sex': [null, Validators.required],
      'birthday': [null, Validators.required],
      'address': [null, Validators.required],
      'issueDate': [null, Validators.required],
      'expiryDate': [null, Validators.required],
      'telephone': [null, Validators.required],
      'job': null,
    });

    this.fgEn = this.fb.group({
      'passportNo': [null, Validators.required],
      'en_Prefix': [null, Validators.required],
      'en_Firstname': [null, Validators.required],
      'en_Lastname': [null, Validators.required],
      'sex': [null, Validators.required],
      'birthday': [null, Validators.required],
      'issueDate': [null, Validators.required],
      'expiryDate': [null, Validators.required],
      'telephone': [null, Validators.required],
      'nationality': [null, Validators.required]
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }


  ngOnInit() {
    console.log(this.navParam.get('passed_id'));
    this.paramData = this.navParam.get('passed_id');
    if (this.paramData !== undefined) {

      this.api.getByID(this.paramData).subscribe(data => {
        if (data != null) {
          this.isEdit = true;
          console.log(data);

          this.fg.patchValue(data);
          if (this.fg.get('photo').value !== null) { this.urlPhoto = this.fg.get('photo').value; }

          if (data.nationality == "ไทย") {
            this.fgTh.patchValue(data);
          } else {
            this.option = "nation";
            this.fgEn.patchValue(data);
          }
        }
      });
    }
  }

  public isValidTh(name: string): boolean {
    let ctrl = this.fgTh.get(name);
    if (name == 'anycheck') {
      ctrl = this.fgTh;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public isValidEn(name: string): boolean {
    let ctrl = this.fgEn.get(name);
    if (name == 'anycheck') {
      ctrl = this.fgEn;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public handleSubmit() {
    console.log(this.fgTh.get('issueDate').value);
    
    this.submitRequested = true;
    this.datetimeComponent.forEach(it => it.submitRequest());

    if (this.isEdit) {
      if (this.fg.get('nationality').value === "ไทย") {
        this.editMember(this.fgTh);
      } else {
        this.editMember(this.fgEn);
      }
    }
    else if (this.fgTh.valid) {
      this.createMember(this.fgTh);
    }
    else if (this.fgEn.valid) {
      this.createMember(this.fgEn);
    }
    else {
      console.log("invalid");
    }

  }

  private editMember(fgType: FormGroup) {
    this.fg.patchValue(fgType.value);
    this.api.editMember(this.fg.value).subscribe(data => {
      if (data != null) {
        console.log("edit success: ", data.isSuccess);
      }
    });
    this.modalCtrl.dismiss();
  }

  private createMember(fgType: FormGroup) {
    this.fg.patchValue(fgType.value);
    this.api.createMember(this.fg.value).subscribe(data => {
      console.log(this.fg.value);
      
      if (data != null) {
        console.log("create success: }", data.isSuccess);
      }
    });
    this.modalCtrl.dismiss();
  }

  change(event) {

    if (event.detail.value == 'สัญชาติอื่นๆ') {
      this.fg.get('nationality').setValue(null);
      this.nation.placeholder = "เลือก";
      this.Nation = this.OtherNation;
    }
  }


  // alertNotFoundPlant() {
  //   const notFoundPlant = this.alertCtrl.create({
  //     title: 'ระบุชื่อพืชอื่นๆที่ต้องการเพิ่ม',
  //     inputs: [
  //       {
  //         name: 'userName',
  //         placeholder: 'Username'
  //       },
  //     ],
  //     buttons: [
  //       "ยกเลิก",
  //       {
  //         text: "ยืนยัน",
  //         handler: data => {
  //           this.addOtherPlantMedthod(data.userName, this.searchListData);
  //         },
  //       },
  //     ]
  //   });
  //   notFoundPlant.present();
  // }

  segmentChanged() { }

}
