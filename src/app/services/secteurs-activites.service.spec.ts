import { TestBed } from '@angular/core/testing';

import { SecteursActivitesService } from './secteurs-activites.service';

describe('SecteursActivitesService', () => {
  let service: SecteursActivitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecteursActivitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
