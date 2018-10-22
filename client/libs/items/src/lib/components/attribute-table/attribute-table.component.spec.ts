
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeTableComponent } from './attribute-table.component';

describe('AttributeTableComponent', () => {
  let component: AttributeTableComponent;
  let fixture: ComponentFixture<AttributeTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
