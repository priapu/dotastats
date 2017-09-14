import { TestBed, inject } from '@angular/core/testing';

import { OpendotaService } from './opendota.service';

describe('OpendotaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpendotaService]
    });
  });

  it('should be created', inject([OpendotaService], (service: OpendotaService) => {
    expect(service).toBeTruthy();
  }));
});
