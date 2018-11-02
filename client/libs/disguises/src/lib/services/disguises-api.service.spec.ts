import { TestBed } from '@angular/core/testing';

import { DisguisesApiService } from './disguises-api.service';

describe('DisguisesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisguisesApiService = TestBed.get(DisguisesApiService);
    expect(service).toBeTruthy();
  });
});
