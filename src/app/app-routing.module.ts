import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HouseDetailsComponent } from './house-details/house-details.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: FirstPageComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
