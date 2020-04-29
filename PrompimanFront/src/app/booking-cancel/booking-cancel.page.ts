import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CloudSyncService } from '../cloud-sync.service';
import { NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-cancel',
  templateUrl: './booking-cancel.page.html',
  styleUrls: ['../app.component.scss'],
})
export class BookingCancelPage implements OnInit {
  public fg: FormGroup;
  private submitRequested: boolean;
  public _id: string;
  public isOk: boolean;


  constructor(private fb: FormBuilder, private cloud: CloudSyncService, public navParam: NavParams, public router: Router, public modaLCtrl: ModalController) {
    this._id = this.navParam.get('_id');
    console.log(this._id);


    this.fg = this.fb.group({
      'note': [null, Validators.required],
    })
  }

  public isValid(name: string): boolean {
    var ctrl = this.fg.get(name);
    if (name == 'anycheck') {
      ctrl = this.fg;
      return ctrl.errors && ctrl.errors.anycheck && (ctrl.dirty || this.submitRequested);
    }
    return ctrl.invalid && (ctrl.dirty || this.submitRequested);
  }

  public handleSubmit() {
    this.submitRequested = true;
    this.isOk = true;
    // this.datetimeComponent.forEach(it => it.submitRequest());
    console.log(this.fg.valid);
    console.log(this.fg.value);
    if (this.fg.valid) {
      if (this.fg.value == null) {
      }
      this.cloud.cancelReservation(this._id, this.fg.get('note').value).subscribe(data => {
        this.modaLCtrl.dismiss(this.isOk)
      });
    }
  }

  cancel() {
    this.modaLCtrl.dismiss()
    // this.router.navigate(['/booking-detail']);

  }

  ngOnInit() {
  }

}
