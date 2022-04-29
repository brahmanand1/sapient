import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteFourComponent } from './route-four/route-four.component';

  const routes: Routes = [
    { path : '' , loadChildren : ()=> import('./route-one/route-one.module').then(m=>m.RouteOneModule)},
    { path : 'route-one' , loadChildren : ()=> import('./route-one/route-one.module').then(m=>m.RouteOneModule)},
    { path : 'route-two' , loadChildren : ()=> import('./route-two/route-second.module').then(m=>m.RouteSecondModule)},
    { path : 'route-three' , loadChildren : ()=> import('./route-three/route-three.module').then(m=>m.RouteThreeModule)},
    { path : 'route-four' , component : RouteFourComponent},
    { path : 'route-five' , loadChildren : ()=>import('./route-five/route-five.module').then(m=>m.RouteFiveModule)},
    { path : 'route-six' , loadChildren : ()=> import('./route-six/route-six.module').then(m=>m.RouteSixModule)}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
