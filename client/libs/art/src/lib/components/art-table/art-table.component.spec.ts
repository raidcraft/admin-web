import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTableComponent } from './art-table.component';

describe('ArtTableComponent', () => {
  let component: ArtTableComponent;
  let fixture: ComponentFixture<ArtTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
