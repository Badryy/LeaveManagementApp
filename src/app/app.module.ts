import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { LeavesComponent } from './leaves/leaves.component';
import { CardComponent } from './card/card.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LatestRequestComponent } from './latest-request/latest-request.component';
import { OverviewComponent } from './overview/overview.component';
import { AdminCardComponent } from './admin-card/admin-card.component';
import { AdminLatestRequestComponent } from './admin-latest-request/admin-latest-request.component';
import { RequestsComponent } from './requests/requests.component';
import { SettingsComponent } from './settings/settings.component';
import { StaffsComponent } from './staffs/staffs.component';
import { LeavesTypeComponent } from './leaves-type/leaves-type.component';
import { CompanyInformationComponent } from './company-information/company-information.component';
import { ModalComponent } from './modal/modal.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    DefaultLayoutComponent,
    LeavesComponent,
    CardComponent,
    LeaveRequestComponent,
    LatestRequestComponent,
    OverviewComponent,
    AdminCardComponent,
    AdminLatestRequestComponent,
    RequestsComponent,
    SettingsComponent,
    StaffsComponent,
    LeavesTypeComponent,
    CompanyInformationComponent,
    ModalComponent,
    LeaveDetailsComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }