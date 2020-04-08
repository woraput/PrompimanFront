import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
export class CloudSyncService {

  private readonly baseUrl: string = 'http://localhost:5000/api/'; // local

  constructor(private http: HttpClient) {
    console.log('Create CloudSyncProvider Provider');
  }

  get() {
    return 'hello, i am a cloudSyncProvider';
  }

  public getMember(_id: string): any {
    return this.http.get<Member>(this.baseUrl + 'Member/GetById/' + _id);
  }

  getuser(page: number, size: number){
    console.log();
    
    return this.http.get("http://localhost:5000/api/Member/Get/"+page+"/"+size+"?word=%20");
  }
}
