import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  currentTab = 0;
  customers = [
    {
      "booking_id":"YTH1234S",
      "name":"Rakesh S",
      "model":"Activa 3G/4G",
      "delivery_type":"Home",
      "plan":"3 months"
      },
      {
        "booking_id":"LRG1234S",
        "name":"Abhinash S",
        "model":"Honda 125",
        "delivery_type":"Home",
        "plan":"3 months"
    },
    {
      "booking_id":"LGH7734S",
      "name":"Abhishek S",
      "model":"Activa 3G/4G",
      "delivery_type":"Home",
      "plan":"3 months"
  },
  {
    "booking_id":"LGH1245S",
    "name":"Raman S",
    "model":"Activa",
    "delivery_type":"Home",
    "plan":"3 months"
}]


  constructor() { }

  ngOnInit() {



  }
changeTab(id){
  this.currentTab = id
}

}
