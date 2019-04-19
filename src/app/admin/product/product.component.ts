import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../service/product-service.service';
import { Router } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { productclass } from '../../models/product_class';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private product_Ser:ProductServiceService,private _abc:Router) { }
  public product_name:string="";
  public product_image:string="";
  public product_discription:string="";
  public product_price:string="";
  public product_qty:string="";
  public fk_brand_id:string="";
  public sfile:File=null;
  ngOnInit() {
  }
  addproduct(){

    const fd=new FormData();
    fd.append('product_name',this.product_name);
    fd.append('product_image',this.sfile,this.sfile.name);
    fd.append('product_discription',this.product_discription);
    fd.append('product_price',this.product_price);
    fd.append('product_qty',this.product_qty);
    fd.append('fk_brand_id',this.fk_brand_id);

     this.product_Ser.addproduct(fd).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
    this._abc.navigate(['menu/productdisplay']);

  }
   onchange(value)
  {
    this.sfile=<File>value.target.files[0];
  }
}
