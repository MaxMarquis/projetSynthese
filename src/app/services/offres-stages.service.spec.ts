import { TestBed } from '@angular/core/testing';

import { OffresStagesService } from './offres-stages.service';

describe('OffresStagesService', () => {
  let service: OffresStagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffresStagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
