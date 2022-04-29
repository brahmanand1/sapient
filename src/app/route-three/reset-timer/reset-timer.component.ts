import { Component, OnInit ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset-timer',
  templateUrl: './reset-timer.component.html',
  styleUrls: ['./reset-timer.component.scss']
})
export class ResetTimerComponent implements OnInit {


  @Output() sendTime = new EventEmitter<any>();
  @Output() startTimer = new EventEmitter<any>();
  @Output() resetAll = new EventEmitter();
  time : string = "";
  preAction : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  timeChange() : void{
   
    this.sendTime.emit(this.time);
    this.preAction = "";
      // this.startTimer.emit(this.preAction);

  }
  initiateTimer() : void{
   
    if(this.preAction == 'START' || this.preAction == "RESTART"){
      this.preAction = 'PAUSE';
      this.startTimer.emit(this.preAction);
    }else if(this.preAction == 'PAUSE'){
      this.preAction = "RESTART";
      this.startTimer.emit(this.preAction);
    }else{
      this.preAction = "START";
      this.startTimer.emit(this.preAction);
    }

  }

  resetCounter() : void{
   this.resetAll.emit();

  }

  onlyNumber(event : any){
    debugger;
    var charCode = event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  

}
