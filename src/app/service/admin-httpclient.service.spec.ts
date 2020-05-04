import { TestBed } from '@angular/core/testing';

import { AdminHttpclientService } from './admin-httpclient.service';

describe('AdminHttpclientService', () => {
  let service: AdminHttpclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminHttpclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
