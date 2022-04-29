import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/sevices/data.service';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent implements OnInit {

  products: any ;
  
public isGrid : boolean = false;

  constructor(private _dataService : DataService) { }

  ngOnInit(): void {
    this._dataService.getProductDetails().subscribe((data : any)=>{
      this.products = data.sort((a: any, b: any) => a.pPrice - b.pPrice);
    })
    // this.products.sort((a: any, b: any) => a.pPrice - b.pPrice);
  }


  filterDetacted(value:any){
    this.products.sort((a: any, b: any) => {
      if(value == 'asc')
          return a.pPrice - b.pPrice;
        else
        return b.pPrice - a.pPrice;
    });
    

  }

}
