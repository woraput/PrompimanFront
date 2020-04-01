import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-uistandard',
  templateUrl: './uistandard.page.html',
  styleUrls: ['../app.component.scss']
})
export class UIStandardPage implements OnInit {
  date: Date;
  option = "element";
  time: Date;
  todo: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });

  }

  logForm() {
    console.log(this.todo.value)
  }
  ngOnInit() { }

  segmentChanged() { }
  dateSelect(ev) {
    console.log(this.date);
    console.log(ev);
  }
}
