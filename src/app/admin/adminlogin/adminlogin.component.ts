import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../../service/user-service.service";
import { Userclass } from "../../models/user_class";
import { Userclasslogin } from '../../models/user_class_login';
import { Router } from "@angular/router";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  user_email_id:string;
  user_password:string;
  public flag:boolean=true;
  constructor(private ser:UserServiceService,private _route:Router) { }

  ngOnInit() {

  }
  loginuser(){

    this.ser.login(new Userclasslogin(this.user_email_id,this.user_password)).subscribe(
      (data:any[])=>{
        console.log(data);
        console.log(data.length)
        if (data.length>0)
        {

          this._route.navigate(['/menu/home']);

        }
        else
        {
          alert("your Email Id or Passwod is Incorect");
        }
      }
    )
    console.log(this.user_email_id);
    console.log(this.user_password);
  }
  cancel()
  {
    this.user_email_id='';
    this.user_password='';
  }

}
