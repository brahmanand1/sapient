import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTimerComponent } from './track-timer.component';

describe('TrackTimerComponent', () => {
  let component: TrackTimerComponent;
  let fixture: ComponentFixture<TrackTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
