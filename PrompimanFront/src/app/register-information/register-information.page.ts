import { Component, OnInit, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { CloudSyncService } from '../cloud-sync.service';
import { nationalityData, Nationality } from 'src/models/Member';
import { IonSelect, NavParams } from '@ionic/angular';

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
  private paramData: string;
  constructor(private fb: FormBuilder, private api: CloudSyncService, private navParam: NavParams) {
    this.fg = this.fb.group({
      '_id': null,
      'idCard': ['', Validators.required],
      'passportNo': ['', Validators.required],
      'th_Prefix': ['', Validators.required],
      'th_Firstname': ['', Validators.required],
      'th_Lastname': ['', Validators.required],
      'en_Prefix': ['', Validators.required],
      'en_Firstname': ['', Validators.required],
      'en_Lastname': ['', Validators.required],
      'sex': ['', Validators.required],
      'birthday': ['', Validators.required],
      'address': ['', Validators.required],
      'issueDate': ['', Validators.required],
      'expiryDate': ['', Validators.required],
      'telephone': ['', Validators.required],
      'job': null,
      'nationality': null,
      'photo': null,
    });
  }

  public isValid(name: string): boolean {
    let ctrl = this.fg.get(name);
    if (name == 'anycheck') {
      ctrl = this.fg;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.datetimeComponent.forEach(it => it.submitRequest());

    this.fg.get("photo").setValue("aaaaa");
    this.fg.get("passportNo").setValue("5555");
    console.log(this.fg);

    if (this.fg.valid) {
      console.log("button");
      this.api.createMember(this.fg.value).subscribe(data => {
        if (data != null) {
          console.log("ok");
        }
      })
    }
  }

  change(event) {

    if (event.detail.value == 'สัญชาติอื่นๆ') {
      this.fg.get('nationality').setValue(null);
      this.nation.placeholder = "เลือก";
      this.Nation = this.OtherNation;
    }
  }

  ngOnInit() {
    // console.log(this.navParam.get('passed_id'));
    // this.paramData = this.navParam.get('passed_id');
    // if (this.paramData != undefined) {

    //   this.api.getByID(this.paramData).subscribe(date => {
    //     if (date != null) {
    //       let member = date;
    //       this.fg.patchValue(member);
    //     }
    //   });
    // }
    this.api.getByID("637218721923017536").subscribe(date => {
      if (date != null) {
        let member = date;
        this.fg.patchValue(member);
      }
    });
  }


  segmentChanged() { }

}
