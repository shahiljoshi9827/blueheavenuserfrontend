import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { confirmationclass } from '../models/confirmation_class';
@Injectable({
  providedIn: 'root'
})
export class ConfermationserviceService {

  constructor(public _http:HttpClient) { }
  private confirmation="http://localhost:3000/confirmorder/";

  getalldetailsofbill(fk_email_id,bill_id,fk_main_order_id)
  {
    console.log(fk_email_id);
    return this._http.get(this.confirmation+fk_email_id+"/"+bill_id+"/"+fk_main_order_id);
  }
}

