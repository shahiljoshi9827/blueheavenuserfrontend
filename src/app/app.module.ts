import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SliderModule } from 'angular-image-slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import { MenubarComponent } from './menubar/menubar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {MatInputModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule ,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatGridListModule,
        MatMenuModule,
        MatTableModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MAT_DIALOG_DEFAULT_OPTIONS,
        MatDialogModule,
        MatSelectModule


      } from '@angular/material';
import { ProductComponent } from './admin/product/product.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { HomeComponent } from './admin/home/home.component';
import { MenuComponent } from './admin/menu/menu.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { ProductdisplayComponent } from './admin/product/productdisplay/productdisplay.component';
import { UpdateproductComponent } from './admin/product/updateproduct/updateproduct.component';
import { OrderComponent } from './admin/order/order.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { ManageuserComponent } from './admin/manageuser/manageuser.component';
import { FeedbackreplayComponent } from './admin/feedback/feedbackreplay/feedbackreplay.component';
import { feedbackclass } from './models/feedback_class';
import { AdduserComponent } from './admin/manageuser/adduser/adduser.component';
import { UpdateuserComponent } from './admin/manageuser/updateuser/updateuser.component';
import { ProductclickComponent } from './displayproduct/productclick/productclick.component';
import { AddtocartpageComponent } from './displayproduct/addtocartpage/addtocartpage.component';
import { CheckoutComponent } from './displayproduct/checkout/checkout.component';
import { CheckeditdataComponent } from './displayproduct/checkeditdata/checkeditdata.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MyorderComponent } from './myorder/myorder.component';
@NgModule({
  declarations: [
    AppComponent,
    SignuppageComponent,
    LoginpageComponent,
    MenubarComponent,
    DisplayuserComponent,
    EdituserComponent,
    ForgetpasswordComponent,
    ProductComponent,
    DisplayproductComponent,
    HomeComponent,
    MenuComponent,
    AdminloginComponent,
    ProductdisplayComponent,
    UpdateproductComponent,
    OrderComponent,
    FeedbackComponent,
    ManageuserComponent,
    FeedbackreplayComponent,
    AdduserComponent,
    UpdateuserComponent,
    ProductclickComponent,
    AddtocartpageComponent,
    CheckoutComponent,
    CheckeditdataComponent,
    AboutusComponent,
    ContactusComponent,
    FaqComponent,
    HomeuserComponent,
    Pagenotfound404Component,
    TrackorderComponent,
    ConfirmationComponent,
    WishlistComponent,
    MyorderComponent
     ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
    routing,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    SliderModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents:[FeedbackreplayComponent,CheckeditdataComponent]
})
export class AppModule { }

