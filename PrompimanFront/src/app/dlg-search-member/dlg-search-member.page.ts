import { Component, OnInit } from '@angular/core';
import { CloudSyncService } from '../cloud-sync.service';
import { Paging } from 'src/models/Member';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dlg-search-member',
  templateUrl: './dlg-search-member.page.html',
  styleUrls: ['./dlg-search-member.page.scss'],
})
export class DlgSearchMemberPage implements OnInit {
  p: number = 1;
  public registerMember: Paging = new Paging;
  public searchBar: FormControl;

  constructor(private cloud: CloudSyncService, public modaLCtrl: ModalController) {
    this.searchBar = new FormControl('');
    // this.ionViewDidEnter();
  }
  
  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.getPageUsers(this.p);
  }

  getPageUsers(p: number) {
    this.cloud.getuser(p, 10).subscribe(data => {
      this.registerMember = data;
      console.log(this.registerMember.members);
      console.log(this.registerMember.count);
      console.log(this.registerMember.page);
    });
  }

  search(searchBar: string) {
    this.p = 1;
    console.log(searchBar);
    this.cloud.search(this.p, 10, searchBar).subscribe(data => {
      this.registerMember = data;
    });
  }

  cancel(){
    this.modaLCtrl.dismiss();
  }
}
