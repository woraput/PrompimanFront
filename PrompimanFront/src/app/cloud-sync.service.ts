import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CloudSyncService {

  private readonly baseUrl: string = "http://localhost:5000/api/"; // local 

  constructor(private http: HttpClient) {
    console.log('Create CloudSyncProvider Provider');
  }

  get(){
    return "hello, i am a cloudSyncProvider";
  }

  getuser(page: number, size: number){
    console.log();
    
    return this.http.get("http://localhost:5000/api/Member/Get/"+page+"/"+size+"?word=%20");
    // http://localhost:5000/api/Member/Get/1/10?word=%20asdf
    // return this.http.get("http://localhost:5000/api/Member/Get/"+page+"/"+size+"?word=%20asdf");

// ​/api​/Member​/Get​/{page}​/{size}
  }
}
