import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWeaponPropertiesComponent } from './edit-weapon-properties.component';

describe('EditWeaponPropertiesComponent', () => {
  let component: EditWeaponPropertiesComponent;
  let fixture: ComponentFixture<EditWeaponPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWeaponPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWeaponPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
