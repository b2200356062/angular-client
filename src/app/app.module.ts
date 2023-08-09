import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HouseService } from './house.service';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HouseDetailsComponent,
    DashboardComponent,
    FirstPageComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: FirstPageComponent},
      {path: 'houses/:id', component: HouseDetailsComponent}
    ])
  ],
  providers: [HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
