import { TestBed, inject } from '@angular/core/testing';

import { ArtApiService } from './art-api.service';

describe('ArtApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtApiService]
    });
  });

  it('should be created', inject([ArtApiService], (service: ArtApiService) => {
    expect(service).toBeTruthy();
  }));
});
