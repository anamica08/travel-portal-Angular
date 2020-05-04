import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import {Router} from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';
import { AdminHttpclientService } from '../service/admin-httpclient.service';



@Component({
  selector: 'app-admin-update-ticket',
  templateUrl: './admin-update-ticket.component.html',
  styleUrls: ['./admin-update-ticket.component.css']
})
export class AdminUpdateTicketComponent implements OnInit {
  historyState;
  
  constructor(
    private _loc:Location,
    private _router:Router,
    private fb: FormBuilder,
    private _http: AdminHttpclientService,
  ) { }

  ngOnInit(): void {
this.historyState = history.state.state;
    
    
  }
  
    updateTicketForm = this.fb.group({
      status:["In Process"],
      remarks:[''],
      files:[''],
    });
  
 


  back(){
    this._loc.back();
  }
  
  submit(){

  }


  
}
