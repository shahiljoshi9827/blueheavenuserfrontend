import { Component, OnInit,ViewChild } from '@angular/core';
import { productclass } from "../../../models/product_class";
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { ProductServiceService } from 'src/app/service/product-service.service';
import {SelectionModel} from '@angular/cdk/collections';
import { Router } from "@angular/router";

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
  datasource=new MatTableDataSource();
  displayedColumns: string[] = ['action','product_name' , 'product_image', 'product_price', 'product_qty','product_discription','brand_name','update','delete'];
  public i:number;
  public product_id:number;
  public product_delarr:productclass[]=[];
  public product_delarr1:productclass[]=[];
  public deleteallflag:boolean=false;
  public brand_name:string;
  displayproductarr:productclass[]=[];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  selection = new SelectionModel<productclass>(true, []);
  constructor(private product_Ser:ProductServiceService,private _route:Router) { }

  ngOnInit() {
    this.datasource.paginator = this.paginator;
    this.product_Ser.getallproduct().subscribe(
      (data:productclass[])=>{
          this.displayproductarr=data;
          this.product_id=data[0].product_id;
          this.datasource.data=this.displayproductarr;
          this.product_delarr1=data;
      }
    )
  }
  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();
    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }


updateproduct(){
  this._route.navigate(['/menu/productupdate',this.product_id]);
 }


deleteproduct(item: productclass){


    this.product_Ser.deleteproduct(item).subscribe((data: any) => {
      console.log(data);
      this.displayproductarr.splice(this.displayproductarr.indexOf(item),1);
      this.datasource.data.splice(this.datasource.data.indexOf(item),1);
      console.log(this.datasource.data);
      this.ngOnInit();
    });

}

addproduct()
{
  this._route.navigate(['/menu/product']);
}
onCheakboxchacked(item) {
    if (this.product_delarr.find(x => x.product_id == item.product_id)) {

    this.product_delarr.splice(this.product_delarr.indexOf(item), 1);
  } else {


    this.product_delarr.push(item);
  }
  console.log(this.product_delarr);
}
deleteall()
{
  if(this.product_delarr.length<=0)
  {
      alert("sdasd")

      this.product_Ser.deleteall(this.displayproductarr).subscribe
      ((data: any) => {
        this.displayproductarr.splice(0,this.displayproductarr.length);
        this.datasource.data = this.displayproductarr;
        });
  }
  else
  {
  this.product_Ser.deleteall(this.product_delarr).subscribe
  ((data: any) => {
    console.log(data);
    for (this.i = 0; this.i < this.product_delarr.length; this.i++) {
      if (this.displayproductarr.find(x => x == this.product_delarr[this.i])) {
        this.displayproductarr.splice(this.displayproductarr.indexOf(this.product_delarr[this.i]), 1);
      }
      }
      this.datasource.data = this.displayproductarr;
    });
  }

  }

}
