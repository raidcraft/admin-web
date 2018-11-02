import { TestBed } from '@angular/core/testing';

import { DisguisesService } from './disguises.service';

describe('DisguisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisguisesService = TestBed.get(DisguisesService);
    expect(service).toBeTruthy();
  });
});
