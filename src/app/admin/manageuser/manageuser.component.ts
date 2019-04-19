import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Userclass } from 'src/app/models/user_class';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  datasource=new MatTableDataSource();
  displayedColumns: string[] = ['action','user_email_id' , 'user_name', 'user_mobile_no', 'user_gender','user_dob','user_address','user_password','block'];
  public i:number;
  selection = new SelectionModel<Userclass>(true, []);
  constructor(private user_Ser:UserServiceService,private _route:Router) { }
  public userarr:Userclass[]=[];
  public user_email_id;
  ngOnInit() {
    this.user_Ser.getalluser().subscribe(
      (data:Userclass[])=>{
          this.userarr=data;
          this.user_email_id=data[0].user_email_id;
          this.datasource.data=this.userarr;
      }
    )

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
  adduser()
  {
    this._route.navigate(['/menu/adduser']);
  }
  updateuser()
  {

    this._route.navigate(['/menu/updateuseradmin',this.user_email_id]);
  }
}
