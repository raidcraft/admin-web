import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisguiseViewComponent } from './disguise-view.component';

describe('DisguiseViewComponent', () => {
  let component: DisguiseViewComponent;
  let fixture: ComponentFixture<DisguiseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisguiseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisguiseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
