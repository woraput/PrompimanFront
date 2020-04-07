import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.page.html',
  styleUrls: ['../app.component.scss'],
})
export class RegisterDetailPage implements OnInit {

  public fg: FormGroup;

  constructor(private fb: FormBuilder) {
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
  }

  ngOnInit() {
  }

}
