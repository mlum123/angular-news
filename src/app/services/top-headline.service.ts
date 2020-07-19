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

  constructor(private http:HttpClient) { }

  getTopHeadlines() {
    return [
      {
        status: "ok",
        totalResults: 38,
        articles: [
          {
            source: {
              id: "google-news",
              name: "Google News"
            },
            author: null,
            title: "Russians take to streets to demand release of local governor - BBC News - BBC News",
            description: null,
            url: "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dHM2OXgzTlo0YXPSAQA?oc=5",
            urlToImage: null,
            publishedAt: "2020-07-18T21:52:29Z",
            content: null
          },
          {
            source: {
              id: "cnn",
              name: "CNN"
            },
            author: "Amy Woodyatt, Rob Picheta and Max Foster, CNN",
            title: "Princess Beatrice, daughter of Prince Andrew, releases photos of her private wedding - CNN",
            description: "Buckingham Palace has released photographs from the private wedding of the UK's Princess Beatrice, who married real estate developer Edoardo Mapelli Mozzi on Friday in a ceremony at Windsor Castle attended by Queen Elizabeth II.",
            url: "https://www.cnn.com/2020/07/18/uk/princess-beatrice-wedding-photos-intl-scli-gbr/index.html",
            urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/200718160236-02-princess-beatrice-wedding-vertical-super-tease.jpg",
            publishedAt: "2020-07-18T21:39:00Z",
            content: null
          },
          {
            source: {
              id: "fox-news",
              name: "Fox News"
            },
            author: "Associated Press",
            title: "No Canada: Blue Jays barred from playing games in Toronto - Fox News",
            description: "The Blue Jays won't play their home games in Toronto this year because Canada's government doesn't think it's safe for players to travel back and forth from the United States.",
            url: "https://www.foxnews.com/sports/no-canada-blue-jays-barred-playing-games-toronto",
            urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2020/07/AP20200001630997.jpg",
            publishedAt: "2020-07-18T21:31:11Z",
            content: "TORONTO (AP) — The Blue Jays won't play their home games in Toronto this year because Canada's government doesn't think it's safe for players to travel back and forth from the United States, one of t… [+4416 chars]"
          }
        ]
      }
    ]
  }
}
