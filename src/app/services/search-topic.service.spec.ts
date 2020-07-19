import { TestBed } from '@angular/core/testing';

import { SearchTopicService } from './search-topic.service';

describe('SearchTopicService', () => {
  let service: SearchTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
