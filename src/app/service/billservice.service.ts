import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { billclass } from '../models/bill_class';
@Injectable({
  providedIn: 'root'
})
export class BillserviceService {
  private addbill = "http://localhost:3000/addbill/";
  private mainbill = "http://localhost:3000/mainbill/";

  constructor(private _http:HttpClient) { }

addbill1(item)
{
  let x=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.addbill,x,{headers:h});

}

getallbill() {
  return this._http.get(this.mainbill );
}

deletebill(item:billclass)
  {
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.mainbill+item.Bill_id,{headers:h});
  }

deleteallbill(item:billclass[])
  {
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.mainbill,x,{headers:h});
  }


}
