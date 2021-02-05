import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiuxService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get(
        ' http://api.weatherapi.com/v1/forecast.json?key=5da7e2e590d344919bb132212210402&q=' + location + '&days=7' );
}
}
