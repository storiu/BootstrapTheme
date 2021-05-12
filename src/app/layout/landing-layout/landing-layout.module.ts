import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingLayoutComponent } from './landing-layout.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    LandingLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LandingLayoutModule { }
