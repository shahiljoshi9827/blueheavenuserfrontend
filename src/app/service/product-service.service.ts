import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { productclass } from '../models/product_class';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public _http:HttpClient) { }
  private add_get_update_getbyid_product="http://localhost:3000/add_get_updateimage_getbyid_product/";
  private productjoin_update="http://localhost:3000/productjoin_update/";
  private sortbyhightolow1 = "http://localhost:3000/sortbylowprice/";
  private sortbylowtohigh1="http://localhost:3000/sortbyhighandrangeprice/";
  private topproductbyname1="http://localhost:3000/topproductbyname/";
  private search="http://localhost:3000/search/";
  private similar="http://localhost:3000/similerproduct/";

  sortbyhightolow( ) {
    return this._http.get(this.sortbyhightolow1);
  }
  sortbylowtohigh( ) {
    return this._http.get(this.sortbylowtohigh1);
  }
  topproductbyname( ) {
    return this._http.get(this.topproductbyname1    );
  }
  addproduct(product_class:FormData){
    return this._http.post(this.add_get_update_getbyid_product,product_class);
  }
  updateproduct(item:productclass){
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.productjoin_update+item.product_id,x,{headers:h});
  }
  getallproduct()
  {
    return this._http.get(this.add_get_update_getbyid_product);
  }
  getproductbyid(product_id)
  {
    return this._http.get(this.add_get_update_getbyid_product+product_id);
  }
  updateProduct_image(item:FormData)
  {
    return this._http.put(this.add_get_update_getbyid_product,item)
  }
  deleteproduct(item){
    return this._http.delete(this.add_get_update_getbyid_product+item.product_id)
  }
  deleteall(item:productclass[]){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let x=JSON.stringify(item);
    return this._http.post(this.productjoin_update,x,{headers:h});

  }
  getsearchproduct(word)
  {
    return this._http.get(this.search+word);
  }
  getsimilerproduct(fk_brand_id:number,product_id:number)
  {
    return this._http.get(this.similar+fk_brand_id+"/"+product_id);
  }
  getpastorder(fk_email_id)
  {
    return this._http.get(this.similar+fk_email_id);
  }

}
