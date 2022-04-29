import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { RouteOneComponent } from './route-one.component';



const routes: Routes = [{ path: '', component:  RouteOneComponent}];

@NgModule({
  declarations: [RouteOneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RouteOneModule { }
