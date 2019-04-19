import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { UserServiceService } from "../service/user-service.service";
import { Userclass } from '../models/user_class';
@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {

  constructor(private ser:UserServiceService,private _route:Router,private _aroute:ActivatedRoute) { }
  public user_email_id:string;
  public user_name:string;
  public user_mobile_no:string;
  public user_gender:string;
  public user_dob:Date;
  public user_address:string;
  public userarr:Userclass[];
  ngOnInit() {
    this.user_email_id=localStorage.getItem("email_id");
    this.ser.getuserbyid(this.user_email_id).subscribe(
      (data:any)=>{
        console.log(data);
         this.user_name=data[0].user_name;
         this.user_mobile_no=data[0].user_mobile_no;
         this.user_gender=data[0].user_gender;
         this.user_dob=data[0].user_dob.substring(0,10);
         this.user_address=data[0].user_address;

      }
  )
  }
  edituser(){
    this._route.navigate(['/edituser',this.user_email_id]);
  }


}
