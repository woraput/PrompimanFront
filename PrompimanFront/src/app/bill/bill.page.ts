import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudSyncService } from '../cloud-sync.service';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {
  public fg: FormGroup;
  public text: string;
  public amount: number = 1;
  public total: number = 0;
  public allTotal: number = 0;
  public keyDeposit: number = 0;
  public net: number = 0;
  public sendReserve: number = 0;
  // public addreserve: number = 0;
  public change: number = 0;
  public isOk: boolean;

  constructor(private fb: FormBuilder, private clound: CloudSyncService, private activatedRoute: ActivatedRoute, 
    public router: Router, public navParam: NavParams, public modaLCtrl: ModalController) {
 
    this.text = this.navParam.get('text');
    this.sendReserve = Number(this.navParam.get('reserve'));
    // this.sendReserve = Number(this.navParam.get('addreserve'));

  }

  ngOnInit() {
    this.total = (this.sendReserve * this.amount)
    this.allTotal += this.total;
    this.net = this.allTotal + this.keyDeposit
  }

  ok() {
    this.isOk = true;
    this.modaLCtrl.dismiss(this.isOk);
  }

  cancel(){
    this.modaLCtrl.dismiss();
  }

  onChangeValue(event) {
    let money = Number(event.detail.value);
    this.change = money - this.net;
  }
}
