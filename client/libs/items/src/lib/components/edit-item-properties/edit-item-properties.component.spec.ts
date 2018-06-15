import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemPropertiesComponent } from './edit-item-properties.component';

describe('EditItemAttributesComponent', () => {
  let component: EditItemPropertiesComponent;
  let fixture: ComponentFixture<EditItemPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
