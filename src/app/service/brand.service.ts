import { Injectable } from '@angular/core';
import { brandclass } from '../models/brand_class';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(public _http:HttpClient) { }
  private brand="http://localhost:3000/brand/";
  private productbrnadjoin="http://localhost:3000/productjoin_update/";

  getbrand( ) {
    return this._http.get(this.brand);
  }
  getproductbrand(brand_name)
  {
    // return this._http.get(this.productbrnadjoin+brand_name);
    return this._http.get(this.brand+brand_name);
  }

}
