import { Component, OnInit, Input, ElementRef, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { AccordionStatus } from '../../core/models/accordion';
import { toAbsolutePath } from '../../core/data/routes';
import { ScrollPosition } from '../../core/data/scroll-pos';

@Component({
  selector: 'archincer-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, AfterViewChecked {

  @Input() name: string;
  @Input() content: string;

  AccordionStatus = AccordionStatus;
  status = AccordionStatus.Open;
  isNavigated = false;
  navigatePath = null;

  constructor(
    private router: Router,
    private scrollToService: ScrollToService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  closeTab(): void {
    this.status = (this.status === AccordionStatus.Close) ?  AccordionStatus.Open : AccordionStatus.Close;
  }

  navigate(): void {
    if (!this.isNavigated && this.navigatePath) {
      this.isNavigated = true;
      this.router.navigateByUrl(toAbsolutePath(this.navigatePath)).then(() => {
        this.scrollToService.scrollTo({target: ScrollPosition.Root});
      });
    }
  }

  goTestimonial(): void {
    this.router.navigateByUrl('/').then(() => {
      setTimeout(() => {
        this.scrollToService.scrollTo({target: ScrollPosition.Testimonial});
      }, 200);
    });
  }

  ngAfterViewChecked(): void {
    if (this.elementRef.nativeElement.querySelector('#navigate')) {
      const classList = this.elementRef.nativeElement.querySelector('#navigate').classList;
      this.navigatePath = classList[classList.length - 1];
      this.elementRef.nativeElement.querySelector('#navigate').addEventListener('click', this.navigate.bind(this));
    } else if (this.elementRef.nativeElement.querySelector('#testimonial')) {
      this.elementRef.nativeElement.querySelector('#testimonial').addEventListener('click', this.goTestimonial.bind(this));
    }
  }

}
