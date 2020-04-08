import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CloudSyncService {

  // private readonly baseUrl: string = "https://localhost:5001/api/"; // local 
 
  // private readonly baseUrl: string = "http://localhost:5000"; // local

  constructor(private http: HttpClient) {
    console.log('Create CloudSyncProvider Provider');
  }

  get(){
    return "hello, i am a cloudSyncProvider";
  }

  getuser(page: number, size: number){
    console.log();
    
    return this.http.get("http://localhost:5000/api/Member/Get/"+page+"/"+size+"?word=%20");
  }
}
