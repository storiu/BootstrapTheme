import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule as NgxSwiperModule } from 'ngx-swiper-wrapper';

import { ImageSwiperComponent } from './image-swiper/image-swiper.component';
import { TwoImageSwiperComponent } from './two-image-swiper/two-image-swiper.component';

@NgModule({
  declarations: [
    ImageSwiperComponent,
    TwoImageSwiperComponent
  ],
  imports: [
    CommonModule,
    NgxSwiperModule,
  ],
  exports: [
    ImageSwiperComponent,
    TwoImageSwiperComponent,
  ]
})
export class SwiperModule { }
