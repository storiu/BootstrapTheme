import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { AccordionModule } from '../../ui-kit/accordion/accordion.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { SectionBuilderComponent } from './section-builder/section-builder.component';
import { JumbotronSectionComponent } from './jumbotron-section/jumbotron-section.component';
import { DiagonalSectionComponent } from './diagonal-section/diagonal-section.component';
import { FaqsSectionComponent } from './faqs-section/faqs-section.component';

@NgModule({
  declarations: [
    SectionBuilderComponent,
    JumbotronSectionComponent,
    DiagonalSectionComponent,
    FaqsSectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    AccordionModule,
    InputModule,
    PipesModule
  ],
  exports: [
    SectionBuilderComponent,
    JumbotronSectionComponent,
    DiagonalSectionComponent,
    FaqsSectionComponent
  ]
})
export class PageBuilderKitModule { }
