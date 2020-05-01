import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators, 
} from '@angular/forms';
import { HttpclientService } from '../service/httpclient.service';
import { Router, NavigationStart } from '@angular/router';
import { Event as NavigationEvent } from "@angular/router";
import { HostListener } from '@angular/core';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  
  citySelected: string;
  countrySelected: String;
  emailRegx = '^[a-zA-Z0-9._%+-]+@nagarro.com$';
  
  
  constructor(
    private fb: FormBuilder,
    private _http: HttpclientService,
    public router: Router
  ) {
    // router.events
		// 	.pipe(
		// 		filter(
		// 			( event: NavigationEvent ) => {
		// 				return( event instanceof NavigationStart );
		// 			}
		// 		)
		// 	)
		// 	.subscribe(
		// 		( event: NavigationStart ) => {
 
		// 			console.group( "NavigationStart Event" );
				
		// 			console.log( "navigation id:", event.id );
		// 			console.log( "route:", event.url );
		// 			console.log( "trigger:", event.navigationTrigger );
		// 			if ( event.navigationTrigger === "popstate" ) {
		// 				this.populateForm();
		// 			}
					
		// 		}
		// 	)
		// ;
 
	}
 
  

  
  //form builder
  regiForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    businessUnit: ['', Validators.required],
    title: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailRegx)]],
    phone: [
      '',
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^(0|[1-9][0-9]*)$'),
      ],
    ],
    address1: ['', Validators.required],
    address2: [''],
    city: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
    state: ['', Validators.required],
    country: ['', Validators.required],
  });

  populateForm() {
    let data = JSON.parse(localStorage.getItem('form'));
    console.log("data",data)
    this.regiForm.setValue({
      firstName: data.firstName,
      lastName: data.lastName,
      businessUnit: data.businessUnit,
      title: data.title,
      email: data.email,
      phone: 
        data.phone,
      address1: data.address1,
      address2: data.address2,
      city: data.city, 
      zip: data.zip,
      state: data.state, 
      country: data.country
    });
  }

  onFormSubmit(regiForm) {
    console.log(this.regiForm.value);
    //this.state=this.regiForm.value;
   // localStorage.setItem('form', JSON.stringify(this.regiForm.value));

    this.router.navigateByUrl('/confirm', { state: this.regiForm.value });
  }
}
