import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';
import { Userclass } from 'src/app/models/user_class';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private ser:UserServiceService,private _route:Router) { }

   public flagadmin="yes";
  // public user_email_id:string;
  // public user_password:string;
  // public user_name:string;
  // public user_mobile_no:string;
  // public user_gender:string="Male";
  // public dob_trim:string;
  // public user_dob:string;
  // public user_address:string;
  // public flag:boolean=true;

  ngOnInit() {
    localStorage.setItem("flagadmin",this.flagadmin)
  }
  adduser()
  {
    // this.dob_trim=this.user_dob;
    // this.ser.signup(new Userclass(this.user_email_id,this.user_name,this.user_mobile_no,this.user_gender,this.user_dob,"12345678",this.user_address)).subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //     this._route.navigate(['/menu/displayuser',this.user_email_id]);

    //   }


  }
}
