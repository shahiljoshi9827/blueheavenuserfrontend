export class product_addtocartclass{
  constructor(
     public product_id ?:number,
     public product_name ?:string ,
     public product_image ?:string ,
     public product_discription ?:string,
     public product_price ?:number,
     public product_qty ?:number,
     public fk_brand_id ?:number,
     public temp_order_id ?:number,
     public order_amount ?:number,
     public order_qty ?:number,
     public fk_product_id ?:number,
     public fk_email_id ?:string
  ){}
};
