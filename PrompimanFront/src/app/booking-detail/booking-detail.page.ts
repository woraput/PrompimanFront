import { Component, OnInit, ViewChildren, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatetimeComponent } from 'src/components/datetime/datetime.component';


@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.page.html',
  styleUrls: ['../app.component.scss'],
})
export class BookingDetailPage implements OnInit {
  public fg: FormGroup;
  public isCancel2: string;

  private submitRequested: boolean;
  @ViewChildren(DatetimeComponent) private datetimeComponent: DatetimeComponent[];

  constructor(private fb: FormBuilder, public router:Router,  private activatedRoute: ActivatedRoute) { 
    this.fg = this.fb.group({
      'name': ['', Validators.required],
      'telephone': ['', Validators.required],
      'date1': ['', Validators.required],
      'date2': ['', Validators.required],
      'count': ['', Validators.required],
      // room ของ component
      'money': ['', Validators.required],
    })
    this.isCancel2 = this.activatedRoute.snapshot.paramMap.get('isCancel');
    console.log(this.isCancel2);
    
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

  room(){
    './select-rooms.page.html'
    // this.router.navigate(['/booking-information']);
    this.router.navigate(['./select-rooms']);

  }

  ngOnInit() {
  }

}
