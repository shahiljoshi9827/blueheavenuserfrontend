import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { wishlist_class } from '../models/wishlist_class';
import { WishlistService } from '../service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wisharr:wishlist_class[]=[];
  user_id:string;
  iteamincart:boolean=true;
  iteaminnotcart:boolean=true;

  constructor(private _wishser:WishlistService,private _route:Router) { }

  onclickdelete(item){

    this._wishser.deletewishlistByID(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.ngOnInit();
      }
    );
    this.ngOnInit();
  }


  onclickback(){
    this._route.navigate(['/product']);
  }

  ngOnInit() {

    this.user_id=localStorage.getItem('user_email_id');
    this._wishser.getAllwishlistById(this.user_id).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.length<=0)
        {
          this.iteaminnotcart=true;
          console.log("not");
        }
        else{
          this.iteaminnotcart=false;
          console.log("not");

        }
        // if(data.length!=0)
        // {
        //   this.iteamincart=false;
        //   this.iteaminnotcart=true;
        // }
        // if(data.length==0)
        // {
        //   this.iteamincart=true;
        //   this.iteaminnotcart=false;
        // }
        this.wisharr=data;
      }
    );
  }
}
