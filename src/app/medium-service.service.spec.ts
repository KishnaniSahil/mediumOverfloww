import { TestBed } from '@angular/core/testing';

import { MediumServiceService } from './medium-service.service';

describe('MediumServiceService', () => {
  let service: MediumServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediumServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
