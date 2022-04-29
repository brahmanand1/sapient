import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { RouteFiveComponent } from './route-five.component';
import { SortingDirective } from './sorting.directive'



const routes: Routes = [{ path: '', component:  RouteFiveComponent}];

@NgModule({
  declarations: [
    RouteFiveComponent,
    SortingDirective
],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RouteFiveModule { }
