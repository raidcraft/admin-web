import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDisguiseComponent } from './create-disguise.component';

describe('CreateDisguiseComponent', () => {
  let component: CreateDisguiseComponent;
  let fixture: ComponentFixture<CreateDisguiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDisguiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDisguiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
