import { Component, OnInit, Inject } from '@angular/core';
import { AddtocartpageComponent } from '../addtocartpage/addtocartpage.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkeditdata',
  templateUrl: './checkeditdata.component.html',
  styleUrls: ['./checkeditdata.component.css']
})
export class CheckeditdataComponent implements OnInit {


  constructor(private _route:Router,public activate_rout:ActivatedRoute,public dialogref:MatDialogRef<AddtocartpageComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {
   }
  ngOnInit() {
  }

}
