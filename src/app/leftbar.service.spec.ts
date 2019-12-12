import { TestBed } from '@angular/core/testing';

import { LeftbarService } from './leftbar.service';

describe('LeftbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeftbarService = TestBed.get(LeftbarService);
    expect(service).toBeTruthy();
  });
});
