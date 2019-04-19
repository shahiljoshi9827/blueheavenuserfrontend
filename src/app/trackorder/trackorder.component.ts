import { Component, OnInit } from '@angular/core';
import { TrackorderService } from '../service/trackorder.service';
@Component({
  selector: 'app-trackorder',
  templateUrl: './trackorder.component.html',
  styleUrls: ['./trackorder.component.css']
})
export class TrackorderComponent implements OnInit {

  constructor(public track_ser:TrackorderService) { }
  fk_email_id:string;
  mainorder_id:number;
  cnt:number=1;
  f1:boolean=false;
  f2:boolean=false;
  f3:boolean=false;
  ngOnInit() {
  }

  ontrackorder(mainorder_id,fk_email_id)
  {
    if(mainorder_id==null || fk_email_id==null)
    {
      if(mainorder_id==null && fk_email_id==null)
      {
        alert("Enter OrderId and Email");
      }
      else if(mainorder_id==null)
      {
        alert("Enter OrderId");
      }
      else if(fk_email_id==null)
      {
        alert("Enter Email");
      }
    }
    else
    {
    console.log(this.mainorder_id);
    console.log(this.fk_email_id);
    this.track_ser.trackorder(this.mainorder_id,this.fk_email_id).subscribe(
      (data: any) => {
        console.log(data);
        this.cnt++;

      });

      if(this.cnt==1)
      {
        this.f1=true;
        this.f2=false;
        this.f3=false;
      }
      else if(this.cnt==2)
      {
        this.f1=false;
        this.f2=true;
        this.f3=false;

      }
      else if(this.cnt==3)
      {
        this.f1=false;
        this.f2=false;
        this.f3=true;
       this.cnt=0;
      }
      else
      {
        this.f1=true;
        this.f2=false;
        this.f3=false;
        this.cnt=0;
      }
  }
  }
}
