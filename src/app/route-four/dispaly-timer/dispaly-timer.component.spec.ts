import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyTimerComponent } from './dispaly-timer.component';

describe('DispalyTimerComponent', () => {
  let component: DispalyTimerComponent;
  let fixture: ComponentFixture<DispalyTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispalyTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispalyTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
