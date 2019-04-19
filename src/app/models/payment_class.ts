export class paymentclass{
  constructor(
    public amount?:number,
    public payment_mode?:string,
    public fk_mainorder_id?:number,
    public fk_email_id?:string
  ){}
};
