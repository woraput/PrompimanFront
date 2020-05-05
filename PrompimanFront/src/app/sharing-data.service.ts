import { Injectable } from '@angular/core';
import { DateRequest, SettingRoom } from 'src/models/checkin';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  public roomReserve: string[] = [];
  public timePeriod = new DateRequest();
  public settingAllRoom = new SettingRoom();
  constructor() {
    console.log('Create SharingDataService Provider');
    this.timePeriod.checkInDate = new Date();
    this.timePeriod.checkOutDate = new Date();
    this.settingAllRoom.haveBreakfast = true;
    this.settingAllRoom.haveAddBreakfast = false;
    this.settingAllRoom.addBreakfastCount = 0;
    this.settingAllRoom.haveExtraBed = false;
    this.settingAllRoom.extraBedCount = 0;
    this.settingAllRoom.discount = 0;
  }
}
