import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  ticket;
  constructor(private httpClientService: HttpclientService, private router:Router,private _location:Location) { }

  ngOnInit(): void {
    this.ticket = history.state;
    //case when user tries to visit this 
    //component other than ticket component it will be redirected to page not found.
    if(!history.state.ticketId){
      this.router.navigateByUrl(" ")
    }
  
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

