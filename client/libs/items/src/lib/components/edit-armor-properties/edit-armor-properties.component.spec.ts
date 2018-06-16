import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArmorPropertiesComponent } from './edit-armor-properties.component';

describe('EditArmorPropertiesComponent', () => {
  let component: EditArmorPropertiesComponent;
  let fixture: ComponentFixture<EditArmorPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArmorPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArmorPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
