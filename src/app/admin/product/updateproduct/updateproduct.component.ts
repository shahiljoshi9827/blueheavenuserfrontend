import { Component, OnInit ,ViewChild} from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { productclass } from '../../../models/product_class';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  constructor(public _active:ActivatedRoute,private product_Ser:ProductServiceService,private _abc:Router) { }
  public product_id:number;
  public product_name:string="";
  public product_image:string="";
  public product_discription:string="";
  public product_price:number;
  public product_qty:number;
  public fk_brand_id:number;
  public selectedfile:File=null;
  public flag:boolean=false;
  context=CanvasRenderingContext2D;
  @ViewChild("mycanvas") mycanvas;
  ngOnInit() {

      this._active.params.subscribe(
        (x:Params)=>{
          this.product_id=x['product_id'];
          this.product_Ser.getproductbyid(this.product_id).subscribe(
            (data:any)=>{
              this.product_name=data[0].product_name;
              this.product_image=data[0].product_image;
              this.product_discription=data[0].product_discription;
              this.product_price=data[0].product_price;
              this.product_qty=data[0].product_qty;
              this.fk_brand_id=data[0].fk_brand_id;

            }
          )
        }
      )

  }
  onchange(value)
  {
    this.selectedfile=<File>value.target.files[0];
    if(this.selectedfile)
    {
      this.flag=true;

    }
  }

updateproduct(){

  const fd = new FormData();
    if(this.flag)
    {

      fd.append("product_id",this.product_id.toString());
      fd.append("product_name", this.product_name);
      fd.append("product_discription", this.product_discription);
      fd.append("fk_brand_id", this.fk_brand_id.toString());
      fd.append("product_price", this.product_price.toString());
      fd.append("product_qty",this.product_qty.toString());

      fd.append("product_image", this.selectedfile, this.selectedfile.name);
          this.product_Ser.updateProduct_image(fd).subscribe(
            (data:any)=>
            {
              console.log(data);
            }
          );
    }
    else
    {
      this.product_Ser.updateproduct(new productclass(this.product_id,this.product_name,this.product_image,this.product_discription,this.product_price,this.product_qty,this.fk_brand_id)).subscribe(
          (data:any)=>{
            console.log(data);
            }
        );
    }
  }
}


