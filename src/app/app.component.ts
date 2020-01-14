import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  models:any = [];

  title = 'newDash';
  mainStatus: boolean = false;
  sidenavStatus: boolean = false;

  selectedItem: any;
  sidenavLinks = [
    { "name": 'dashboard', "icon": 'speed' },
    { "name": 'customers', "icon": "people" },
    { "name": 'waitlists', "icon": 'timer' },
    { "name": 'models', "icon": "directions_bike" },
    { "name": 'vehicles', "icon": 'motorcycle' },
    { "name": 'bookings', "icon": "business" },
    { "name": 'services', "icon": 'build' },
    { "name": 'reports', "icon": "file_copy" },
    { "name": 'reminders', "icon": 'notification_important' }
  ];
  currentUser: Customer;
  constructor(private api: ApiService, private http:HttpClient, private auth:AuthenticationService, private router:Router) { 
    this.auth.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(){
    this.selectedItem = { "name": 'dashboard', "icon": 'speed' }; 
    this.models = [];
    console.log("in ngonit");
    // this.api.getModels().subscribe(data=>{
    //   console.log(data);
    // },err=>console.log(err),
    // ()=>console.log("getModels data*****"));

    // this.http.get(this.api.getModels).subscribe(data=>{
    //   console.log(data);
    // },err=>console.log(err),
    // ()=>console.log("getModels data*****"));

    // //let params = {"username":"unnati@on-track.in","password":"unnatiunnati"};
    // this.http.post(this.api.authenticate,{"username":"unnati@on-track.in","password":"unnatiunnati"}).subscribe(data=>{
    //   console.log(data);
    // },err=>console.log(err),
    // ()=>console.log("authentication*****"));

  }


  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
}

  changeSidenav(){
    console.log("hello");
    this.mainStatus = !this.mainStatus; 
    this.sidenavStatus = !this.sidenavStatus; 

  }

  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue; 
}

  // addColors(a,value){
    // var items = a.parentNode;
    // console.log(items);
    //var items = document.getElementsByClassName(value);
    // console.log(items.children[0]);
    
  //  var items = Array.from(document.querySelectorAll('.'+value));
  // items.classList.add('MyClass');

  // }
}
