import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CloudSyncService } from '../cloud-sync.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.page.html',
  styleUrls: ['../app.component.scss'],
})
export class RegisterDetailPage implements OnInit {

  public fg: FormGroup;
  public myId = null;

  constructor(private fb: FormBuilder, private cloud: CloudSyncService, private activatedRoute: ActivatedRoute) {
    this.fg = this.fb.group({
      'idCard': [null],
      'th_Prefix': [null],
      'th_Firstname': [null],
      'th_Lastname': [null],
      'en_Prefix': [null],
      'en_Firstname': [null],
      'en_Lastname': [null],
      'birthday': [null],
      'address': [null],
      'issueDate': [null],
      'expiryDate': [null],
      'telephone': [null],
      'job': [null],
      'sex': [null],
      'photo': [null],
      'passportNo': [null],
    });

    // this.cloud.get().subscribe(data => {
    //   console.log('service: ', data);
    // });
    let item = this.cloud.get();
    console.log(item);

  }


  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
    console.log(this.myId);
  }

}
