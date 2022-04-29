import { Component, OnInit ,Input,ViewChild} from '@angular/core';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { LogsTimerComponent } from './logs-timer/logs-timer.component';
import { TrackTimerComponent } from './track-timer/track-timer.component';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.scss']
})
export class RouteThreeComponent implements OnInit {

  time : string ="";
  @ViewChild("displayChild") displayChild! : DisplayTimerComponent;
  @ViewChild("logChild") logChild! : LogsTimerComponent;
  @ViewChild("trackChild") trackChild! : TrackTimerComponent;


  constructor() { }

  ngOnInit(): void {
    // this.display.counterStart();
  }

  getTime(e : any){
    this.displayChild.pause();
    this.displayChild.reset();
    this.logChild.reset();
    this.trackChild.reset();
    this.time = e;
   
   

  }

  startTimer(){
    // this.display.counterStart();
  }
  initiateTimer(action:string){
    console.log(action);
    if(action == 'RESTART'){
      this.displayChild.restart();
      this.trackChild.startIncr();

    }else if(action == 'PAUSE'){
      this.displayChild.pause();
      this.trackChild.pauseIncr();
    }else{
     this.displayChild.counterStart();
     this.trackChild.startIncr();
    }
    this.logChild.addLogs(action + "ED: at " + new Date());
    
    
  }

  resetAll(){
    this.displayChild.reset();
    this.logChild.reset();
    this.trackChild.reset();

  }

}
