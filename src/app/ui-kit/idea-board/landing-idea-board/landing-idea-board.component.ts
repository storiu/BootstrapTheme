import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Idea } from '../../../core/models/idea-board';
import { PageName } from '../../../core/models/page-name';
import { Option } from '../../../core/models/option';
import { AvailableProjectAccessoryType, ProjectAccessoryType } from '../../../core/models/project';
import { IdeaBoardService } from '../../../core/services/idea-board.service';
import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { MarketingService } from '../../../core/services/marketing.service';
import { enumToOptions } from '../../../core/utils/enum.util';
import { ScrollPosition } from '../../../core/data/scroll-pos';
import { archincerRoutes } from '../../../core/data/routes';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'archincer-landing-idea-board',
  templateUrl: './landing-idea-board.component.html',
  styleUrls: ['./landing-idea-board.component.scss']
})
export class LandingIdeaBoardComponent implements OnInit, OnDestroy {

  @Input() title: string;
  @Input() estimateLabel: string;
  @Input() headerText: string;
  @Input() ideaBoardCategories: Array<Option<ProjectAccessoryType>>;
  @Input() category: ProjectAccessoryType;

  ScrollPosition = ScrollPosition;
  MaxIdeaCount = 18;
  uhLandingRoutes = archincerRoutes;
  environment = environment;

  isLoading = false;
  availableProjectAccessoryTypes = [{ label: 'All', value: null }, ...enumToOptions<ProjectAccessoryType>(AvailableProjectAccessoryType)];
  form: FormGroup;
  ideas: Idea[] = [];

  private sessionId: string;
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private ideaBoardService: IdeaBoardService,
    private customerSignupWizardService: CustomerSignupWizardService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private marketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      projectType: this.category
    });
    if (!this.ideaBoardCategories) {
      this.form.get('projectType').valueChanges.pipe(takeUntil(this.unsubscribeAll)).subscribe(value => {
        this.category = value;
        this.ideas = [];
        setTimeout(() => {
          this.loadIdeas();
        }, 100);
      });
      const queryParams = this.route.snapshot.queryParams;
      if (queryParams && queryParams.projectType) {
        this.category = queryParams.projectType;
      }
    }
    this.loadIdeas();
    this.marketingService.pageVisit(PageName.IdeaBoardPage).then(id => this.sessionId = id);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
    this.marketingService.pageVisit(PageName.IdeaBoardPage, this.sessionId);
  }

  loadMore(): void {
    this.loadIdeas(true);
  }

  categoryChanged(category: Option<any>): void {
    this.category = category.value;
    this.loadIdeas();
  }

  private async loadIdeas(loadMore = false): Promise<void> {
    try {
      this.isLoading = true;
      const ideas = await this.ideaBoardService.getIdeas(loadMore ? this.ideas.length : 0, 9, this.category).toPromise();
      if (loadMore) {
        this.ideas = [...this.ideas, ...ideas];
      } else {
        this.ideas = ideas;
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
