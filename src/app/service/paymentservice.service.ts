import { Injectable } from '@angular/core';
import { paymentclass } from "../models/payment_class";
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  public addpayment="http://localhost:3000/addpayment/";
  constructor(public _http:HttpClient) { }

  onaddpayment(item:paymentclass)
  {
    return this._http.post(this.addpayment,item);
  }
}
