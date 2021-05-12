import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MarketingService } from '../../../core/services/marketing.service';
import { Idea } from '../../../core/models/idea-board';
import { ProjectAccessoryType } from '../../../core/models/project';
import { ideaBoardAltTemplate } from '../../../core/data/idea-board';
import { ScrollPosition } from '../../../core/data/scroll-pos';
import { archincerRoutes } from '../../../core/data/routes';

@Component({
  selector: 'archincer-home-page-idea-board',
  templateUrl: './home-page-idea-board.component.html',
  styleUrls: ['./home-page-idea-board.component.scss']
})
export class HomePageIdeaBoardComponent implements OnInit, OnDestroy {

  @Input() isLoading;
  @Input() ideas: Idea[] = [];
  @Input() col = 4;

  countyName = this.marketingService.countyName;
  altText: string[] = [];

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private marketingService: MarketingService,
    private router: Router,
    private scrollToService: ScrollToService
  ) {
  }

  ngOnInit(): void {
    this.marketingService.countyName$.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(countyName => this.countyName = countyName);
    this.setIdeaBoardAltTags(this.ideas[0]?.projectType, this.countyName);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  setIdeaBoardAltTags(type: ProjectAccessoryType, countyName: string): void {
    if (type) {
      this.ideas.forEach((idea, index) => {
        this.altText.push(ideaBoardAltTemplate[type][index].replace('[county]', countyName));
      });
    }
  }

  navigateToServicesPage(idea: Idea): void {
    const route = [archincerRoutes.landingPages.services.root];
    switch (idea.projectType) {
      case ProjectAccessoryType.Patio:
        route.push(archincerRoutes.landingPages.services.patios);
        break;
      case ProjectAccessoryType.Walkway:
        route.push(archincerRoutes.landingPages.services.walkways);
        break;
      case ProjectAccessoryType.RetainingWall:
        route.push(archincerRoutes.landingPages.services.walkways);
        break;
      case ProjectAccessoryType.DrivewayParking:
        route.push(archincerRoutes.landingPages.services.driveways);
        break;
      case ProjectAccessoryType.PoolPatio:
        route.push(archincerRoutes.landingPages.services.poolPatios);
        break;
      case ProjectAccessoryType.Steps:
        route.push(archincerRoutes.landingPages.services.stepsAndStaircases);
        break;
    }
    this.router.navigateByUrl('/' + route.join('/')).then(() => {
      this.scrollToService.scrollTo({ target: ScrollPosition.Root });
    });
  }

}
