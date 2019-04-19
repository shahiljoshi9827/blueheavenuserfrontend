import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { emailclass } from '../models/email_class';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
user_email_id:string;
user_name:string;
user_password:string;
  constructor( private _ser:UserServiceService,private _router:Router,private _act:ActivatedRoute){}

    ngOnInit() {
    }

  forgetpassword()
  {
   this._ser.getuserbyid(this.user_email_id).subscribe(
     (data:any[])=>
     {
       if(data.length==0)
       {
         alert("invalid email_id");
       }
       else
       {
         this.user_password=data[0].user_password;
         this._ser.sentMail(new emailclass(this.user_email_id,"Your Password is :"+this.user_password,"Your password is : ")).subscribe(
         (data:any[])=>
         {
           console.log(data);
            }
         );
       }
     }
   );
  }



}
