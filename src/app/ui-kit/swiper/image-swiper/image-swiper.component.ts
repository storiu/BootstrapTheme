import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'archincer-image-swiper',
  templateUrl: './image-swiper.component.html',
  styleUrls: ['./image-swiper.component.scss']
})
export class ImageSwiperComponent implements OnInit {

  @Input() images: string[] = [];
  @Input() delay = 6000;

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: this.delay,
      disableOnInteraction: false
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
