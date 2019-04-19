import { Routes,RouterModule } from '@angular/router';
import { SignuppageComponent } from "./signuppage/signuppage.component";
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductComponent } from './admin/product/product.component';
import { HomeComponent } from './admin/home/home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { ProductdisplayComponent } from './admin/product/productdisplay/productdisplay.component';
import { UpdateproductComponent } from './admin/product/updateproduct/updateproduct.component';
import { OrderComponent } from './admin/order/order.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { ManageuserComponent } from './admin/manageuser/manageuser.component';
import { FeedbackreplayComponent } from './admin/feedback/feedbackreplay/feedbackreplay.component';
import { MenuComponent } from './admin/menu/menu.component';
import { AdduserComponent } from './admin/manageuser/adduser/adduser.component';
import { UpdateuserComponent } from "./admin/manageuser/updateuser/updateuser.component";
import { ProductclickComponent } from './displayproduct/productclick/productclick.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CheckoutComponent } from './displayproduct/checkout/checkout.component';
import { addtocart } from './models/addtocart_class';
import { AddtocartpageComponent } from './displayproduct/addtocartpage/addtocartpage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MyorderComponent } from './myorder/myorder.component';
	  const arr:Routes=[
        {path:'login',component:LoginpageComponent},
        {path:'home',component:HomeComponent},
        {path:'homeuser',component:HomeuserComponent},
        {path:'signup',component:SignuppageComponent},
        {path:'displayuser',component:DisplayuserComponent},
        {path:'edituser/:user_email_id',component:EdituserComponent},
        {path:'forgetpassword',component:ForgetpasswordComponent},
        {path:'product',component:ProductComponent},
        {path:'productdisplay',component:ProductdisplayComponent},
        {path:'productupdate/:product_id',component:UpdateproductComponent},
        {path:'order',component:OrderComponent},
        {path:'feedback',component:FeedbackComponent},
        {path:'manageuser',component:ManageuserComponent},
        {path:'feedbackreplay/:id',component:FeedbackreplayComponent},
        {path:'adduser',component:AdduserComponent},
        {path:'updateuseradmin/:user_email_id',component:UpdateuserComponent},
        {path:'productclick/:product_id',component:ProductclickComponent},
        {path:'checkout',component:CheckoutComponent},
        {path:'addtocart',component:AddtocartpageComponent},
        {path:'contactus',component:ContactusComponent},
        {path:'aboutus',component:AboutusComponent},
        {path:'displayproduct',component:DisplayproductComponent},
        {path:'faq',component:FaqComponent},
        {path:'confirmation',component:ConfirmationComponent},
        {path:'track',component:TrackorderComponent},
        {path:'wishlist',component:WishlistComponent},
        {path:'myorder',component:MyorderComponent},
        {path:'',component:HomeuserComponent}

        {path:'**',component:Pagenotfound404Component},

    ];

  export const routing=RouterModule.forRoot(arr);
