import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member, Paging } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
export class CloudSyncService {

  private readonly baseUrl: string = 'http://localhost:5000/api/'; // local  
  // private readonly baseUrl: string = ' http://prompiman-api.azurewebsites.net'; // local

 
  constructor(private http: HttpClient) {
    console.log('Create CloudSyncProvider Provider');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'accept': 'text/plain',
      'Content-Type': 'application/json-patch+json'
    })
  }

  public getByID(_id: string): any {
    return this.http.get<Member>(this.baseUrl + 'Member/GetById/' + _id);
  }


  public createMember(member: Member): Observable<any> {
    console.log(JSON.stringify(member));
    console.log(member);
    console.log({ member });

    return this.http.post<any>(this.baseUrl + "Member/Create/", JSON.stringify(member), this.httpOptions);
  }

  public createTh(member: Member) {
    return this.http.post(this.baseUrl + "Member/CreateTn/", { member });
  }

  public createEn(member: Member) {
    return this.http.post(this.baseUrl + "Member/CreateEn/", { member });
  }

  public getuser(page: number, size: number) {
    return this.http.get<Paging>(this.baseUrl + "Member/Get/" + page + "/" + size);
  }

  public search(page: number, size: number, word: string) {
    return this.http.get<Paging>(this.baseUrl + "Member/Get/" + page + "/" + size + "?word=" + word);
  }
}
