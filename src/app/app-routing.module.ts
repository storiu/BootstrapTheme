import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingLayoutComponent } from "./layout/landing-layout/landing-layout.component";

const routes: Routes = [
  {
    path: '', component: LandingLayoutComponent,
  },
  { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
