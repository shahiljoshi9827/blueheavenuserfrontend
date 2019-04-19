import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { orderclass } from '../models/order_class';


@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  constructor(public _http:HttpClient) { }
  private order="http://localhost:3000/order/";

  getpastorder(){
    return this._http.get(this.order);
  }
  getorderbyjoin(fk_eamil_id) {
    return this._http.get(this.order + fk_eamil_id);
  }
  addorderdetail(item: orderclass[]) {
    let x = JSON.stringify(item);
    let h = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.order, x, { headers: h });
  }
}
