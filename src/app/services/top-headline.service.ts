import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TopHeadlines } from '../models/TopHeadlines';

@Injectable({
  providedIn: 'root'
})
export class TopHeadlineService {
  topHeadlinesUrl: string = 'http://newsapi.org/v2/top-headlines?country=';
  country: string = 'us';
  apiKey: string = '&apiKey=9df8bb14cfe44cdcad36293aa49cd7f2';
  headlinesLimit: string = '&pageSize=10'; // limit to top 10 headlines

  constructor(private http:HttpClient) { }

  getTopHeadlines():Observable<TopHeadlines> {
    return this.http.get<TopHeadlines>(`${this.topHeadlinesUrl}${this.country}${this.apiKey}${this.headlinesLimit}`)
  }
}
