import { Component, OnInit,Inject } from '@angular/core';
import { MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { feedbackclass } from 'src/app/models/feedback_class';
import { FeedbackserviceService } from 'src/app/service/feedbackservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FeedbackreplayComponent } from "./feedbackreplay/feedbackreplay.component";
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  datasource=new MatTableDataSource();
  displayedColumns: string[] = ['action','feedback_id' , 'feedback', 'feedback_date', 'product_name','fk_email_id','send'];
  public i:number;
  selection = new SelectionModel<feedbackclass>(true, []);
  destroy=new Subject<any>();
  currentDialog:MatDialogRef<FeedbackreplayComponent>=null;
  constructor(private feed_Ser:FeedbackserviceService,private _route:Router,public dialog: MatDialog,public activate_rout:ActivatedRoute) {}
  public feedarr:feedbackclass[]=[];
  fk_email_id:string;
  product_name:string;
  ngOnInit() {
    this.feed_Ser.getfeedback().subscribe(
    (data:feedbackclass[])=>{
        this.feedarr=data;
        this.fk_email_id=data[0].fk_email_id;
        this.datasource.data=this.feedarr;
        console.log()
    })
  }
  ngOnDestroy(){
    this.destroy.next();
  }
  send(element) {
    this.fk_email_id=element.fk_email_id;
    localStorage.setItem("emailid",this.fk_email_id);
    this.activate_rout.params.pipe(takeUntil(this.destroy)).subscribe(params=>{
      if(this.currentDialog)
      {
        this.currentDialog.close();
      }
      this.currentDialog=this.dialog.open(FeedbackreplayComponent,{
        data:{fk_email_id:this.fk_email_id}
      })
      this.currentDialog.afterClosed().subscribe(result=>{
        console.log("this close");
      //  this._route.navigate(['/feedbackreply',this.fk_email_id]);

      })
      })
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datasource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.datasource.data.forEach(row => this.selection.select(row));
  }

}











