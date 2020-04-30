import { TestBed } from '@angular/core/testing';

import { CoronaStatsService } from './corona-stats.service';

describe('CoronaStatsService', () => {
  let service: CoronaStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoronaStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
