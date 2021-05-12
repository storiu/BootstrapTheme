import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'archincer-work-progress-tab',
  templateUrl: './work-progress-tab.component.html',
  styleUrls: ['./work-progress-tab.component.scss']
})
export class WorkProgressTabComponent implements OnInit {

  @Input() data: { header: any, content: any, hint?: any, images: { src: string, alt: string }[] };

  config: SwiperConfigInterface = {
    direction: 'horizontal',
    effect: 'fade',
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
      stopOnLastSlide: false,
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
