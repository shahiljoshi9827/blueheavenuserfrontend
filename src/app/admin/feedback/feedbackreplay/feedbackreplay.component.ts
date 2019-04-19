import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FeedbackComponent } from '../feedback.component';
import { UserServiceService } from 'src/app/service/user-service.service';
import { emailclass } from 'src/app/models/email_class';
import { FeedbackserviceService } from 'src/app/service/feedbackservice.service';
import { feedclass } from 'src/app/models/feed_class';

@Component({
  selector: 'app-feedbackreplay',
  templateUrl: './feedbackreplay.component.html',
  styleUrls: ['./feedbackreplay.component.css']
})
export class FeedbackreplayComponent implements OnInit {

  constructor(public _ser:UserServiceService,public _ser1:FeedbackserviceService,public dialogref:MatDialogRef<FeedbackComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {
    console.log("Insadsf",data)
   }
   feedback:string;
   fk_email_id:string;
  ngOnInit() {
    this.fk_email_id=localStorage.getItem('emailid')

  }
  sendfeedback()
  {
    this._ser.getuserbyid(this.fk_email_id).subscribe(
      (data:any[])=>
      {
         {
         // this.feedback=data[0].feedback;
          this._ser1.sentMail(new feedclass(this.fk_email_id,"Your Password is :"+this.feedback,"asssa")).subscribe(
          (data:any[])=>
            {
            console.log(data);
             }
          );
        }
      }
    );
    console.log(this.feedback);
    console.log(this.fk_email_id)
    this.dialogref.close();
  }
  cancle()
  {
    this.dialogref.close();
  }

}
