import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AdminHttpclientService } from '../service/admin-httpclient.service';
import { Ticket } from '../model/ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit {
  ticket;
  isAdmin: boolean;
  constructor(
    private httpClientService: HttpclientService,
    private _location: Location,
    private adminHttp: AdminHttpclientService,
    private _actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('ticket detail loading');
    if (
      sessionStorage.getItem('username').localeCompare('admin@nagarro.com') == 0
    ) {
      this.isAdmin = true;
      const id = +this._actRoute.snapshot.paramMap.get('id');
      this.adminHttp.getTicketById(id).subscribe((res) => {
        this.ticket = res;
        console.log(this.ticket);
      });
    } else {
      this.isAdmin = false;
      const id = +this._actRoute.snapshot.paramMap.get('id');
      this.httpClientService
        .getTicketById(id)
        .subscribe((response) => (this.ticket = response));
    }
  }

  // getTicket():void{

  // }

  // getTicketIfAdmin():void{

  // }
  download():void {
    console.log('Download file', this.ticket.downloadLink);
    this.httpClientService.getPdf(this.ticket.downloadLink).subscribe(
      (data) => {
        var file = new Blob([data], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      },
      (error) => {
        alert('Error while loading file.');
      }
    );
  }

  onclick() {
    this._location.back();
  }
}
