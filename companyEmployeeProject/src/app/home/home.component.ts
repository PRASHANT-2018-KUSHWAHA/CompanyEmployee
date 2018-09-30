import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';
import * as Chart from 'chart.js';
import { log } from 'util';

var companyRecord =[];
var employRecord=[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  companyRecord =[];
  employRecord=[];

  Pie: any;

  constructor(private _homeService:HomeServiceService,private _route:Router) { }



  ngOnInit() {

    this._homeService.fetchTheRecord().subscribe(function(data){
      if(data){
       this.companyRecord=data[0];
       this.employRecord=data[1];
      
       console.log(this.companyRecord);
       
    

        console.log(this.companyRecord.length);
        
         //Global Options
              Chart.defaults.global.defaultFontFamily = 'Lato'
              Chart.defaults.global.defaultFontSize = 18
              Chart.defaults.global.defaultFontColor = '#000'
    
    
              //doughnut chart
              this.Pie = new Chart('pie', {
                type: 'doughnut', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
                data: {
                  labels: [
                    'Company',
                    'Employ',
                  ],
                  datasets: [{
                    data: [
                      this.companyRecord.length,
                      this.employRecord.length
                    ],
                    // backgroundColor:'green'
                    backgroundColor: [
                      'rgb(144, 207, 27, 0.9)',
                      'rgb(241, 121, 8, 0.9)',
                      // 'rgb(102, 162, 235, 0.6)',
                      // 'rgb(255, 206, 86, 0.6)',
                      // 'rgb(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 1,
                    borderColor: '#777',
                    hoverBorderWidth: 3,
                    hoverBorderColor: '#000'
                  }]
                },
                options: {
                  title: {
                    display: true,
                    text: 'Company and Employ Chart',
                    fontSize: 25,
                    // position:'centre'
                  },
                  legend: {
                    // display:false,
                    display: true,
                    position: 'left',
                    lebels: {
                      fontColor: '#000'
                    }
                  },
                  layout: {
                    padding: {
                      left: 600,
                      right: 0,
                      bottom: 0,
                      top: 0
                    }
                  },
                  tooltips: {
                    // enabled:false
                    enabled: true,
                    backgroundColor: 'red',
                    fontSize: 18,
                    text: 'Abcd'
    
                  },
                  responsive: true
                }
              });
      
      }
    })
    
  }

}
