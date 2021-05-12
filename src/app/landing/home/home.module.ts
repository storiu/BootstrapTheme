import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeJumbotronSectionComponent } from './home-jumbotron-section/home-jumbotron-section.component';
import { HowDoesItWorkComponent } from './how-does-it-work/how-does-it-work.component';
import { WorkDoneSoFarComponent } from './work-done-so-far/work-done-so-far.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    HomeJumbotronSectionComponent,
    HowDoesItWorkComponent,
    WorkDoneSoFarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
