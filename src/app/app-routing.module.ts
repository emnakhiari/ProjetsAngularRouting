import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProviderComponentComponent } from './provider-component/provider-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { AccountComponentComponent } from './account-component/account-component.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { ListDetailComponentComponent } from './list-detail-component/list-detail-component.component';
import { C1Component } from './cour/c1/c1.component';
import { C2Component } from './cour/c2/c2.component';
//http://localhost:4200/invoice?id=1&active=true
const routes: Routes = [
  {path:'InvoiceMain' , component : MainInvoiceComponentComponent},
  {path:'Invoice/:id/:active' , component : InvoiceComponentComponent},
  {path:'Invoice?id=:idp&active=:activep' , component : InvoiceComponentComponent}, 
  {path:'home' , component : HomeComponentComponent},
  {path:'' , component : HomeComponentComponent},
  {path:'users' , loadChildren :()=>import('./users-module/users-module.module').then(m=>m.UsersModuleModule)},
  {path:'product' ,loadChildren :()=>import('./products-module/products-module.module').then(k=>k.ProductsModuleModule)},
  {path:'provider' ,loadChildren :()=>import('./providers-module/providers-module.module').then(t=>t.ProvidersModuleModule)},
  {path:'c1' , component : C1Component},
  {path:'c2' , component : C2Component},
  {path:'**' , component : NotFoundComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
