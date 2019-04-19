import { Injectable } from '@angular/core';
import { Userclass } from "../models/user_class";
import { Userclasslogin } from "../models/user_class_login";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { emailclass } from '../models/email_class';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public _http:HttpClient) { }
  private getalluser_login_getalluserbyid="http://localhost:3000/getalluser_login_getalluserbyid/";
  private signup_editprofile="http://localhost:3000/signup_editprofile/";
  private forgetpassword="http://localhost:3000/forgetpassword/";
  private email="http://localhost:3000/mail/";

  signup(item:Userclass)
  {
    return this._http.post(this.signup_editprofile,item);
  }
  login(item:Userclasslogin)
  {
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.getalluser_login_getalluserbyid,x,{headers:h});
  }
  getuserbyid(user_email_id)
  {
    return this._http.get(this.getalluser_login_getalluserbyid+user_email_id);
  }
  userforgetpassword(item:Userclass)
  {
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.forgetpassword,x,{headers:h});
  }
  updateuserdata(item:Userclass)
  {
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.signup_editprofile +item.user_email_id,x,{headers:h});
  }
  sentMail(item:emailclass)
  {
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    console.log(body);
    return this._http.post(this.email,body,{headers:_abc});
  }
  getalluser()
  {
    return this._http.get(this.getalluser_login_getalluserbyid);

  }
}
