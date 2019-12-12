import { TestBed } from '@angular/core/testing';

import { RadarService } from './radar.service';

describe('RadarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadarService = TestBed.get(RadarService);
    expect(service).toBeTruthy();
  });
});
