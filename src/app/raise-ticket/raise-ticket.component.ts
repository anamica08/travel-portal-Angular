import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  isEmployee:boolean;
  constructor() { }

  ngOnInit(): void {
    this.isEmployee = sessionStorage.getItem('username').localeCompare("admin@nagarro.com") == 0?false:true;
    console.log(this.isEmployee,sessionStorage.getItem('username'))
  }
  }


