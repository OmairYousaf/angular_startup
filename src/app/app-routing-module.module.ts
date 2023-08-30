import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/pages-module.module').then(
        (p) => p.PagesModuleModule
      ),
  },
  // {
  //   path: '**',
  //   redirectTo: 'portal/dashboard',
  // },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModuleModule { }
