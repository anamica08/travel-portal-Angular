import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = ''
  password:string = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if(this.username != "" && this.password != ""){
      (this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['ticket'])
          this.invalidLogin = false
        },
        error => {
          this.invalidLogin = true
          
  
        }
      )
      );
    }
  
    }
    }
