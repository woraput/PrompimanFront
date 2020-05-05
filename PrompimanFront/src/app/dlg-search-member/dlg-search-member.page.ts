import { Component, OnInit } from '@angular/core';
import { CloudSyncService } from '../cloud-sync.service';
import { Paging } from 'src/models/Member';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dlg-search-member',
  templateUrl: './dlg-search-member.page.html',
  styleUrls: ['./dlg-search-member.page.scss'],
})
export class DlgSearchMemberPage implements OnInit {
  p: number = 1;
  public registerMember: Paging = new Paging;
  public searchBar: FormControl;

  constructor(private cloud: CloudSyncService, public router: Router, public modaLCtrl: ModalController) {
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
      console.log(this.registerMember.dataList);
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

  search2(searchBar: string,pageNumber:number) {
    this.p = pageNumber;
    console.log("p",pageNumber);  
    console.log(searchBar);
    this.cloud.search(pageNumber, 10, searchBar).subscribe(data => {
      this.registerMember = data;
    });
  }

  cancel(){
    this.modaLCtrl.dismiss();
  }

  confirmMember(_id: string){
    this.router.navigate(['/checkin', _id]);
    this.modaLCtrl.dismiss()
  }
}
