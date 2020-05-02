import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpclientService } from '../service/httpclient.service';


@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.css']
})
export class RegistrationConfirmationComponent implements OnInit {
  state$;
  constructor(public router: Router, private _http: HttpclientService,) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.state$ = history.state;

    console.log("confirmation",this.state$)
  }

  onEdit(){
    console.log("clicked")
    history.back();
  }

  onSubmit(){
    this._http.register(this.state$).subscribe(
      response=>{
        console.log("Success")
        this.router.navigateByUrl('')
    },
      error=>console.error("Error",error)
    );
    //console.log("final data",this.state$)
  }
}
