import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {

  _baseUrl: String = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getEmployees() {  
    return this.httpClient.get<Employee[]>(`${this._baseUrl}/employees`);
  }

  getAllTickets() {
    return this.httpClient.get<Ticket[]>(`${this._baseUrl}/mytickets`);
  }
  
  getMailWithCredentials(email:string){
    return this.httpClient.get<any>(`${this._baseUrl}/${email}/forgotpassword`)
  }

  register(userData){
    return this.httpClient.post<any>(`${this._baseUrl}/register`,userData)
  }
}
