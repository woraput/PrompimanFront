import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-back-to-root',
  templateUrl: './back-to-root.component.html',
  styleUrls: ['./back-to-root.component.scss'],
})
export class BackToRootComponent implements OnInit {
  @Input('title') public text: string;

  constructor(private navCtrl: NavController) {
    console.log(this.text);
    
   }

  ngOnInit() {}

  onClick(){
    this.navCtrl.pop();
  }
}
