import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { productclass } from "../models/product_class";
import { brandclass } from "../models/brand_class";
import { ProductServiceService } from "../service/product-service.service";
import { Router } from "@angular/router";
import { addtocart } from "../models/addtocart_class";
import { AddtocartService } from "../service/addtocart.service";
import { wishlist_class } from "../models/wishlist_class";
import { WishlistService } from "../service/wishlist.service";
import { BrandService } from "../service/brand.service";
import { checkRepeatProduct } from "../models/checkrepeatproduct_class";
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-displayproduct",
  templateUrl: "./displayproduct.component.html",
  styleUrls: ["./displayproduct.component.css"]
})
export class DisplayproductComponent implements OnInit {
  constructor(
    public product_Ser: ProductServiceService,
    public _route: Router,
    public addtocart_ser: AddtocartService,
    public wish_ser:WishlistService,
    public _brandser:BrandService
  ) {}
  sort:string;
  searchItem: boolean = false;
  searchedKeyword: string = '';
  proarr: productclass[] = [];
  searcharr: String[] = [];
  brandarr:brandclass[]=[];

  displayproductarr: productclass[] = [];
  temp_order_amount: number;
  temp_order_qty: number;
  fk_product_id: number;
  fk_email_id: string=" ";
  ngOnInit() {
    this.fk_email_id=localStorage.getItem("email_id");

    this.product_Ser.getallproduct().subscribe(
      (data: productclass[]) => {
      console.log(data);
      this.displayproductarr = data;
      this._brandser.getbrand().subscribe(
        (data:any)=>{
          this.brandarr=data;
          console.log(this.brandarr);
        });

    });
  }
  brandpptoduct(brand_name)
  {
    console.log(brand_name);
    if(brand_name=="all"){

      this.product_Ser.getallproduct().subscribe(
        (data: productclass[]) => {
        console.log(data);
        this.displayproductarr = data;
      });
    }
    else
    {
    this.displayproductarr.splice(0,this.displayproductarr.length);
    this._brandser.getproductbrand(brand_name).subscribe(
      (data:any)=>{
        this.displayproductarr=data;
        console.log(this.proarr);
        console.log(data);
      });
    }
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
            this.temp_order_qty=1;
            this.fk_product_id=item.product_id;
            //console.log(this.product_qty);
              console.log(this.temp_order_amount);
             this.addtocart_ser.addtemporder(new  addtocart(this.temp_order_amount,this.temp_order_qty,this.fk_product_id,this.fk_email_id)).subscribe(
               (data: any) => {
                 console.log(data);
                 alert("Item Added In To The Cart");


                });
          }



    });
        }
    changedItem(searchedItem) {
      this.searchItem = true;
      this.searchedKeyword = searchedItem;
      if (searchedItem == "") {
        searchedItem = " ";
        this.ngOnInit();
        this.searchItem = false;
      }
      else {
        this.product_Ser.getsearchproduct(searchedItem).subscribe(
          (data: any) => {

            this.displayproductarr = data;
            console.log(this.proarr);

          }

        )

      }

    }

  sorting()
{
  console.log(this.sort);
  if(this.sort=="Sort By Low To High Price")
  {

    this.product_Ser.sortbyhightolow().subscribe(
      (data: any) => {
      console.log(data);
      this.displayproductarr = data;
    });

  }
  else if(this.sort=="Sort By High To Low Price")
  {
    this.product_Ser.sortbylowtohigh().subscribe(
      (data: any) => {
      console.log(data);
      this.displayproductarr = data;
    });
  }
  else if(this.sort=="Sort By Popularity")
  {
    this.product_Ser.topproductbyname().subscribe(
      (data: any) => {
      console.log(data);
      this.displayproductarr = data;
    });
  }
  else if(this.sort=="All")
  {
    this.product_Ser.getallproduct().subscribe(
      (data: productclass[]) => {
      console.log(data);
      this.displayproductarr = data;
    });
  }

}
onclickwish(item){
  console.log(item,"wishitem");
  this.fk_email_id=localStorage.getItem('user_email_id');
  this.wish_ser.addtowishlist(new wishlist_class(this.fk_email_id,item.product_id,item.product_name,item.product_image,item.product_price,item.fk_brand_id)).subscribe(
    (data:any)=>{
      console.log(data);
      alert("add to wishlist");
    }
  );
}


foods: Food[] = [
  {value: 'Sort By Low To High Price', viewValue: 'Sort By Low To High Price'},
  {value: 'Sort By High To Low Price', viewValue: 'Sort By High To Low Price'},
  {value: 'Sort By Popularity', viewValue: 'Sort By Popularity'},
  {value:'All',viewValue:'All Product'}
];
}
