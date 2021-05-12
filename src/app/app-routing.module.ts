import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingLayoutComponent } from "./layout/landing-layout/landing-layout.component";
import { HomeComponent } from "./landing/home/home.component";

const routes: Routes = [
  {
    path: '', component: LandingLayoutComponent,
    children: [{ path: '', component: HomeComponent}],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
