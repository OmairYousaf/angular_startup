import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasbeehComponent } from './tasbeeh/tasbeeh.component';

@NgModule({
  declarations: [
    AppComponent,
    TasbeehComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
