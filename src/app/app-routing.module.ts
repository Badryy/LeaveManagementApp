import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeavesComponent } from './leaves/leaves.component';

//Admin Section Route
import { OverviewComponent } from './overview/overview.component';
import { RequestsComponent } from './requests/requests.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '', component: DefaultLayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'leaves', component: LeavesComponent },
      { path: 'leave-request', component: LeaveRequestComponent },
      { path: 'admin', component: OverviewComponent },
      { path: 'requests', component: RequestsComponent }, 
      { path: 'settings', component: SettingsComponent }

    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }