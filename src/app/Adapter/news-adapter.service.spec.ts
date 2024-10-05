import { TestBed } from '@angular/core/testing';

import { NewsAdapterService } from '../news-adapter.service';

describe('NewsAdapterService', () => {
  let service: NewsAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
