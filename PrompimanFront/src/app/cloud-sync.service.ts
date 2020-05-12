import { PagingMaster, RoomActRequest } from './../models/checkin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member, Paging, MemberResponse } from 'src/models/Member';
import { Room, DateRequest, Reservation, ReserveResponse, MasterDetail, RoomActivate, Master } from 'src/models/checkin';

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

  //checkin
  public getCheckinDetail(_id: string) {
    return this.http.get<MasterDetail>(this.baseUrlPublish + 'CheckIn/GetById/' + _id);
  }

  public getRoomAct(_id: string, roomId: string) {
    return this.http.get<RoomActivate[]>(this.baseUrlPublish + 'CheckIn/GetRoomActLst/' + _id + "?roomId=" + roomId);
  }

  public updateRoomAct(roomActRequest: RoomActRequest) {
    return this.http.put<ReserveResponse>(this.baseUrlPublish + 'CheckIn/Update/', roomActRequest);
  }

  //master detail
  public getLstMasterNotCloseYet(page: number, size: number, word?: string) {
    if (word === undefined || word === null || word == '' || word === "") {
      return this.http.get<PagingMaster>(this.baseUrlPublish + 'CheckIn/Get/' + page + '/' + size);
    } else
      return this.http.get<PagingMaster>(this.baseUrlPublish + 'CheckIn/Get/' + page + '/' + size + "?word=" + word);

  }
  public getLstMasterHaveOrNotRemaining(page: number, size: number, haveRemaining: boolean, word?: string) {
    if (word === undefined || word === null || word == '' || word === "") {
      return this.http.get<PagingMaster>(this.baseUrlPublish + 'CheckIn/GetAllCheckOut/' + page + '/' + size + '/' + haveRemaining);
    } else
      return this.http.get<PagingMaster>(this.baseUrlPublish + 'CheckIn/GetAllCheckOut/' + page + '/' + size + '/' + haveRemaining + "?word=" + word);
  }
  public getLstMasterHistory(page: number, size: number, word?: string) {
    if (word === undefined || word === null || word == '' || word === "") {
      return this.http.get<PagingMaster>(this.baseUrlPublish + 'CheckIn/GetHistory/' + page + '/' + size);
    } else
      return this.http.get<PagingMaster>(this.baseUrlPublish + 'CheckIn/GetHistory/' + page + '/' + size + "?word=" + word);

  }
  // http://localhost:5000/api/Reservation/Confirm/637231486236762770
  public getIsAlready(_id: string, groupName: string) {
    return this.http.get(this.baseUrlPublish + 'CheckIn/IsAlready/' + _id + "/" + groupName);
  }

  // https://localhost:5001/api/CheckIn/GetRoomActLst
  public putGetRoomActLst(master: Master) {
    return this.http.put<Master>(this.baseUrlPublish + 'CheckIn/GetRoomActLst', master);
  }

  // https://localhost:5001/api/CheckIn/Create
  public putCreateRoomActLst(MasterDetail: MasterDetail) {
    return this.http.put<MasterDetail>(this.baseUrlPublish + 'CheckIn/Create', MasterDetail);
  }
}



