import { Component, OnInit } from '@angular/core';
import { TopHeadlines } from '../../models/TopHeadlines';
import { TopHeadlineService } from '../../services/top-headline.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {
  topHeadlines:TopHeadlines;

  constructor(private topHeadlineService: TopHeadlineService) { }

  ngOnInit(): void {
    this.topHeadlineService.getTopHeadlines().subscribe(topHeadlines => {
      this.topHeadlines = topHeadlines;
    });
  }

}
