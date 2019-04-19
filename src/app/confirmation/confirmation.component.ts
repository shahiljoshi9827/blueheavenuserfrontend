import { Component, OnInit } from '@angular/core';
import { confirmationclass } from '../models/confirmation_class';
import { ConfermationserviceService } from '../service/confermationservice.service';
import { TouchSequence } from 'selenium-webdriver';
import { window } from 'rxjs/operators';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(public confrm_Ser:ConfermationserviceService) { }
  fk_email_id:string;
      public order_id?:number;
      public order_amount?:number;
      public order_qty?:number;
      public fk_product_id?:number;

      public fk_main_order_id:number;
      public mainorder_id:number;
      public mainorder_amount:number;
      public mainorder_date:Date;
      public user_email_id:string;
      public user_name:string;
      public user_mobile_no:number;
      public user_gender:string;
      public user_dob:Date;
      public user_password:string;
      public user_address:string;
      public type?:string;
      public payment_id:number;
      public payment_date:Date;
      public amount:number;
      public payment_mode:string;
      public fk_mainorder_id:string;
      public user_address1:string;
      billarr:confirmationclass[]=[];
      mainoid:string;
  billid;
  bill_id:number;
  mid:number;
  ngOnInit() {
    this.fk_email_id=localStorage.getItem('email_id');
    console.log(this.fk_email_id);
    this.mainoid=localStorage.getItem('fk_mainorder_id');
    this.billid=localStorage.getItem('bill_id');
    this.bill_id=parseInt(this.billid);
    this.mid=parseInt(this.mainoid);
    console.log(this.mid);
    this.confrm_Ser.getalldetailsofbill(this.fk_email_id,this.bill_id,this.mid).subscribe(
      (data:any)=>{
        console.log(data);
        this.billarr=data;
        this.mainorder_id=data[0].mainorder_id;
        this.mainorder_date=data[0].mainorder_date;
        this.mainorder_amount=data[0].amount;
        this.payment_mode=data[0].payment_mode;
        this.user_address=data[0].user_address;
        this.user_address1=this.user_address.substring(0,32);
      })
      }


}
