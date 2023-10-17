import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModuleRoutingModule } from './users-module-routing.module';
import { ListDetailComponentComponent } from '../list-detail-component/list-detail-component.component';
import { ListUserComponentComponent } from '../list-user-component/list-user-component.component';
import { AccountComponentComponent } from '../account-component/account-component.component';
import { SliderComponentComponent } from '../slider-component/slider-component.component';
import { UserComponentComponent } from '../user-component/user-component.component';


@NgModule({
  declarations: [
    UserComponentComponent,
    SliderComponentComponent,
    AccountComponentComponent,
    ListUserComponentComponent,
    ListDetailComponentComponent
  ],
  imports: [
    CommonModule,
    UsersModuleRoutingModule
  ]
})
export class UsersModuleModule { }
