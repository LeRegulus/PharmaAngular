import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductComponent} from "./components/product/product.component";
import {ViewProductComponent} from "./components/view-product/view-product.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {InvestorComponent} from "./components/investor/investor.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ViewProductComponent},
  {path: 'investor', component: InvestorComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
