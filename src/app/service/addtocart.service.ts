import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { addtocart } from "../models/addtocart_class";
import { checkRepeatProduct } from "../models/checkrepeatproduct_class";

@Injectable({
  providedIn: "root"
})
export class AddtocartService {
  constructor(public _http: HttpClient) {}
  private addtocart = "http://localhost:3000/temp_order/";
  private addtocart1="http://localhost:3000/temp_order_deleteall/";
  private CheckRepeatProduct="http://localhost:3000/CheckRepeatProduct/";

  addtemporder(addtocart_class: addtocart) {
    return this._http.post(this.addtocart, addtocart_class);
  }
  gettemporderbyemailid(fk_eamil_id) {
    return this._http.get(this.addtocart + fk_eamil_id);
  }

  getorderbyjoin(fk_eamil_id) {
    return this._http.get(this.addtocart + fk_eamil_id);
  }
  deletetemporder(item) {
    return this._http.delete(this.addtocart + item.temp_order_id);
  }
  checkRepeatProduct(item:checkRepeatProduct)
  {
    console.log(item);
     return this._http.post(this.CheckRepeatProduct,item);
  }

  updatetemporder(item)
  {
    let x=JSON.stringify(item);
    console.log(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.addtocart1+item.temp_order_id,x,{headers:h});
  }
  deletalltmporder(item:addtocart[])
  {
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.addtocart1 ,x,{headers:h});
  }

}
