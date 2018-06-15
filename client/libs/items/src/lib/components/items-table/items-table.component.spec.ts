
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTableComponent } from './items-table.component';

describe('ItemsTableComponent', () => {
  let component: ItemsTableComponent;
  let fixture: ComponentFixture<ItemsTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
