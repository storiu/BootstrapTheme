import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { archincerRoutes, toAbsolutePath } from '../../../core/data/routes';
import { ScrollPosition } from '../../../core/data/scroll-pos';

@Component({
  selector: 'archincer-request-estimate-button',
  templateUrl: './request-estimate-button.component.html',
  styleUrls: ['./request-estimate-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequestEstimateButtonComponent implements OnInit {

  @Input() center = false;
  @Input() label = 'Request Estimate';

  path = toAbsolutePath(archincerRoutes.landingPages.requestEstimate.root);

  constructor(
    private router: Router,
    private scrollToService: ScrollToService
  ) { }

  ngOnInit(): void {
  }

  navigate(): void {
    this.router.navigateByUrl(this.path).then(() => {
      this.scrollToService.scrollTo({ target: ScrollPosition.Root });
    });
  }

}
