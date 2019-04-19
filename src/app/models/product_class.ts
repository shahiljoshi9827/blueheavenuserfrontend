export class productclass{
  constructor(
    public product_id?:number,
    public product_name?:string,
    public product_image?:string,
    public product_discription?:string,
    public product_price?:number,
    public product_qty?:number,
    public fk_brand_id?:number

  ){}
};
