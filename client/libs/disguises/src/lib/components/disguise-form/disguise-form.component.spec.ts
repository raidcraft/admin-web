import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisguiseFormComponent } from './disguise-form.component';

describe('DisguiseFormComponent', () => {
  let component: DisguiseFormComponent;
  let fixture: ComponentFixture<DisguiseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisguiseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisguiseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
