import { TestBed } from '@angular/core/testing';

import { RequetesStagesService } from './requetes-stages.service';

describe('RequetesStagesService', () => {
  let service: RequetesStagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequetesStagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
