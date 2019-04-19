import { Component, OnInit } from '@angular/core';
import { productclass } from "../models/product_class";
import { ProductServiceService } from "../service/product-service.service";
import { Router } from "@angular/router";
import { addtocart } from "../models/addtocart_class";
import { AddtocartService } from "../service/addtocart.service";
import { MenubarComponent } from "../menubar/menubar.component";
@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  constructor(
    public product_Ser: ProductServiceService,
    public _route: Router,
    public addtocart_ser: AddtocartService
  ) {

  }

  displayproductarr: productclass[] = [];
  temp_order_amount: number;
  temp_order_qty: number;
  fk_product_id: number;
  fk_email_id: string=" ";
  user_name;
flag:boolean=true;
  public imagesUrl;

ngOnInit() {
  this.user_name=localStorage.getItem("user_name");
  console.log(this.user_name);
    this.product_Ser.getallproduct().subscribe((data: productclass[]) => {
      console.log(data);
      this.displayproductarr = data;
    });


  }

  product_click(item) {
    console.log(item.product_id);
    this._route.navigate(["/productclick", item.product_id]);
  }
  addtocart(item: productclass) {
    console.log(item);
    this.temp_order_amount=item.product_price;
    this.temp_order_qty=1;
    this.fk_product_id=item.product_id;

      console.log(this.temp_order_amount);
     this.addtocart_ser.addtemporder(new  addtocart(this.temp_order_amount,this.temp_order_qty,this.fk_product_id,this.fk_email_id)).subscribe(
       (data:any)=>{
         console.log(data);
       })

      }

load()
{
  this.flag=false;
  this.ngOnInit();
}
}
