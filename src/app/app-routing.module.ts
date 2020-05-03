import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListComponent } from '../app/ticket-list/ticket-list.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import {LoginComponent} from '../app/login/login.component';
import {LogoutComponent} from '../app/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { ForgotPasswordComponent } from '../app/forgot-password/forgot-password.component'
import { CoronaStatsCountryComponent }from '../app/corona-stats-country/corona-stats-country.component'
import { RegistrationComponent } from './registration/registration.component'
import { RegistrationConfirmationComponent} from './registration-confirmation/registration-confirmation.component'
import { TicketDetailsComponent} from './ticket-details/ticket-details.component'
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component'







const routes: Routes = [
  {path:'corona',component:CoronaStatsCountryComponent},
  {path:"",component:LoginComponent}, 
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {
    path:'register',component:RegistrationComponent,
    
     
    
  },
  {path:'confirm',component:RegistrationConfirmationComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
  { path: 'ticket', component: TicketListComponent ,canActivate:[AuthGaurdService]},
  {path:'ticketDetail/:id',component:TicketDetailsComponent,canActivate:[AuthGaurdService]},
  {path:'raiseTicket', component:RaiseTicketComponent,canActivate:[AuthGaurdService]},
  
  
  
  
  



  
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
