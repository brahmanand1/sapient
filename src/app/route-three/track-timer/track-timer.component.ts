import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-timer',
  templateUrl: './track-timer.component.html',
  styleUrls: ['./track-timer.component.scss']
})
export class TrackTimerComponent implements OnInit {

  constructor() { }
  pauseCounter : number = 0;
  startCounter : number = 0;

  ngOnInit(): void {
  }

  pauseIncr(){
    this.pauseCounter++;

  }

  startIncr(){
     this.startCounter++;
  }

  reset(){
    this.startCounter = 0;
    this.pauseCounter = 0;
  }
}
