import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/sevices/data.service';

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.scss']
})
export class RouteFiveComponent implements OnInit {


  public name : string = "Name";
  public class : string = "Class";
  public section : string = "Section";
  public sub1 : string = "Sub1";
  public sub2 : string = "Sub2";
  public sub3 : string = "Sub3";
  public students : any;
  columns : any;
  constructor(private _dataService : DataService ) { }

  ngOnInit(): void {
 debugger;
    this.students = this._dataService.getStudentDetails().subscribe((data:any)=>{
      this.students = data;
      this.columns =Object.keys(data[0])
    })
  }

  getSortedData(e:any){
  this.students= e;
  }

}
