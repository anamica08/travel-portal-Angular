import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Router } from '@angular/router';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import{AdminHttpclientService} from '../service/admin-httpclient.service'


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})



export class TicketListComponent implements OnInit {
tickets:[];

 displayedColumns: string[] = ['tickedId', 'from','priority','travelCity', 'status', 'submitDate','actions'];
 dataSource ;

@ViewChild(MatSort) sort:MatSort;
@ViewChild(MatPaginator) paginator:MatPaginator;

 constructor(
    private httpClientService: HttpclientService,
     private router:Router,
     private adminHttpClientService:AdminHttpclientService

  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('username').localeCompare("admin@nagarro.com") == 0){
      this.adminHttpClientService.getAllTickets().subscribe((response) => {
        console.log(response);
       this.tickets = response;
       this.dataSource = new MatTableDataSource(response);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
      });
    }else{
      this.httpClientService.getMyTickets().subscribe((response) => {
        console.log(response);
       this.tickets = response;
       this.dataSource = new MatTableDataSource(response);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
      });
    }
  }
onRowClicked(row){
  console.log(row);
  this.router.navigateByUrl(`/ticketDetail/${row.ticketId}`);
}
applyFilter(filterText:string){
  this.dataSource.filter = filterText.trim().toLowerCase();
}

}
