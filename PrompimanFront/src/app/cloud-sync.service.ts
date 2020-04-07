import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CloudSyncService {

  // private readonly baseUrl: string = "https://localhost:5001/api/"; // local 

  constructor(private http: HttpClient) {
    console.log('Create CloudSyncProvider Provider');
  }

  get(){
    return "hello, i am a cloudSyncProvider";
  }
}
