import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member, Paging, MemberResponse } from 'src/models/Member';
import { Room, DateRequest, Reservation, ReserveResponse, RoomSelected, SettingRoom, MasterDetail, Master } from 'src/models/checkin';

@Injectable({
  providedIn: 'root'
})
export class CloudSyncService {

  private readonly baseUrlPublish: string = 'http://localhost:5000/api/'; // local
  // private readonly baseUrlPublish: string = 'http://prompiman-api.azurewebsites.net/api/'; // publish

  constructor(private http: HttpClient) { }

  public getByID(_id: string): any {
    return this.http.get<Member>(this.baseUrlPublish + 'Member/GetById/' + _id);
  }

  public createMember(member: Member) {
    return this.http.post<MemberResponse>(this.baseUrlPublish + "Member/Create/", member);
  }

  public createTh(member: Member) {
    return this.http.post<MemberResponse>(this.baseUrlPublish + "Member/CreateTn/", member);
  }

  public createEn(member: Member) {
    return this.http.post<MemberResponse>(this.baseUrlPublish + "Member/CreateEn/", member);
  }

  public editMember(member: Member) {
    return this.http.put<MemberResponse>(this.baseUrlPublish + "Member/Update/" + member._id, member);
  }

  public getuser(page: number, size: number) {
    return this.http.get<Paging>(this.baseUrlPublish + "Member/Get/" + page + "/" + size);
  }

  public search(page: number, size: number, word: string) {
    return this.http.get<Paging>(this.baseUrlPublish + "Member/Get/" + page + "/" + size + "?word=" + word);
  }

  public getAllRooms(timeData: DateRequest) {
    return this.http.put<Room[]>(this.baseUrlPublish + 'Room/Get/', timeData);
  }

  public getReservation(): any {
    return this.http.get<Reservation>(this.baseUrlPublish + 'Reservation/Get/');
  }

  public searchReservation(word: string): any {
    return this.http.get<Reservation>(this.baseUrlPublish + 'Reservation/Get/' + "?word=" + word);
  }

  public getByIDReservation(_id: string): any {
    return this.http.get<Member>(this.baseUrlPublish + 'Reservation/GetById/' + _id);
  }

  public createReservation(reservation: Reservation) {
    return this.http.post<ReserveResponse>(this.baseUrlPublish + 'Reservation/Create', reservation);
  }

  public editReservation(_id: string, addReserve: number, reservation: Reservation) {
    return this.http.put<ReserveResponse>(this.baseUrlPublish + 'Reservation/Update/' + _id + "?addReserve=" + addReserve, reservation);
  }

  public cancelReservation(_id: string, note: string) {
    return this.http.put(this.baseUrlPublish + 'Reservation/Delete/' + _id + "?note=" + note, {});
  }

  public confirmReservation(_id: string) {
    return this.http.put(this.baseUrlPublish + 'Reservation/Confirm/' + _id, {});
  }

  public getCheckinDetail(_id: string) {
    return this.http.get<MasterDetail>(this.baseUrlPublish + 'CheckIn/GetById/' + _id);
  }

  public getIsAlready(_id: string, groupName: string ) {
    return this.http.get(this.baseUrlPublish + 'CheckIn/IsAlready/' + _id + "/" + groupName);
  }

  // public putGetRoomActLst() {
  //   return this.http.put(this.baseUrlPublish + 'CheckIn/GetRoomActLst' , {});
  // }
}


