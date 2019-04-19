export class billdetails{
  constructor(
    public amount?:number,
    public qty?:number,
    public fk_bill_id?:number,
    public fk_product_id?:number,
    public fk_email_id?:string,

  ){}
};
