import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['../app.component.scss'],
})
export class BillPage implements OnInit {
  public fg: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, ) {
    // console.log(this.activatedRoute.snapshot.paramMap.get('fg'));
    
  }

  ngOnInit() {
  }

}
