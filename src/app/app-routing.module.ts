import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../app/header/header.component';
import { TicketListComponent } from '../app/ticket-list/ticket-list.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import {LoginComponent} from '../app/login/login.component';
import {LogoutComponent} from '../app/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { ForgotPasswordComponent } from '../app/forgot-password/forgot-password.component'
import { CoronaStatsCountryComponent }from '../app/corona-stats-country/corona-stats-country.component'
import { RegistrationComponent } from './registration/registration.component'
import { RegistrationConfirmationComponent} from './registration-confirmation/registration-confirmation.component'


const routes: Routes = [
  {path:"",component:LoginComponent}, 
  {path:'register',component:RegistrationComponent},
  { path: 'ticket', component: TicketListComponent ,canActivate:[AuthGaurdService]},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'corona',component:CoronaStatsCountryComponent},
  {path:'confirm',component:RegistrationConfirmationComponent },



  
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
