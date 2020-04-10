import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member, Paging, MemberResponse } from 'src/models/Member';

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


  public createMember(member: Member) {
    console.log(JSON.stringify(member));
    console.log(member);
    console.log({ member });

    return this.http.post<MemberResponse>(this.baseUrl + "Member/Create/", member);
  }

  public createTh(member: Member) {
    return this.http.post(this.baseUrl + "Member/CreateTn/", { member });
  }

  public createEn(member: Member) {
    return this.http.post(this.baseUrl + "Member/CreateEn/", { member });
  }

  public getuser(page: number, size: number) {
    return this.http.get<Paging>("http://localhost:5000/api/Member/Get/" + page + "/" + size + "?word=%20");
  }
}
