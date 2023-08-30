import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'form',
        component: Comp1Component,
      },
      {
        path: 'list',
        component: Comp2Component,
      },


    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PageRoutingModule { }
