import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreInfo } from '../MasterData';
import { Observable } from 'rxjs';

@Injectable()
export class MidataserviceService {

  constructor(private http:HttpClient) 
  { 
    
  }
  //Caling all stores REST API
  getAllStores():Observable<StoreInfo[]>
  {
    //console.log(this.http.get("http://localhost:8080/api/allstores").toPromise())

    return this.http.get<StoreInfo[]>("http://localhost:8080/api/allstores");
  }
}