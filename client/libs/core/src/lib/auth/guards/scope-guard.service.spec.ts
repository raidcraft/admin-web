import { TestBed, inject } from '@angular/core/testing';

import { ScopeGuard } from './scope-guard.service';

describe('ScopeGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScopeGuard]
    });
  });

  it('should be created', inject([ScopeGuard], (service: ScopeGuard) => {
    expect(service).toBeTruthy();
  }));
});
