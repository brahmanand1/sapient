import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteFourComponent } from './route-four/route-four.component';
// import { RouteFiveComponent } from './route-five/route-five.component';
// import { RouteSixComponent } from './route-six/route-six.component';


// import { SortingDirective } from './route-five/sorting.directive';
import { HttpClientModule } from '@angular/common/http';
import { RouteOneModule } from './route-one/route-one.module';
import { RouteSecondModule } from './route-two/route-second.module';
import { RouteThreeModule } from './route-three/route-three.module';
import { RouteFiveModule } from './route-five/route-five.module';
import { RouteSixModule } from './route-six/route-six.module';

@NgModule({
  declarations: [
    AppComponent,
    RouteFourComponent,
    // RouteFiveComponent,
    // RouteSixComponent,
    // SortingDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    HttpClientModule,
    RouteOneModule,
    RouteSecondModule,
    RouteThreeModule,
    RouteFiveModule,
    RouteSixModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
