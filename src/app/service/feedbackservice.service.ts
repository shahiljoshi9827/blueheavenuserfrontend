import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { feedclass } from '../models/feed_class';
import { feedbackclass } from '../models/feedback_class';

@Injectable({
  providedIn: 'root'
})
export class FeedbackserviceService {
  constructor(public _http:HttpClient) { }
  private feedback="http://localhost:3000/feedback/";
  private email="http://localhost:3000/mail/";

  getfeedback(){
    return this._http.get(this.feedback);

  }
  sentMail(item:feedclass)
  {
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    console.log(body);
    return this._http.post(this.email,body,{headers:_abc});
  }
  getfeedbackbyproductid(item:number){
    return this._http.get(this.feedback+item);
  }
  addfeedback(item:feedclass)
  {
    return this._http.post(this.feedback,item);
  }

}
