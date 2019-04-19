import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor(public _http: HttpClient) {}
  private sortbyhightolow1 = "http://localhost:3000/sortbylowprice/";
  private sortbylowtohigh1="http://localhost:3000/sortbyhighandrangeprice/";
  private topproductbyname1="http://localhost:3000/topproductbyname/";
  sortbyhightolow( ) {
    return this._http.get(this.sortbyhightolow1);
  }
  sortbylowtohigh( ) {
    return this._http.get(this.sortbylowtohigh1);
  }
  topproductbyname( ) {
    return this._http.get(this.topproductbyname1    );
  }
}
