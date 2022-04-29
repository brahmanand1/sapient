import { Component, OnInit,Input,ViewChild,ElementRef } from '@angular/core';
import { interval } from 'rxjs';
import { RouteThreeComponent } from '../route-three.component';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.scss']
})
export class DisplayTimerComponent implements OnInit {

  constructor( private _parent : RouteThreeComponent) { }
  @Input() time : string = "";
  intervalID : any ;
  generater2 : any;
 

  ngOnInit(): void {
    // this.counterStart();
    // alert(this._parent.checking);
    // this.generater2 = this.generater
  }

  counterStart(){
    this.intervalID = setInterval(()=>{
      this.time =  (parseInt(this.time) -1).toString();
      if(parseInt(this.time) < 0){
        this.time = "0"
      }
    },1000);
    
    



  }
  pause(){
    // this.intervalID = setInterval(()=>{
    //   // this.generater2.next().value;
    //   this.generater(false);
    // },1000);
    clearInterval(this.intervalID)

  }
  restart(){

    // this.intervalID = setInterval(()=>{
    //   // this.generater2.next().value;
    //   this.generater(true).next().value;
    // },1000);
    this.intervalID = setInterval(()=>{
      this.time =  (parseInt(this.time) -1).toString();
      if(parseInt(this.time) <= 0){
        this.time = ""
      }
    },1000);

  }
  // *generater (ter : boolean){
  //   {
  //     while(ter){

  //       this.time =  (parseInt(this.time) -1).toString();
  //       yield this.time;
  //       if(parseInt(this.time) < 0){
  //         this.time = "0"
  //         return;
  //       }
  //     }
  //   }
  // }

  reset(){
    clearInterval(this.intervalID);
    this.time="";
  }
   
   

}
