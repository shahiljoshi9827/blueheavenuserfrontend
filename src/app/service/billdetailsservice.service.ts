import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { billdetails } from '../models/bill_details_class';
@Injectable({
  providedIn: 'root'
})
export class BilldetailsserviceService {
  constructor(public _http:HttpClient) { }
  private billsetails="http://localhost:3000/billdetails/";

  // getpastorder(){
  //   return this._http.get(this.billsetails);
  // }
  // getorderbyjoin(fk_eamil_id) {
  //   return this._http.get(this.billsetails + fk_eamil_id);
  // }
  addorderdetail(item: billdetails[]) {
    let x = JSON.stringify(item);
    let h = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.billsetails, x, { headers: h });
  }
}
