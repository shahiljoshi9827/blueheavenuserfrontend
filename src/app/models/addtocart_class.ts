export class addtocart{
  constructor(

    public order_amount?:number,
    public order_qty?:number,
    public fk_product_id?:number,
    public fk_email_id?:string,
    public temp_order_id?:number
  ){}
};
