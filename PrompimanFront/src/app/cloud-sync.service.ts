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

  public getByID(_id: string): any {
    return this.http.get<Member>(this.baseUrl + 'Member/GetById/' + _id);
  }
  
  public getuser(page: number, size: number){
    return this.http.get<Member[]>("http://localhost:5000/api/Member/Get/"+page+"/"+size+"?word=%20");
  }
}
