export class wishlist_class{
  constructor(public fk_user_email_id:string,
      public fk_product_id:number,
      public fk_product_name:string,
      public fk_product_image:string,
      public fk_product_price:number,
      public fk_brand_id:number,

  public  w_id?:number
  ){}
}
