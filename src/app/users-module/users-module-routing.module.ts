import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from '../user-component/user-component.component';
import { SliderComponentComponent } from '../slider-component/slider-component.component';
import { AccountComponentComponent } from '../account-component/account-component.component';
import { ListUserComponentComponent } from '../list-user-component/list-user-component.component';
import { ListDetailComponentComponent } from '../list-detail-component/list-detail-component.component';

const routes: Routes = [
  {path:'' , component : UserComponentComponent , children :[
    {path:'Slider' , component:SliderComponentComponent},
    {path:'Account' , component:AccountComponentComponent},
    {path:'ListeUser' , component:ListUserComponentComponent , children : [
      {path : 'userDetail' , component : ListDetailComponentComponent}
      
    ]},
  ]},
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersModuleRoutingModule { }
