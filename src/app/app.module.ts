import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProviderComponentComponent } from './provider-component/provider-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { SliderComponentComponent } from './slider-component/slider-component.component';
import { AccountComponentComponent } from './account-component/account-component.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { ListDetailComponentComponent } from './list-detail-component/list-detail-component.component';
import { UsersModuleModule } from './users-module/users-module.module';
import { ProductsModuleModule } from './products-module/products-module.module';
import { ProvidersModuleModule } from './providers-module/providers-module.module';
import { C1Component } from './cour/c1/c1.component';
import { C2Component } from './cour/c2/c2.component';


@NgModule({
  declarations: [
    AppComponent,
    MainInvoiceComponentComponent,
    InvoiceListComponentComponent,
    InvoiceComponentComponent,
    HomeComponentComponent,
    NotFoundComponentComponent,
    NavBarComponentComponent,
    FooterComponentComponent,
    C1Component,
    C2Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModuleModule,
    ProductsModuleModule,
    ProvidersModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
