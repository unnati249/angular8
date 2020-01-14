import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { WaitlistsComponent } from './waitlists/waitlists.component';
import { ModelsComponent } from './models/models.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { RemindersComponent } from './reminders/reminders.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ConfigurationServiceService } from './configuration-service.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    WaitlistsComponent,
    ModelsComponent,
    VehiclesComponent,
    BookingsComponent,
    ServicesComponent,
    ReportsComponent,
    RemindersComponent,
    LoginComponent,
    NavigationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigurationServiceService) =>
        () => configService.loadConfigurationData(),
      deps: [ConfigurationServiceService],
      multi: true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
