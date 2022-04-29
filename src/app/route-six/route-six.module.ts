import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { RouteSixComponent } from './route-six.component';



const routes: Routes = [{ path: '', component:  RouteSixComponent}];

@NgModule({
  declarations: [RouteSixComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RouteSixModule { }
