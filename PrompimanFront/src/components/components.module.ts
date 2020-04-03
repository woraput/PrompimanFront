import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimeComponent } from './datetime/datetime.component';
import { IonicModule } from '@ionic/angular';
import { MbscModule } from '@mobiscroll/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UIStandardPage } from 'src/app/uistandard/uistandard.page';



@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MbscModule,
    IonicModule.forRoot(),
  ],

  declarations: [
    DatetimeComponent,
  ],

  exports: [
    DatetimeComponent
  ]
})
export class ComponentsModule { }
