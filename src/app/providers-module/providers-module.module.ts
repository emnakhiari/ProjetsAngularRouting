import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersModuleRoutingModule } from './providers-module-routing.module';
import { ProviderComponentComponent } from '../provider-component/provider-component.component';


@NgModule({
  declarations: [
    ProviderComponentComponent
  ],
  imports: [
    CommonModule,
    ProvidersModuleRoutingModule
  ]
})
export class ProvidersModuleModule { }
