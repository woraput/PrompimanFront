import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
})
export class ExtraPage implements OnInit {
  public dataValue: number

  constructor() { }

  ngOnInit() {
  }

  onChange(selectedValue){
    console.log("Selected:",selectedValue);
    this.dataValue = selectedValue;
    console.log(this.dataValue)
  }

}
