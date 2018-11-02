import { async, TestBed } from '@angular/core/testing';
import { DisguisesModule } from './disguises.module';

describe('DisguisesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DisguisesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DisguisesModule).toBeDefined();
  });
});
