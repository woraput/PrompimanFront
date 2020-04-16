import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudSyncService } from '../cloud-sync.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['../app.component.scss'],
})
export class BillPage implements OnInit {
  public fg: FormGroup;
  // myvalue;
  public text: string;
  public amount: number = 1;
  public total: number = 0;
  public allTotal: number = 0;
  public reserveCalcutate: number = 0;
  public net: number = 0;
  public sendReserve: number = 0;

  constructor(private fb: FormBuilder, private clound: CloudSyncService, private activatedRoute: ActivatedRoute) {
    this.fg = this.fb.group({
      'name': '',
      'telephone': '',
      'checkInDate': '',
      'checkOutDate': '',
      // 'rooms': SelectRoomsPage.CreateFormGroup(this.fg),
      'reserve': '',
    });
    this.text = this.activatedRoute.snapshot.paramMap.get('text');
  }

  ngOnInit() {
    // this.myvalue = this.clound.dataPass;
    // this.fg.setValue(this.myvalue);

    this.fg.setValue(this.clound.dataPass);
    console.log(this.fg.value);
    console.log(this.fg.get('name').value);

    this.sendReserve = this.fg.get('reserve').value;
    console.log(this.sendReserve);

    this.total = (this.fg.get('reserve').value * this.amount)
    console.log(this.total);

    // for (let index = 1; index < 6; index++) {
    //   this.total = (this.fg.get('reserve').value * index)
    //   console.log(this.total);
    //   this.allTotal += this.total;
    // }
    this.allTotal += this.total;
    console.log(this.allTotal);

    this.net = this.allTotal + this.reserveCalcutate
  }

  handleSubmit() {
  }

}
