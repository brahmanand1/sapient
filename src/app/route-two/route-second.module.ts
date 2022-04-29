import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { RouteTwoComponent } from './route-two.component';


const routes : Routes = [
  {path : '' , component : RouteTwoComponent}
]



@NgModule({
  declarations: [RouteTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RouteSecondModule { }
