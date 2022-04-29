import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs-timer',
  templateUrl: './logs-timer.component.html',
  styleUrls: ['./logs-timer.component.scss']
})
export class LogsTimerComponent implements OnInit {

  logList : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }

  addLogs(log : any){
    this.logList.push(log);
  }

  reset(){
    this.logList = [];
  }

}
