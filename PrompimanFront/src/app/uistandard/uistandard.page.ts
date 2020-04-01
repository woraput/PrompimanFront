import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uistandard',
  templateUrl: './uistandard.page.html',
  styleUrls: ['../app.component.scss']
})
export class UIStandardPage implements OnInit {
  date: Date;
  time: Date;
  constructor() {
    // this.todo = this.formBuilder.group({
    //   title: ['', Validators.required],
    //   description: [''],
    // });

  }

  ngOnInit() { }

  segmentChanged() { }
  dateSelect(ev) {
    console.log(this.date);
    console.log(ev);
  }
}
