import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../app/header/header.component';
import { TicketListComponent } from '../app/ticket-list/ticket-list.component';
import { PageNotFoundComponent } from '../app/page-not-found/page-not-found.component';
import {LoginComponent} from '../app/login/login.component';
import {LogoutComponent} from '../app/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  {path:"",component:LoginComponent},
  { path: 'ticket', component: TicketListComponent ,canActivate:[AuthGaurdService]},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },



  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
