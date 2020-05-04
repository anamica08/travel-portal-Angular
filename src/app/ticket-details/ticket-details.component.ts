import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'
import{AdminHttpclientService } from '../service/admin-httpclient.service'

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  ticket = null;
  isAdmin:boolean;
  constructor(
    private httpClientService: HttpclientService, 
    private _location:Location,
    private adminHttp:AdminHttpclientService,
    private _actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('username').localeCompare("admin@nagarro.com") == 0){
      this.isAdmin = true;
      this.getTicketIfAdmin();
    }else{
      this.isAdmin=false;
      this.getTicket();
    }
  }

  getTicket():void{
    const id= +this._actRoute.snapshot.paramMap.get('id');
    this.httpClientService.getTicketById(id)
    .subscribe(response=>this.ticket=response)
  }

  getTicketIfAdmin():void{
    const id = +this._actRoute.snapshot.paramMap.get('id');
    this.adminHttp.getTicketById(id)
    .subscribe(res=>{
      this.ticket=res;
      console.log(this.ticket)
    
    }
      )
    
  }
  download(){
    console.log("Download file",this.ticket.downloadLink);
    this.httpClientService.getPdf(this.ticket.downloadLink).subscribe(
      data=>{
        var file = new Blob([data], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      },error=>{
        alert("Error while loading file.")
      }
    )
      
    }

    onclick(){
      this._location.back();
    }

  }

