import { TestBed } from '@angular/core/testing';

import { MainorderService } from './mainorder.service';

describe('MainorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainorderService = TestBed.get(MainorderService);
    expect(service).toBeTruthy();
  });
});
