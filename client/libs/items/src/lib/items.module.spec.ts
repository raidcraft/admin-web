import { async, TestBed } from '@angular/core/testing';
import { ItemsModule } from './items.module';

describe('ItemsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ItemsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ItemsModule).toBeDefined();
  });
});
