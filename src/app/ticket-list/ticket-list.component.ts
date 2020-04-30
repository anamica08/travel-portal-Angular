import { Component, OnInit } from '@angular/core';
import { Ticket } from '../model/ticket';
import { HttpclientService } from '../service/httpclient.service';
import { Router } from '@angular/router';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})



export class TicketListComponent implements OnInit {
tickets:Ticket[];

 displayedColumns: string[] = ['tickedId', 'requestType','priority', 'status', 'submitDate','actions'];
 dataSource ;

@ViewChild(MatSort) sort:MatSort;
@ViewChild(MatPaginator) paginator:MatPaginator;

 constructor(
    private httpClientService: HttpclientService, private router:Router

  ) { }

  ngOnInit(): void {
    this.httpClientService.getAllTickets().subscribe((response) => {
      console.log(response);
     this.tickets = response;
     this.dataSource = new MatTableDataSource(response);
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
    });
  }
onRowClicked(row){
  console.log(row);
}
applyFilter(filterText:string){
  this.dataSource.filter = filterText.trim().toLowerCase();
}
  

}