import { TestBed } from '@angular/core/testing';

import { ApiuxService } from './apiux.service';

describe('ApiuxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiuxService = TestBed.get(ApiuxService);
    expect(service).toBeTruthy();
  });
});
