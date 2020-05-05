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
  isDataAvailable: boolean = false;

  constructor(
    private httpClientService: HttpclientService,
    private _location: Location,
    private adminHttp: AdminHttpclientService,
    private _actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //if user is admin then do a different http request.
    if (
      sessionStorage.getItem('username').localeCompare('admin@nagarro.com') == 0
    ) {
      this.getTicketIfAdmin();
    }
    //if user is employee then this http request , because on server
    // a employee is restricted to load only a ticket related to him
    else {
      this.getTicket();
    }
  }

  getTicket(): void {
    this.isAdmin = false;
    const id = +this._actRoute.snapshot.paramMap.get('id');
    this.httpClientService.getTicketById(id).subscribe((response) => {
      this.ticket = response;
      this.isDataAvailable = true;
    });
  }

  getTicketIfAdmin(): void {
    this.isAdmin = true;
    const id = +this._actRoute.snapshot.paramMap.get('id');
    this.adminHttp.getTicketById(id).subscribe((res) => {
      this.ticket = res;
      this.isDataAvailable = true;
      console.log(this.ticket);
    });
  }

  //download file uploaded by admin.
  download(): void {
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
