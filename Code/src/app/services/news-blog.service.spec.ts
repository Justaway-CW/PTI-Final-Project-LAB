import { TestBed } from '@angular/core/testing';

import { NewsBlogService } from './news-blog.service';

describe('NewsBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsBlogService = TestBed.get(NewsBlogService);
    expect(service).toBeTruthy();
  });
});
