import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpclientService } from '../service/httpclient.service';

@Component({
  selector: 'app-ticket-confirmation',
  templateUrl: './ticket-confirmation.component.html',
  styleUrls: ['./ticket-confirmation.component.css']
})
export class TicketConfirmationComponent implements OnInit {
  historyState;
  constructor(public router: Router, private _http: HttpclientService,
    ) { }

  ngOnInit(): void {
    if(!history.state.requestType){
      this.router.navigateByUrl("/raiseTicket")
    }
    this.loadData();
  }


  loadData(){
    this.historyState = history.state;  
  }

  
  onSubmit(){
     this._http.raiseTicket(this.historyState).subscribe(
       response=>{
        alert("Thank You! Your Ticket has been raised Succesfully! We will start working on it soon.")
         this.router.navigateByUrl('/ticket')
     },
       error=>{
         console.log(error)
      }
     );
  }
  
}
