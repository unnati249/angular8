import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  currentTab = 0;
  customers = [
    {
      "service_id":"CH12345",
      "customer":"Rakesh",
       "booking_id":"L19E10372",
       "s_mobile":"9874562549",
       "service_place":"HOME SERVICE",
       "service_date":"01/06/2019",
        "time":"1:49 AM",

    },
    {
      "service_id":"CH12345",
      "customer":"Rakesh",
       "booking_id":"L19E10372",
       "s_mobile":"9874562549",
       "service_place":"HOME SERVICE",
       "service_date":"01/06/2019",
        "time":"1:49 AM",

    },
    {
      "service_id":"CH12345",
      "customer":"Rakesh",
       "booking_id":"L19E10372",
       "s_mobile":"9874562549",
       "service_place":"HOME SERVICE",
       "service_date":"01/06/2019",
        "time":"1:49 AM",
    },
    {
      "service_id":"CH12345",
      "customer":"Rakesh",
       "booking_id":"L19E10372",
       "s_mobile":"9874562549",
       "service_place":"HOME SERVICE",
       "service_date":"01/06/2019",
        "time":"1:49 AM",
    },
  ]
    
  constructor() { }

  ngOnInit() {
  }
  changeTab(id){
    this.currentTab = id
  }
}
