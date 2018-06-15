import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemGeneralComponent } from './edit-item-general.component';

describe('EditItemGeneralComponent', () => {
  let component: EditItemGeneralComponent;
  let fixture: ComponentFixture<EditItemGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
