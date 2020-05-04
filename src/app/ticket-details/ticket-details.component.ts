import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  ticket;
  constructor(
    private httpClientService: HttpclientService, 
    private router:Router,
    private _location:Location,
    private _actRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.getTicket();
  }

  getTicket():void{
    const id= +this._actRoute.snapshot.paramMap.get('id');
    this.httpClientService.getTicketById(id)
    .subscribe(response=>this.ticket=response)
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

