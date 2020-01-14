import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from './customer';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

public currentUserSubject:BehaviorSubject<Customer>;
public currentUser: Observable<Customer>;

  constructor(private http:HttpClient, private api:ApiService) { 
    let test = JSON.parse(localStorage.getItem('currentCustomer'));
    console.log(test);
    this.currentUserSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('currentCustomer')));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log('constructor');
    console.log(this.currentUserSubject);
    console.log(this.currentUser);
  }

  login(username: string, password: string){
    // console.log(username);
    // console.log(password);
   console.log("in auth service*********");
   return this.http.post<any>(this.api.authenticate,{"username":username,"password":password})
   .pipe(map(customer => {
       
          customer = JSON.stringify(customer);
          // console.log(customer);
          if(customer){
          localStorage.setItem('currentCustomer', customer);
          this.currentUserSubject.next(customer);
        //  console.log(this.currentUserSubject);
        //  console.log(this.currentUser);
      
        }
        return customer;
   }));

  }

  public get currentUserValue(): Customer {
    return this.currentUserSubject.value;
}

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentCustomer');

    this.currentUserSubject.next(null);
}
}
