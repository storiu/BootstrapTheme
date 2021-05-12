import { Component, OnInit } from '@angular/core';

import { helpPlanTab, reviewTab, tellUsTab } from './work-progress';

enum WorkProgress {
  TellUsProject = 'TELL_US_PROJECT',
  HelpPlanIt = 'HELP_PLAN_IT',
  RelaxAndReview = 'RELAX_AND_REVIEW',
}

@Component({
  selector: 'archincer-work-progress',
  templateUrl: './work-progress.component.html',
  styleUrls: ['./work-progress.component.scss']
})
export class WorkProgressComponent implements OnInit {

  WorkProgress = WorkProgress;
  tab: WorkProgress = WorkProgress.TellUsProject;
  tellUsTab = tellUsTab;
  helpPlanTab = helpPlanTab;
  reviewTab = reviewTab;

  constructor() { }

  ngOnInit(): void {
  }

}
