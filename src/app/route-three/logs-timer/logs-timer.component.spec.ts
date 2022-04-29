import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsTimerComponent } from './logs-timer.component';

describe('LogsTimerComponent', () => {
  let component: LogsTimerComponent;
  let fixture: ComponentFixture<LogsTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
