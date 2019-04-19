import { Component, OnInit } from "@angular/core";
import { AddtocartService } from "src/app/service/addtocart.service";
import { addtocart } from "src/app/models/addtocart_class";
import { MatTableDataSource, MatDialogRef, MatDialog } from "@angular/material";
import { product_addtocartclass } from "src/app/models/product_addtocartclass";
import { Router, ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { CheckeditdataComponent } from "../checkeditdata/checkeditdata.component";
import { orderclass } from "src/app/models/order_class";
import { OrderserviceService } from "src/app/service/orderservice.service";
import { addtocart1 } from "src/app/models/addtocart_class1";

@Component({
  selector: "app-addtocartpage",
  templateUrl: "./addtocartpage.component.html",
  styleUrls: ["./addtocartpage.component.css"]
})
export class AddtocartpageComponent implements OnInit {

  fk_eamil_id: string;
  addtocrtarr: product_addtocartclass[] = [];
  orderaddtocart: orderclass[] = [];
  destroy = new Subject<any>();
  currentDialog: MatDialogRef<CheckeditdataComponent> = null;

  total: number = 0;
  shipcharge: number = 0;
  GST: number = 1;
  orderamount: number;
  orderqty: number;
  grandtotal: number = 0;


  qty: number[] = [];
  qty1: number[] = [];
  gt: number = 0;
  i: number;
  total1: number = 0;
  price: number[] = [];
  dish_id: number[] = [];
  subtotal: number[] = [];
  date=new Date();
  constructor(public addtocart_ser: AddtocartService,private _route: Router,public activate_rout: ActivatedRoute,public dialog: MatDialog,public order_ser: OrderserviceService)
  {}

  ngOnInit() {
    this.fk_eamil_id=localStorage.getItem("email_id");
    this.addtocart_ser.gettemporderbyemailid(this.fk_eamil_id).subscribe(
      (data: product_addtocartclass[]) => {
        if (data.length > 0) {
          this.addtocrtarr = data;
          for (let index = 0; index < this.addtocrtarr.length; index++) {

            this.price.push(data[index].order_amount * data[index].order_qty );
            this.total1+=data[index].order_amount * data[index].order_qty ;
            this.shipcharge += 20;
            this.GST = this.total1 * 0.12;
            this.qty.push(data[index].order_qty);

            this.grandtotal = this.total1 + this.shipcharge + this.GST;
          }
        }
        for (let i = 1; i <=100; i++) {
          this.qty1.push(i);
        }
      });
  }
  ondelete(element,i) {
    this.addtocart_ser.deletetemporder(element).subscribe((data: any) => {
      console.log(data);
      this.addtocrtarr.splice(this.addtocrtarr.indexOf(element), 1);
      this.total1 -= this.price[i];
      this.GST = this.total1 * 0.12;
      this.price.splice(i, 1);
      this.qty.splice(i, 1);
      this.shipcharge-=20;
      this.grandtotal=this.total1+this.GST+this.shipcharge;
    });
  }
  ngOnDestroy() {
    this.destroy.next();
  }
  checkout(element) {
    localStorage.setItem("emailid", this.fk_eamil_id);


        // for (this.i = 0; this.i < this.addtocrtarr.length; this.i++) {
        //   console.log(this.qty[this.i]);
        //   console.log(this.i);
        //   this.orderaddtocart.push(new orderclass(this.price[this.i],this.qty[this.i],"pending",this.date,45,"akshat199shah@gmail.com"));
        // }
        // console.log(this.orderaddtocart);
        // this.order_ser.addorderdetail(this.orderaddtocart).subscribe((data: any) => {
        //  alert("Record added in table successfully");
          this._route.navigate(['checkout']);
          this.total1 = 0;
          this.orderaddtocart.splice(0, this.i);
          this.price.splice(0, this.price.length);
          this.qty.splice(0, this.qty.length);
        // });



  }

  totalprice(item,a)
  {
    this.price[a] = item.order_amount * this.qty[a];
    this.total1 = 0;
    for (this.i = 0; this.i < this.price.length; this.i++) {
      this.total1 += this.price[this.i];
    }
    this.shipcharge *= a + 1;
    this.GST = this.total1 * 0.12;
    this.grandtotal = this.total1 + this.shipcharge + this.GST;
    this.addtocart_ser.updatetemporder(new addtocart1(this.price[a],this.qty[a],item.temp_order_id)).subscribe(
      (data: any) => {
        alert("add")
      });

  }

}
