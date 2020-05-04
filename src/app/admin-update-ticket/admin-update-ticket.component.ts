import { Component, OnInit } from '@angular/core';
import {Location, formatDate} from '@angular/common'
import {Router} from '@angular/router'
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AdminHttpclientService } from '../service/admin-httpclient.service';
import { Model} from '../model/model'


@Component({
  selector: 'app-admin-update-ticket',
  templateUrl: './admin-update-ticket.component.html',
  styleUrls: ['./admin-update-ticket.component.css']
})
export class AdminUpdateTicketComponent implements OnInit {
  historyState;
  
  fileList;
  updateTicketForm;
  constructor(
    private _loc:Location,
    private _router:Router,
    private fb: FormBuilder,
    private _http: AdminHttpclientService,
  ) { }

  ngOnInit(): void {
  this.historyState = history.state.state;
  this.updateTicketForm = new FormGroup({
    status:new FormControl('',Validators.required),
    remarks:new FormControl(history.state.state.remarks),
    ticketId:new FormControl(history.state.state.ticketId)
  });
  }
  
  onFileChange(event) {
  this.fileList = event.target.files;
    
  } 
 


  back(){
    this._loc.back();
  }
  
  submit(){
    if (this.fileList.length > 0) {
      const file = this.fileList[0];
      let formData:FormData = new FormData();

      formData.append('file', file,file.name);
      formData.append('ticket',new Blob([JSON.stringify(this.updateTicketForm.value)],
      {
          type: "application/json"
      }));
      console.log(file.size);
     console.log(formData.getAll("file"));
     console.log(formData.get('ticket'))
     
      this._http.uploadFormDetails(formData).subscribe(
        response=>{
         alert("File uploaded.")
         
      },
        error=>{
          console.log(error);
          
        }
      );
    }else{
      let formData:FormData = new FormData();
      formData.append('ticket',new Blob([JSON.stringify(this.updateTicketForm.value)],
      {
          type: "application/json"
      }));
      this._http.uploadFormDetails(formData).subscribe(
        response=>{
         alert("File uploaded.")
         
      },
        error=>{
          console.log(error);
          
        }
      );
    } 
  
  }


  
}
