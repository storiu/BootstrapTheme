import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../pipes/pipes.module';

import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    AccordionComponent
  ]
})
export class AccordionModule { }
