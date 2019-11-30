import { TestBed } from '@angular/core/testing';

import { McservsService } from './mcservs.service';

describe('McservsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: McservsService = TestBed.get(McservsService);
    expect(service).toBeTruthy();
  });
});
