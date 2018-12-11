import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDisguiseComponent } from './view-disguise.component';

describe('ViewDisguiseComponent', () => {
  let component: ViewDisguiseComponent;
  let fixture: ComponentFixture<ViewDisguiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDisguiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDisguiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
