import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { orderclass } from 'src/app/models/order_class';
import { SelectionModel } from '@angular/cdk/collections';
import { OrderserviceService } from 'src/app/service/orderservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  datasource=new MatTableDataSource();
  displayedColumns: string[] = ['action','order_id','order_amount','order_qty', 'order_status','product_name','fk_email_id','accept','reject'];
  public i:number;
  selection = new SelectionModel<orderclass>(true, []);
  constructor(private order_Ser:OrderserviceService,private _route:Router) { }
 public orderarr:orderclass[]=[];
   public product_id:number;
   public product_name:string;

  ngOnInit() {

    this.order_Ser.getpastorder().subscribe(
      (data:orderclass[])=>{
          this.orderarr=data;
          console.log(data);
          this.datasource.data=this.orderarr;
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

}
