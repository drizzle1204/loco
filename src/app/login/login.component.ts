import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  view: any[] = [600, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
 showXAxisLabel = true;
 xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  colorScheme = {
   domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
 };

 // pie
  showLabels = true;

 // data goes here
  single = [
 {
   name: 'China',
   value: 2243772
 },
 {
   name: 'USA',
   value: 1126000
 },
 {
   name: 'Norway',
   value: 296215
 },
 {
   name: 'Japan',
   value: 257363
 },
 {
   name: 'Germany',
   value: 196750
 },
 {
   name: 'France',
   value: 204617
 }
 ];
  multi = [
 {
   name: 'China',
   series: [
     {
       name: '2018',
       value: 2243772
     },
     {
       name: '2017',
       value: 1227770
     }
   ]
 },

 {
   name: 'USA',
   series: [
     {
       name: '2018',
       value: 1126000
     },
     {
       name: '2017',
       value: 764666
     }
   ]
 },

 {
   name: 'Norway',
   series: [
     {
       name: '2018',
       value: 296215
     },
     {
       name: '2017',
       value: 209122
     }
   ]
 },

 {
   name: 'Japan',
   series: [
     {
       name: '2018',
       value: 257363
     },
     {
       name: '2017',
       value: 205350
     }
   ]
 },

 {
   name: 'Germany',
   series: [
     {
       name: '2018',
       value: 196750
     },
     {
       name: '2017',
       value: 129246
     }
   ]
 },

 {
   name: 'France',
   series: [
     {
       name: '2018',
       value: 204617
     },
     {
       name: '2017',
       value: 149797
     }
   ]
 }
 ];
  myDataSets = [{
    name: 'likes',
    points: [
        {x: 10, y: 100},
        {x: 20, y: 500}
    ]
}];

  ngOnInit() {
  }

formXAxisValue(value: number) {
    return `Value ${value}`;
}
}
