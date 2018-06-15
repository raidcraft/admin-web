import { TestBed, inject } from '@angular/core/testing';

import { MinecraftDataService } from './minecraft-data.service';

describe('MinecraftDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinecraftDataService]
    });
  });

  it('should be created', inject([MinecraftDataService], (service: MinecraftDataService) => {
    expect(service).toBeTruthy();
  }));
});
