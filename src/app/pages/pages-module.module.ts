import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageRoutingModule } from './page-routing.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    Comp1Component,
    Comp2Component,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    PageRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModuleModule { }
