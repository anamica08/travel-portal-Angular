import { Component, OnInit } from '@angular/core';
import { Location, formatDate } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { AdminHttpclientService } from '../service/admin-httpclient.service';
import { Model } from '../model/model';

@Component({
  selector: 'app-admin-update-ticket',
  templateUrl: './admin-update-ticket.component.html',
  styleUrls: ['./admin-update-ticket.component.css'],
})
export class AdminUpdateTicketComponent implements OnInit {
  historyState;
  isDataAvailable:boolean = false;
  _file;
  updateTicketForm;
  constructor(
    private _loc: Location,
    private _router: Router,
    private fb: FormBuilder,
    private _http: AdminHttpclientService
  ) {}

  ngOnInit(): void {
    this.historyState = history.state.state;
    this.isDataAvailable = true;
    if (history.state.state == null) {
      this._loc.back();
    }
    if(this.isDataAvailable == true){
      this.updateTicketForm = new FormGroup({
        status: new FormControl(history.state.state.status),
        remarks: new FormControl(history.state.state.remarks),
        ticketId: new FormControl(history.state.state.ticketId),
      });
    }
   
  }

  onFileChange(event) {
    this._file = event.target.files;
  }

  back() {
    this._loc.back();
  }

  submit() {
    if (this._file != null) {
      if (this._file.length > 0) {
        //by pass tihs line to only update status not upload file
        const file = this._file[0];
        let formData: FormData = new FormData();
        formData.append('file', file, file.name);
        formData.append(
          'ticket',
          new Blob([JSON.stringify(this.updateTicketForm.value)], {
            type: 'application/json',
          })
        );
        this._http.uploadFormDetails(formData).subscribe(
          (response) => {
            alert('Changes Updated Succesfully.');
            this._loc.back();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else {
      let formData: FormData = new FormData();
      formData.append(
        'ticket',
        new Blob([JSON.stringify(this.updateTicketForm.value)], {
          type: 'application/json',
        })
      );
      this._http.uploadFormDetails(formData).subscribe(
        (response) => {
          alert('Changes Updated Succesfully');
          this._loc.back();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
