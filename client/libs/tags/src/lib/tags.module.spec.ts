import { async, TestBed } from '@angular/core/testing';
import { TagsModule } from './tags.module';

describe('TagsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TagsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TagsModule).toBeDefined();
  });
});
