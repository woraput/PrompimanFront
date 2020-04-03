import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimeComponent } from './datetime/datetime.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],

  declarations: [
    DatetimeComponent
  ],

  exports: [
    DatetimeComponent
  ]
})
export class ComponentsModule { }
