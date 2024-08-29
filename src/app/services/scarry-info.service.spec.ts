import { TestBed } from '@angular/core/testing';

import { ScarryInfoService } from './scarry-info.service';

describe('ScarryInfoService', () => {
  let service: ScarryInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScarryInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
