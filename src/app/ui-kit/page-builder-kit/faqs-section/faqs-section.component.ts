import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { faqToOptions } from '../../../core/utils/faq.util';
import { enumToLabel } from '../../../core/utils/enum.util';

@Component({
  selector: 'archincer-faqs-section',
  templateUrl: './faqs-section.component.html',
  styleUrls: ['./faqs-section.component.scss']
})
export class FaqsSectionComponent implements OnInit {

  @Input() faqs;
  @Input() title;

  selectedCategoryId = '';
  faqOptions = null;

  constructor(
    private router: Router,
    private scrollToService: ScrollToService,
  ) { }

  ngOnInit(): void {
    this.selectedCategoryId = this.faqs[0].id;
    this.faqOptions = faqToOptions(this.faqs);
  }

  scrollTo(id: string, isSearch = false): void {
    if (!isSearch) {
      this.selectedCategoryId = id;
      this.scrollToService.scrollTo({ target: id, duration: 300, offset: -100 });
      return;
    }
    const firstMatch = this.faqs.find(item => enumToLabel(item.id).toLowerCase().indexOf(id.toLowerCase()) >= 0);
    if (firstMatch) {
      this.selectedCategoryId = firstMatch.id;
      this.scrollToService.scrollTo({ target: firstMatch.id, duration: 300, offset: -100 });
    }
  }

}
