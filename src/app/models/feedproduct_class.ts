export class feedproductclass{
  constructor(
    public product_id?:number,
    public product_name?:string,
    public product_image?:string,
    public product_discription?:string,
    public product_price?:number,
    public product_qty?:number,
    public fk_brand_id?:number,
    public feedback_id?:number,
    public feedback?:string,
    public feedback_date?:Date,
    public fk_product_id?:number,
    public fk_email_id?:string,
    public user_email_id?:string,
    public user_name?:string,
    public user_mobile_no?:string,
    public user_gender?:string,
    public user_dob?:string,
    public user_address?:string,
    public user_password?:string,

  ){}
};
