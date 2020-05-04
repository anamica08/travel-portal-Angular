import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root',
})
export class AdminHttpclientService {

  _baseUrl: String = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getEmployees() {  
    return this.httpClient.get<Employee[]>(`${this._baseUrl}/employees`);
  }

  getAllTickets() {
    return this.httpClient.get<[]>(`${this._baseUrl}/admin/ticket`);
  }
  
  uploadFormDetails(formData:FormData){
    //form data
    return this.httpClient.post<any>(`${this._baseUrl}/admin/ticket/update`,formData);
  }

  getPdf(link){
    return this.httpClient.get(link, {responseType: 'arraybuffer'});
    
  }

  getTicketById(id:number){
    return this.httpClient.get<any>(`${this._baseUrl}/admin/ticket/${id}`);
  }
}

