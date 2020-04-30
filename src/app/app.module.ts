import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TicketListComponent } from './ticket-list/ticket-list.component'
import{ HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TicketListComponent,
    
    PageNotFoundComponent,
    
    LoginComponent,
    
    LogoutComponent,
    
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  {

    provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true 
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
