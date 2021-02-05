import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  getsearch(location) {
    return this.http.get(
      'https://cdn.jsdelivr.net/npm/places.js@1.18.1?appid=plETOJ3O9B2A&appKey=9f9cdf2818c1be54fd1ccc93262349da'     );
}
}
