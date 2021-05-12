import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { BeforeAfterImage } from '../../../core/data/marketing/ct/spring-savings';

@Component({
  selector: 'archincer-two-image-swiper',
  templateUrl: './two-image-swiper.component.html',
  styleUrls: ['./two-image-swiper.component.scss']
})
export class TwoImageSwiperComponent implements OnInit {

  @Input() images: BeforeAfterImage[] = [];
  @Input() delay = 6000;

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: this.delay,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      hideOnClick: false,
    },
    threshold: 50,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
