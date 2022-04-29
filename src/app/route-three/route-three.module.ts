import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTimerComponent } from './display-timer/display-timer.component'
import { ResetTimerComponent } from './reset-timer/reset-timer.component';
import { LogsTimerComponent } from './logs-timer/logs-timer.component';
import { TrackTimerComponent } from './track-timer/track-timer.component';
import { RouteThreeComponent } from './route-three.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', component:  RouteThreeComponent},
  { path: '', component:  DisplayTimerComponent},
  { path: '', component:  ResetTimerComponent},
  { path: '', component:  LogsTimerComponent},
  { path: '', component:  TrackTimerComponent},
];

@NgModule({
  declarations: [
    RouteThreeComponent,
    DisplayTimerComponent,
    ResetTimerComponent,
    LogsTimerComponent,
    TrackTimerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RouteThreeModule { }
