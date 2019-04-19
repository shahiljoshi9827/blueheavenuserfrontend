export class orderclass{
  constructor(
    public order_amount?:number,
    public order_qty?:number,
    public fk_product_id?:number,
    public fk_email_id?:string,
    public fk_main_order_id?:number,
  ){}
};
