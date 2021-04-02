import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceSportTypeComponent } from './pace-sport-type.component';

describe('PaceSportTypeComponent', () => {
  let component: PaceSportTypeComponent;
  let fixture: ComponentFixture<PaceSportTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaceSportTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaceSportTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
