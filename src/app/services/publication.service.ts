import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Publications } from '../models/Publications';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  publicationsUrl: string = 'https://newsapi.org/v2/sources?';
  apiKey: string = 'apiKey=9df8bb14cfe44cdcad36293aa49cd7f2';

  constructor(private http:HttpClient) { }

  getPublications():Observable<any> {
    return this.http.get<Publications>(`${this.publicationsUrl}${this.apiKey}`);
  }
}
