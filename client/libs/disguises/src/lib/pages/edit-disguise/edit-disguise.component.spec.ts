import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDisguiseComponent } from './edit-disguise.component';

describe('EditDisguiseComponent', () => {
  let component: EditDisguiseComponent;
  let fixture: ComponentFixture<EditDisguiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDisguiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDisguiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
