import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Member, Paging, MemberResponse } from 'src/models/Member';
import { Room, DateRequest, Reservation, ReserveResponse, RoomSelected, SettingRoom } from 'src/models/reservation';

@Injectable({
  providedIn: 'root'
})
export class CloudSyncService {

  // private readonly baseUrlPublish: string = 'https://localhost:5001/api/'; // local
  private readonly baseUrlPublish: string = 'http://prompiman-api.azurewebsites.net/api/'; // publish
  public dataPass: any;
  public dataEdit: any;

  public timePeriod = new DateRequest();
  public lstRoomsSelect: RoomSelected[] = [];
  public settingAllRoom = new SettingRoom();
  constructor(private http: HttpClient) {
    console.log('Create CloudSyncProvider Provider');
    this.settingAllRoom.haveBreakfast = true;
    this.settingAllRoom.haveAddBreakfast = false;
    this.settingAllRoom.addBreakfastCount = 0;
    this.settingAllRoom.haveExtraBed = false;
    this.settingAllRoom.extraBedCount = 0;
    this.settingAllRoom.discount = 0;
  }


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

  //Room
  public getAllRooms(timeData: DateRequest) {
    return this.http.put<Room[]>(this.baseUrlPublish + '/Room/Get/', timeData);
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
    return this.http.put<ReserveResponse>(this.baseUrlPublish + 'Reservation/Update/' + _id + "?addReserve=" + addReserve , reservation);
  }

  public cancelReservation(_id: string, note: string) {
    return this.http.put(this.baseUrlPublish + 'Reservation/Delete/' + _id + "?note=" + note, {});
  }

  public confirmReservation(_id: string) {
    return this.http.put(this.baseUrlPublish + 'Reservation/Confirm/' + _id , {});
  }

  // http://localhost:5000/api/Reservation/Confirm/637231486236762770
}


