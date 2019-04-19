import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { billprobilldclass } from '../models/billprobilldclass';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  constructor(public product_Ser:ProductServiceService) { }
  fk_email_id:string;
  pastorder:billprobilldclass[]=[];
  ngOnInit() {
    this.fk_email_id=localStorage.getItem("email_id");

    this.product_Ser.getpastorder(this.fk_email_id).subscribe(
      (data: any) => {
        this.pastorder=data;
        console.log(data);
      });

  }

}
