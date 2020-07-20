import { Component, OnInit } from '@angular/core';
import { TopHeadlines } from '../../models/TopHeadlines';
import { TopHeadlineService } from '../../services/top-headline.service';
import { ExternalLinkService } from '../../services/external-link.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {
  topHeadlines:TopHeadlines;

  constructor(private topHeadlineService: TopHeadlineService, private externalLinkService: ExternalLinkService) { }

  ngOnInit(): void {
    this.topHeadlineService.getTopHeadlines().subscribe(topHeadlines => {
      this.topHeadlines = topHeadlines;
    });
  }

  onClick(topHeadline) {
    this.externalLinkService.visitExternalLink(topHeadline);
  }

}
