import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class LandingLayoutModule { }
