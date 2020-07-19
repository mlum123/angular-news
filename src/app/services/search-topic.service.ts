import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TopHeadlines } from '../models/TopHeadlines';

@Injectable({
  providedIn: 'root'
})
export class SearchTopicService {
  keywordUrl: string = 'https://newsapi.org/v2/everything?q=';
  apiKey: string = '&apiKey=9df8bb14cfe44cdcad36293aa49cd7f2';
  headlinesLimit: string = '&pageSize=10'; // limit to 10 articles about the topic

  constructor(private http:HttpClient) { }

  getKeywordArticles(keyword):Observable<TopHeadlines> {
    return this.http.get<TopHeadlines>(`${this.keywordUrl}${keyword}${this.apiKey}${this.headlinesLimit}`);
  }
}
