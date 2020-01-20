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
  
  apiURL: string = 'https://api.on-track.in/api';
  getModels =  this.apiURL + '/getModels';
  authenticate = this.apiURL + '/authenticate';

  constructor(private http: HttpClient) {}

  

//   getModels() {
//     return this.http.get( this.apiURL + '/getModels');
// }

}
