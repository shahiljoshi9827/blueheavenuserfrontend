export class feedbackclass{
  constructor(

    public feedback?:string,
    public fk_product_id?:number,
    public fk_email_id?:string,
    public feedback_date?:Date,
    public feedback_id?:number
  ){}
};
