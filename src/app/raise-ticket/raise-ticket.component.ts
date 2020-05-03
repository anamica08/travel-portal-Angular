import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isDate } from 'util';
import { DatePipe } from '@angular/common';
import { HttpclientService } from '../service/httpclient.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  
  minDate: Date;
  

  constructor(
    private fb: FormBuilder,
    private _http: HttpclientService,
    public router: Router
  ) {
    
    this.minDate = new Date();
  }

  ngOnInit(): void {
   
  }
  //formbuilder
  addTicketForm = this.fb.group({
    requestType:['',Validators.required],
    priority:['',Validators.required],
    from:['',Validators.required],
    travelCity:['',Validators.required],
    startDate:[new DatePipe('en').transform('', 'yyyy/MM/dd'),Validators.required],
    endDate:['',Validators.required],
    passportNumber:['',[Validators.required,Validators.maxLength(25)]],
    projectName:['',[Validators.required,Validators.maxLength(100)]],
    borneBy:['',Validators.required],
    approver:['',[Validators.maxLength(100)]],
    expectedDuration:['',Validators.maxLength(100)],
    allowedAmount:['',Validators.maxLength(500)],
    extraDetails:['',Validators.maxLength(1000)],
   

  })

  
  onFormSubmit():void{
    this._http.raiseTicket(this.addTicketForm.value).subscribe(
      response=>{
       alert("Thank You! Your Ticket has been raised Succesfully! We will start working on it soon.")
        this.router.navigateByUrl('/ticket')
    },
      error=>{
        console.log(error)
      }
    );
  }

   cities = [{ city: "Vardenis" },
    { city: "Martuni" },
    { city: "Paris" },
    { city: "Dijon" },
    { city: "Berlin" },
    { city: "Munich" },
    { city: "Potsdam" },
    { city: "Indore" },
    { city: "Pune" },
    { city: "New Delhi" },
    { city: "Banglore" },
    { city: "Jaipur" },
    { city: "Tokya" },
    { city: "Osava" },
    { city: "Toyota" },
    { city: "Amsterdam" },
    { city: "Harlem" },
    { city: "London" },
    { city: "Liverpool" },
    { city: "Manchester" },
    { city: "Atlanta" },
    { city: "Virginia" },
    { city: "Jersey City" },
]

 
  }


