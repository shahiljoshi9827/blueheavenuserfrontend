import { Component, OnInit } from '@angular/core';
import { productclass } from '../../models/product_class';
import { ProductServiceService } from '../../service/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddtocartService } from 'src/app/service/addtocart.service';
import { addtocart } from 'src/app/models/addtocart_class';
import { checkRepeatProduct } from 'src/app/models/checkrepeatproduct_class';
import { FeedbackserviceService } from 'src/app/service/feedbackservice.service';
import { feedbackclass } from 'src/app/models/feedback_class';
import { feedclass } from 'src/app/models/feed_class';
import { feedproductclass } from 'src/app/models/feedproduct_class';

@Component({
  selector: 'app-productclick',
  templateUrl: './productclick.component.html',
  styleUrls: ['./productclick.component.css']
})
export class ProductclickComponent implements OnInit {
  constructor(public product_Ser:ProductServiceService ,public _aroute:ActivatedRoute,public addtocart_ser:AddtocartService,public _route: Router,private feed_ser:FeedbackserviceService) {}

  displayproductarr:productclass[]=[];
  public product_id;
  public qty1:number[]=[];
  temp_order_amount: number;
  temp_order_qty: number=0;
  fk_product_id: number;
    feedback:string;
  fk_email_id: string;
  product_qty:number;
  fk_brand_id:number;
  similer:productclass[]=[];
  feedback_arr:feedproductclass[]=[];
  ngOnInit() {
    this.fk_email_id=localStorage.getItem("email_id");
    this.product_id=this._aroute.snapshot.params['product_id'];
    this.product_Ser.getproductbyid(this.product_id).subscribe(
      (data:productclass[])=>{
        console.log(data);
        this.fk_brand_id=data[0].fk_brand_id;
          this.displayproductarr=data;
          console.log(this.displayproductarr);
          for (let i = 1; i <= data[0].product_qty; i++) {
            this.qty1.push(i);
          }

        this.product_Ser.getsimilerproduct(this.fk_brand_id,this.product_id).subscribe(
          (data: any) => {
            console.log(this.fk_brand_id);
            console.log(this.product_id);
            console.log(data);
            this.similer=data;
          });
        })

        this.feed_ser.getfeedbackbyproductid(this.product_id).subscribe((data:feedproductclass[])=>{
          this.feedback_arr=data;
          console.log(data);
        })
    }

    addtocart(item: productclass) {
      console.log(item.product_id);
      console.log(this.fk_email_id);
      console.log(this.temp_order_qty);
      if(this.product_qty==null)
      {
        alert("Please Select Quantity First");
      }
      else
      {
      this.addtocart_ser.checkRepeatProduct(new checkRepeatProduct(this.fk_email_id,item.product_id)).subscribe(
      (data:any)=>{
        console.log(data);

          // console.log(data[index].fk_product_id);
          console.log(data)
          if(data.length>0){
            alert("Already Added In To The Cart");
          }
          else
          {
            console.log(item);
            this.temp_order_amount=item.product_price;
            this.temp_order_qty=this.product_qty;
            this.fk_product_id=item.product_id;
            console.log(this.product_qty);
              console.log(this.temp_order_amount);
             this.addtocart_ser.addtemporder(new  addtocart(this.temp_order_amount,this.temp_order_qty,this.fk_product_id,this.fk_email_id)).subscribe(
               (data: any) => {
                 console.log(data);
                 this._route.navigate(["/addtocart"]);

                });
          }



    });
       }
  }

    bynow(item:productclass)
    {
      console.log(item);
      this.temp_order_amount=item.product_price;
      this.temp_order_qty=this.product_qty;
      this.fk_product_id=item.product_id;
      console.log(this.product_qty);
        console.log(this.temp_order_amount);
       this.addtocart_ser.addtemporder(new  addtocart(this.temp_order_amount,this.temp_order_qty,this.fk_product_id,this.fk_email_id)).subscribe(
         (data: any) => {
           console.log(data);
           this._route.navigate(['checkout']);

         })
    }
    addfeedback()
    {

      this.feed_ser.addfeedback(new feedbackclass(this.feedback,this.product_id,this.fk_email_id)).subscribe(
          (data:any)=>{
          console.log(data);
        //  this._route.navigate(['/menu/displayuser',this.user_email_id]);
        });
        this.ngOnInit();
    }

    product_click(item) {
      console.log(item.product_id);
      this._route.navigate(["/productclick", item.product_id]);
      this.ngOnInit();
    }

  }
