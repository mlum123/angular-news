import { Component, OnInit } from '@angular/core';
import { TopHeadlines } from '../../models/TopHeadlines';
import { SearchTopicService } from '../../services/search-topic.service';

@Component({
  selector: 'app-search-topic',
  templateUrl: './search-topic.component.html',
  styleUrls: ['./search-topic.component.css']
})
export class SearchTopicComponent implements OnInit {
  keyword: string;
  keywordArticles:TopHeadlines;

  constructor(private searchTopicService: SearchTopicService) { }

  ngOnInit(): void {
  }

  onSubmit(keyword) {
    this.searchTopicService.getKeywordArticles(keyword).subscribe(keywordArticles => {
      this.keywordArticles = keywordArticles;
    });
  }

}
