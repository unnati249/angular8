import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

//import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Employee } from '../shared/employee';
import { Observable, throwError } from 'rxjs';
//import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  customerCountProperty;

  apiURL: string = 'https://api.on-track.in/api';
  getModels =  this.apiURL + '/getModels';
  authenticate = this.apiURL + '/authenticate';
  customerList = this.apiURL + '/getCustomerList';
  customerCount = this.apiURL + '/getCustomerCount';

  constructor(private http: HttpClient) {
   this.customerCountProperty = this.customerCountFunction();
  }
  customerCountFunction(){
    this.http.get(this.customerCount).subscribe(response => {
      //  this.customerCountProperty = response[0]['count'];
      console.log(response[0]['count']);
      return response[0]['count'];
  });
  }

  }