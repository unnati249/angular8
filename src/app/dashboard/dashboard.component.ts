import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  LineChart=[];
  currentTab = 0

  ngOnInit()
  {
  this.LineChart = new Chart('lineChart', {
  type: 'line',
  data: {
  labels: ["May 16", "May 17", "May 18", "May 19", "May 20", "May 21","May 22"],
  datasets: [{
    label:'',
      data: [10,8, 13, 11, 16, 15,18],
      fill:true,
      lineTension:0.2,
      borderColor:"#5B51DC",
      borderWidth: 1,
      backgroundColor:"rgb(236,236,251)",
      hoverBorderColor:"#5B51DC"
  }]
  }, 
  options: {
  scales: {
    xAxes: [{
        gridLines: {
            display:false
        }
    }],
    yAxes: [{
        gridLines: {
            display:false
        },
        ticks: {
          display: false
      }
    }]
  },
    legend: {
        display: false
    }
  }
  });




}
changeTab(id){
  this.currentTab = id
}


  }


