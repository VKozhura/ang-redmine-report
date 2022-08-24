import { TestBed } from '@angular/core/testing';

import { RedmineService } from './services/redmine.service';

describe('RedmineService', () => {
  let service: RedmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
