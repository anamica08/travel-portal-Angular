import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regiForm: FormGroup;  
  citySelected:string
  countrySelected:String
  emailRegx = '^[a-zA-Z0-9._%+-]+@nagarro.com$'
  constructor() { }

  ngOnInit(): void {
    console.log("loadeed registration")
  }
  onFormSubmit(regiForm){

  }
}
