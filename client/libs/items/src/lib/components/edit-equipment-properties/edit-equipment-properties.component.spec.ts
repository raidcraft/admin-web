import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentPropertiesComponent } from './edit-equipment-properties.component';

describe('EditEquipmentPropertiesComponent', () => {
  let component: EditEquipmentPropertiesComponent;
  let fixture: ComponentFixture<EditEquipmentPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEquipmentPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
