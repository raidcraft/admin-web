import { async, TestBed } from '@angular/core/testing';
import { ArtModule } from './art.module';

describe('ArtModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ArtModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ArtModule).toBeDefined();
  });
});
