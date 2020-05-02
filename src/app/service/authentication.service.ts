import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { error } from 'protractor';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  _baseURL:string = 'http://localhost:8080';
  constructor(
    private httpClient:HttpClient
  ) { 
     }

     authenticate(username, password) {
      return this.httpClient.post<any>(`${this._baseURL}/authenticate`,{username,password}).pipe(
       map(
         userData => {
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
         }
       )
  
      );
    }
  

  isUserLoggedIn() {
   // let user = sessionStorage.getItem('username');
    let token = sessionStorage.getItem('token')
    //console.log(!(user === null))
    return !(token === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }
}
