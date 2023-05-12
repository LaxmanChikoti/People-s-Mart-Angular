import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { AuthGuard } from './auth.guard';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeneedsComponent } from './homeneeds/homeneeds.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { StationeryComponent } from './stationery/stationery.component';
import { StorpickupComponent } from './storpickup/storpickup.component';
import { ToysandmoreComponent } from './toysandmore/toysandmore.component';
import { TravelComponent } from './travel/travel.component';
import { TwowheelersComponent } from './twowheelers/twowheelers.component';
import { UserComponent } from './user/user.component';
import { UsercartComponent } from './usercart/usercart.component';

const routes: Routes = [
{path:'groceries',component:GroceriesComponent},
{path:'mobiles',component:MobilesComponent},
{path:'aboutus',component:AboutusComponent},
{path:'fashion',component:FashionComponent},
{path:'electronics',component:ElectronicsComponent},
{path:'homeneeds', component:HomeneedsComponent},
{path:'apliances', component:AppliancesComponent},
{path:'travel',component:TravelComponent},
{path:'toysandmore', component:ToysandmoreComponent},
{path:'twowheelers',component:TwowheelersComponent},
{path:'stationery',component:StationeryComponent},
{path:'showusers', canActivate:[AuthGuard],component:ShowusersComponent},
{path:'login',component:LoginComponent},
{path:'user',component:UserComponent},
{path:'storepickup',component:StorpickupComponent},
{path:'register',component:RegisterComponent},
{path:'admin',component:AdminComponent},
{path:'pay',component:PaymentComponent},
{path:'mycart',component:UsercartComponent},
{path:'ordertracking',component:OrdertrackingComponent},
{path:'home',component:HomeComponent},
{path:'header', component:HeaderComponent},
{path:'',redirectTo:'/user',pathMatch:'full'},
{path:'product',canActivate:[AuthGuard],component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
