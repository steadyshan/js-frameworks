import { TestBed } from '@angular/core/testing';

import { ListFunnelService } from './list-funnel.service';

describe('ListFunnelService', () => {
  let service: ListFunnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFunnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
