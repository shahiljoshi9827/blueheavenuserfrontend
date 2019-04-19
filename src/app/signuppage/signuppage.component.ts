import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../service/user-service.service";
import { Userclass } from "../models/user_class";
import { Router } from "@angular/router";
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  constructor(private ser:UserServiceService,private _route:Router) { }


  public user_email_id:string;
  public user_password:string;
  public user_name:string;
  public user_mobile_no:string;
  public user_gender:string="Male";
  public dob_trim:string;
  public user_dob:string;
  public user_address:string;
  public flag:boolean=true;
  public adminflag="";

  ngOnInit() {
      this.adminflag=localStorage.getItem('flagadmin');
  }
  signupuser()
  {
          this.dob_trim=this.user_dob;
          this.ser.signup(new Userclass(this.user_email_id,this.user_name,this.user_mobile_no,this.user_gender,this.user_dob,this.user_password,this.user_address)).subscribe(
              (data:any)=>{
              console.log(data);
              alert("Signup Succesfull");
             this._route.navigate(['/login',this.user_email_id]);
            });
  }
  loginuser(){
    this._route.navigate(['']);
  }
}
