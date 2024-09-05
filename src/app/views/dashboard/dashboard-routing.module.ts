import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../../../guards/admin.guard'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent, 
    canActivate : [adminGuard],
    data: {
      title: $localize`Dashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
