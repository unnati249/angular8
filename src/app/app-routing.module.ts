import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { WaitlistsComponent } from './waitlists/waitlists.component';
import { ModelsComponent } from './models/models.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { RemindersComponent } from './reminders/reminders.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'customers',component:CustomersComponent},
  {path:'waitlists',component:WaitlistsComponent},
  {path:'models',component:ModelsComponent},
  {path:'vehicles',component:VehiclesComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'services',component:ServicesComponent},
  {path:'reports',component:ReportsComponent},
  {path:'reminders',component:RemindersComponent},
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const RoutingComponent = [
  LoginComponent,
  DashboardComponent,
  CustomersComponent,
  WaitlistsComponent,
  ModelsComponent,
  VehiclesComponent,
  BookingsComponent,
  ServicesComponent,
  ReportsComponent,
  RemindersComponent
];

