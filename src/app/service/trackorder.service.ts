import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackorderService {

  constructor(public _http:HttpClient) { }
  private track="http://localhost:3000/trackorder/";

  trackorder(mainorder_id:number,fk_email_id:string)
  {
    return this._http.get(this.track+mainorder_id+"/"+fk_email_id);
  }
}
