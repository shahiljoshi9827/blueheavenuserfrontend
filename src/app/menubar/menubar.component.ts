import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { productclass } from '../models/product_class';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  email_id:string;
  user_name;
  flag:boolean=false;
  searchItem: boolean = false;
  searchedKeyword: string = '';
  proarr: productclass[] = [];
  searcharr: String[] = [];

  constructor(private breakpointObserver: BreakpointObserver,private _route:Router,private _proser:ProductServiceService) {}
    flag1:string;
  ngOnInit() {
    this.email_id=localStorage.getItem('email');
    //console.log(this.email_id);
    this.user_name=localStorage.getItem("user_name");
    this.flag1=localStorage.getItem("login");
   // console.log(this.user_name);
    if(this.flag1==null)
    {
      this.flag=false;
    }
    else{
   if(this.user_name=="")
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
    }
  }
  logout()
  {

    localStorage.clear();

    this._route.navigate(['/homeuser']);
    this.flag=false;
    this.ngOnInit();
    window.location.reload();
  }  }
