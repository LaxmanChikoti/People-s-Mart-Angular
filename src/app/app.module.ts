import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GroceriesComponent } from './groceries/groceries.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeneedsComponent } from './homeneeds/homeneeds.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { TravelComponent } from './travel/travel.component';
import { ToysandmoreComponent } from './toysandmore/toysandmore.component';
import { TwowheelersComponent } from './twowheelers/twowheelers.component';
import { StationeryComponent } from './stationery/stationery.component';
import { HeaderComponent } from './header/header.component';
import { GenderPipe } from './gender.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { ProductComponent } from './product/product.component';
import { UsercartComponent } from './usercart/usercart.component';
import { TotalPipe } from './total.pipe';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { EncryptionService } from '../app/encryption.service';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { StorpickupComponent } from './storpickup/storpickup.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentComponent,
    GroceriesComponent,
    MobilesComponent,
    FashionComponent,
    ElectronicsComponent,
    HomeneedsComponent,
    AppliancesComponent,
    TravelComponent,
    ToysandmoreComponent,
    TwowheelersComponent,
    StationeryComponent,
    HeaderComponent,
    GenderPipe,
    LoginComponent,
    RegisterComponent,
    ShowusersComponent,
    ProductComponent,
    UsercartComponent,
    TotalPipe,
    OrdertrackingComponent,
    UserComponent,
    AdminComponent,
    StorpickupComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [EncryptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
