import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { mainorderclass } from '../models/mainorder_class';

  @Injectable({
  providedIn: 'root'
})
export class MainorderserviceService {
  private addorder = "http://localhost:3000/addorder/";
  private mainorder = "http://localhost:3000/mainorder/";

  constructor(private _http:HttpClient) { }

addmainorder(item)
{
  let x=JSON.stringify(item);
  let h=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.addorder,x,{headers:h});

}

getallmainorder() {
  return this._http.get(this.mainorder );
}

deleteorder(item:mainorderclass)
  {
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.mainorder+item.mainorder_id,{headers:h});
  }

deleteallorder(item:mainorderclass[])
  {
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.mainorder,x,{headers:h});
  }


}
