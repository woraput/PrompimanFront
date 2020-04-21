import { Component, OnInit, ViewChildren, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';
import { CloudSyncService } from '../cloud-sync.service';
import { Reservation } from 'src/models/reservation';
import { AlertController, ModalController } from '@ionic/angular';
import { BookingCancelPage } from '../booking-cancel/booking-cancel.page';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.page.html',
  styleUrls: ['../app.component.scss'],
})
export class BookingDetailPage implements OnInit {
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];

  public fg: FormGroup;
  public isCancel2: string;
  public _id: string;
  public listdataReservation: any = {};
  public roomslength: number;
  private submitRequested: boolean;
  public roomsnumber: [] = [];
  public addreserve: boolean = false;

  constructor(private fb: FormBuilder, private modalController: ModalController, public router: Router, private cloud: CloudSyncService, private activatedRoute: ActivatedRoute,
    public alertController: AlertController, private clound: CloudSyncService) {
    this.isCancel2 = this.activatedRoute.snapshot.paramMap.get('isCancel');
    this._id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.fg = this.fb.group({
      'name': ['', Validators.required],
      'telephone': ['', Validators.required],
      'checkInDate': ['', Validators.required],
      'checkOutDate': ['', Validators.required],
      'rooms': [],
      'reserve': ['', Validators.required],
      'active': ['', Validators.required],
      'note': ['', Validators.required],
    })

    this.cloud.getByIDReservation(this._id).subscribe(data => {
      if (data != null) {
        this.listdataReservation = data;
        this.fg.patchValue(data);
        console.log(this.fg.value);
        // this.fg.get('rooms').setValue(this.fg.get('rooms').value.length);
        this.roomslength = this.listdataReservation.rooms.length;
        console.log(this.fg.get('rooms').value);
        this.roomsnumber = this.fg.get('rooms').value;
      }
    });
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
    this.datetimeComponent.forEach(it => it.submitRequest());
    console.log(this.fg.value);
    if (this.fg.valid) {
    }
  }

  room() {
    // './select-rooms.page.html'
    // this.router.navigate(['/booking-information']);
    this.router.navigate(['./select-rooms',
      this.fg.get('checkInDate').value,
      this.fg.get('rooms').value,
      this.fg.get('checkOutDate').value]);

    console.log(this.fg.get('checkInDate').value);
    console.log(this.fg.get('checkOutDate').value);
    console.log(this.fg.get('rooms').value);
    // this.clound.timePeriod.checkInDate = this.fg.get('checkInDate').value;
    // this.clound.timePeriod.checkOutDate = this.fg.get('checkOutDate').value;    
  }

  ngOnInit() {
  }

  async cancelReservation() {
    const modal = await this.modalController.create({
      component: BookingCancelPage,
      cssClass: 'dialog-modal-4-regis-info',
    });
    return await modal.present();
  }

  isReserve() {
    this.addreserve = !this.addreserve;
  }
}
