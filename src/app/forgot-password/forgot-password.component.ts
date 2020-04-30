import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @Input() email:string;

 
  constructor(
    private httpClientService: HttpclientService,
  ) { }

  ngOnInit(): void {
  }


  receiveMail(){
    if(this.email != ''){
      this.httpClientService.getMailWithCredentials(this.email).subscribe((response)=>{
      })
    }else{
      alert("Enter Username to Receive credentials.")
    }
  }


}
