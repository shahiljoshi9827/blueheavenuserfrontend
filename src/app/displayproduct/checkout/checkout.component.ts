import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Userclass } from 'src/app/models/user_class';
import { OrderserviceService } from 'src/app/service/orderservice.service';
import { product_addtocartclass } from 'src/app/models/product_addtocartclass';
import { AddtocartService } from 'src/app/service/addtocart.service';
import { orderclass } from 'src/app/models/order_class';
import { MainorderserviceService } from 'src/app/service/mainorderservice.service';
import { mainorderclass } from 'src/app/models/mainorder_class';
import { paymentclass } from '../../models/payment_class';
import { PaymentserviceService } from '../../service/paymentservice.service';
import { billclass } from '../../models/bill_class';
import { billdetails } from '../../models/bill_details_class';
import { BillserviceService } from 'src/app/service/billservice.service';
import { BilldetailsserviceService } from 'src/app/service/billdetailsservice.service';
import { addtocart } from 'src/app/models/addtocart_class';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // constructor() { }
  // fk_email_id;
  // ngOnInit() {
  //   this.fk_email_id=localStorage.getItem('emailid')
  //   console.log(this.fk_email_id);
  // }
  constructor(public bill_ser:BillserviceService,public billdetails_ser:BilldetailsserviceService,public payment_ser:PaymentserviceService,private ser:UserServiceService,private _mainser:MainorderserviceService,private _route:Router,private _aroute:ActivatedRoute,public add_ser:AddtocartService,public order_ser: OrderserviceService) {  }

  orderaddtocart: orderclass[] = [];
  billdetail:billdetails[]=[];
  i=0;
  qty: number[] = [];
  price: number[] = [];
  selector:string="cod";


  public user_email_id:string;
  public user_name:string;
  public user_mobile_no:string;
  public user_address:string;
  msg:string;
  public product_addtocartarr:product_addtocartclass[]=[];
  public mainorderarr:mainorderclass[]=[];
  public msgcheck:boolean=true;
  total:number=0;
  grnadtotal:number=0;
  shippingcharge:number=50;
  mainorderid:number;
  billid:number;
  public product_id:number[]=[];
  delarr:addtocart[]=[];
  ngOnInit() {

    this.msg=localStorage.getItem('msg')
    console.log(this.msg)
     if(this.msg=="true")
     {
         console.log(this.msgcheck);
         this.msgcheck=true;
     }
     else
     {
        this.msgcheck=false;
     }
    this.user_email_id=localStorage.getItem('email_id');
    this.ser.getuserbyid(this.user_email_id).subscribe(
      (data:any)=>{
        console.log(data);
         this.user_name=data[0].user_name;
         this.user_mobile_no=data[0].user_mobile_no;
         this.user_address=data[0].user_address;
         this.add_ser.getorderbyjoin(this.user_email_id).subscribe(
          (data:any[])=>{
              console.log(data);
              console.log(this.user_email_id);
              this.product_addtocartarr=data;
              for (let index = 0; index < data.length; index++) {
                this.product_id.push(data[index].product_id);
                this.price.push(data[index].order_amount * data[index].order_qty );
                // this.total1+=data[index].order_amount * data[index].order_qty ;
                // this.shipcharge += 20;
                // this.GST = this.total1 * 0.12;
                this.delarr.push(data[index]);
                this.qty.push(data[index].order_qty);

                // this.grandtotal = this.total1 + this.shipcharge + this.GST;
              }
              data[0].order_qty;
              for (let index = 0; index < this.product_addtocartarr.length; index++) {
                this.total+=this.price[index];
              }
              this.grnadtotal=this.total+this.shippingcharge;
              console.log(this.price);
              console.log(this.qty);
          })

      });
  }


  saveprofile(){
  }

  onaddtoorder(){
    this._mainser.addmainorder(new mainorderclass(this.user_email_id,this.grnadtotal)).subscribe((data: any) => {
      this.mainorderarr.push(new mainorderclass(this.user_email_id,this.grnadtotal));
       console.log(data);
      this.mainorderid=data.insertId;

        for (this.i = 0; this.i < this.product_addtocartarr.length; this.i++)
        {
          console.log(this.price[this.i]);
          console.log(this.qty[this.i]);
          this.orderaddtocart.push(new orderclass(this.price[this.i],this.qty[this.i],this.product_id[this.i],this.user_email_id,this.mainorderid));
        }
        console.log(this.orderaddtocart);
        this.order_ser.addorderdetail(this.orderaddtocart).subscribe((data: any) => {

          // this._route.navigate(['checkout']);
          // this.total1 = 0;
          // this.orderaddtocart.splice(0, this.i);
          // this.price.splice(0, this.price.length);
          // this.qty.splice(0, this.qty.length);
          this.payment_ser.onaddpayment(new paymentclass(this.grnadtotal,this.selector,this.mainorderid,this.user_email_id)).subscribe((data:any)=>
          {
            this.bill_ser.addbill1(new billclass(this.grnadtotal,this.user_email_id)).subscribe((data :any)=>
            {
              this.billid=data.insertId;

              for (this.i = 0; this.i < this.product_addtocartarr.length; this.i++)
              {
                console.log(this.price[this.i]);
                console.log(this.qty[this.i]);
                // this.orderaddtocart.push(new orderclass(this.price[this.i],this.qty[this.i],this.product_id[this.i],this.user_email_id,this.mainorderid));
                this.billdetail.push(new billdetails(this.price[this.i],this.qty[this.i],this.billid,this.product_id[this.i],this.user_email_id));
              }
              this.billdetails_ser.addorderdetail(this.billdetail).subscribe((data:any)=>{
                this.add_ser.deletalltmporder(this.delarr).subscribe(
                  (data:any)=>{
                  //  this.total1 = 0;
                    this.orderaddtocart.splice(0, this.i);
                    this.price.splice(0, this.price.length);
                    this.qty.splice(0, this.qty.length);
                    console.log(this.billid);
                    console.log(this.mainorderid);
                    localStorage.setItem("bill_id",this.billid.toString());
                    localStorage.setItem("fk_mainorder_id",this.mainorderid.toString());
                    this._route.navigate(["/confirmation"]);

                    alert("Order Placed Succesfully");
                });
              });
            });
          });
      });
    });

  }

}
