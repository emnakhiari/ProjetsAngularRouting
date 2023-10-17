import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsModuleRoutingModule } from './products-module-routing.module';
import { ProductComponentComponent } from '../product-component/product-component.component';


@NgModule({
  declarations: [
    ProductComponentComponent,
  ],
  imports: [
    CommonModule,
    ProductsModuleRoutingModule
  ]
})
export class ProductsModuleModule { }
