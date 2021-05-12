import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { WorkProgressComponent } from './work-progress.component';
import { WorkProgressTabComponent } from './work-progress-tab/work-progress-tab.component';

@NgModule({
  declarations: [
    WorkProgressComponent,
    WorkProgressTabComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,
    PipesModule,
    ScrollToModule,
    LazyLoadImageModule
  ],
  exports: [
    WorkProgressComponent,
  ]
})
export class WorkProgressModule { }
