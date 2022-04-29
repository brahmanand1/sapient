import { Directive, Input,HostListener,Output,EventEmitter,OnInit } from '@angular/core';
import { DataService } from '../app/sevices/data.service';


@Directive({
  selector: '[appSorting]'
})
export class SortingDirective implements OnInit {

  @Input() column = "";
  @Input() students : any ;
  @Output() sortedStudent = new EventEmitter<any>();
  

  numberOfClicked : number = 0;
  DefaultData : any;
  columns : any ;


  constructor( private _dataService : DataService) { }

  ngOnInit(): void {
  this._dataService.getStudentDetails().subscribe((data :any)=>{
    this.DefaultData = data;
    this.columns = Object.keys(data[0]);
  })
    
  }


  @HostListener('click') sort(){
    
    if(this.numberOfClicked == 3) this.numberOfClicked = 1;
    else this.numberOfClicked++;
    

      if(this.numberOfClicked ==1){
  
        this.students.sort((a:any,b:any)=>{
          if(this.column === 'Name' || this.column === 'Class' || this.column === 'Section'){

            if ( a[this.column]  < b[this.column]  ){
              return -1;
            }
            if ( a[this.column]  > b[this.column]  ){
              return 1;
            }
            return 0;
          }else{
            return a[this.column]  - b[this.column]
          }
        });
      }else if(this.numberOfClicked ==2){
        this.students.sort((a:any,b:any)=>{
          if(this.column === 'Name' || this.column === 'Class' || this.column === 'Section'){
          if ( b[this.column]  < a[this.column]  ){
            return -1;
          }
          if ( b[this.column]  > a[this.column]  ){
            return 1;
          }
          return 0;
        }else{
          return b[this.column]  - a[this.column]
        }
        });
      }else{
        
          this.students = this.DefaultData;
      }
     
      

  this.sortedStudent.emit(this.students);
    
  }
  

}
