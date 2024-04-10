import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:MainComponent
  },
  // {
  //   path: 
  // }
];

export const AppRoutingModule = RouterModule.forRoot(routes); // this is it and under is same(ednakwI)

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
