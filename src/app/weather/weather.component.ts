import { Component, OnInit, AbstractType } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiuxService } from '../apiux.service';
import {SearchService} from '../search.service';
import { Chart} from 'node_modules/chart.js';
let startPos;


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

constructor( private formBuilder: FormBuilder,   private apiuxService: ApiuxService, private searchService: SearchService) {
}
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public search: any;
public hour = [];
  // tslint:disable-next-line: ban-types
  dataSource: Object;
  chart: any;

 public a = [];




  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    // tslint:disable-next-line: prefer-const

  }

sendToAPIUX(formValues) {
    this.apiuxService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      // tslint:disable-next-line: max-line-length
      this.a = [this.weatherData.forecast.forecastday[0].hour[0].temp_c, this.weatherData.forecast.forecastday[0].hour[1].temp_c, this.weatherData.forecast.forecastday[0].hour[2].temp_c, this.weatherData.forecast.forecastday[0].hour[3].temp_c, this.weatherData.forecast.forecastday[0].hour[4].temp_c];
      console.log(this.a[0]);
      const myChart = new Chart('mychart', {
        type: 'line',
        data: {
          labels: [this.a[0], this.a[1], this.a[2], this.a[3], this.a[4]],
       datasets: [

                {
                  data: [this.a[0], this.a[1], this.a[2], this.a[3], this.a[4]],
                  borderColor: '#3cba9f',
                  fill: true,
                  label: this.a[0]
                },


            ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: false
            }]
          }
        }

    });
    });



  }
sendtoSEARCH(formValues) {
    this.search.getsearch(formValues.location).subscribe(data => {
      this.search = data;
      console.log(this.search);
    });
  }
}

