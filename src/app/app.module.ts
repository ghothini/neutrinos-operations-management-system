import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { VisaExtensionComponent } from './components/visa-extension/visa-extension.component';
import { FlightInformationComponent } from './components/flight-information/flight-information.component';
import { GuesthouseServiceComponent } from './components/guesthouse-service/guesthouse-service.component';
import { InternationalTravelComponent } from './components/international-travel/international-travel.component';
import { DomesticTravelComponent } from './components/domestic-travel/domestic-travel.component';
import { VisaApplicationComponent } from './components/visa-application/visa-application.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LeaveApplicationComponent } from './components/leave-application/leave-application.component';
import { ManagerLandingComponent } from './components/manager-landing/manager-landing.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { NgChartsModule } from 'ng2-charts';
import { VisasComponent } from './components/visas/visas.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    PageNotFoundComponent,
    LandingComponent,
    VisaExtensionComponent,
    FlightInformationComponent,
    GuesthouseServiceComponent,
    InternationalTravelComponent,
    DomesticTravelComponent,
    VisaApplicationComponent,
    ProfileComponent,
    LeaveApplicationComponent,
    ManagerLandingComponent,
    LeavesComponent,
    VisasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }