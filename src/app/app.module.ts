import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasbeehComponent } from './tasbeeh/tasbeeh.component';
import { TasbeehComp1Component } from './tasbeeh-comp1/tasbeeh-comp1.component';
import { TasbeehComp2Component } from './tasbeeh-comp2/tasbeeh-comp2.component';
import { CounterMainComponent } from './counter-main/counter-main.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterActionComponent } from './counter-action/counter-action.component';

@NgModule({
  declarations: [
    AppComponent,
    TasbeehComponent,
    TasbeehComp1Component,
    TasbeehComp2Component,
    CounterMainComponent,
    CounterDisplayComponent,
    CounterActionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
