import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasbeehComponent } from './tasbeeh/tasbeeh.component';
import { TasbeehComp1Component } from './tasbeeh-comp1/tasbeeh-comp1.component';
import { TasbeehComp2Component } from './tasbeeh-comp2/tasbeeh-comp2.component';
import { CounterMainComponent } from './counter-main/counter-main.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterActionComponent } from './counter-action/counter-action.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { UiComponent } from './ui/ui.component';
import { MenuBarComponent } from './pages/menu-bar/menu-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './pages/comp1/comp1.component';
import { Comp2Component } from './pages/comp2/comp2.component';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    TasbeehComponent,
    TasbeehComp1Component,
    TasbeehComp2Component,
    CounterMainComponent,
    CounterDisplayComponent,
    CounterActionComponent,
    CoursesComponent,
    TitleCasePipe,
    UiComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModuleModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
