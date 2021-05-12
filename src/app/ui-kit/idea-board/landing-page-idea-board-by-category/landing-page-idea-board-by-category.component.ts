import { Component, OnInit, ViewChild } from '@angular/core';

import { IdeaBoardComponent } from '../idea-board/idea-board.component';

import { Idea } from '../../../core/models/idea-board';
import { Option } from '../../../core/models/option';
import { IdeaBoardService } from '../../../core/services/idea-board.service';
import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { ideaBoardCategories } from '../../../core/data/idea-board';

@Component({
  selector: 'archincer-landing-page-idea-board-by-category',
  templateUrl: './landing-page-idea-board-by-category.component.html',
  styleUrls: ['./landing-page-idea-board-by-category.component.scss']
})
export class LandingPageIdeaBoardByCategoryComponent implements OnInit {

  @ViewChild(IdeaBoardComponent) ideaBoard: IdeaBoardComponent;

  ideaBoardCategories = ideaBoardCategories;
  ideas: Idea[] = [];
  isLoading = false;

  constructor(
    private ideaBoardService: IdeaBoardService,
    private customerSignupWizardService: CustomerSignupWizardService
  ) {
  }

  ngOnInit(): void {
    this.categoryChanged(this.ideaBoardCategories[0]);
  }

  async categoryChanged(category: Option<any>): Promise<void> {
    try {
      this.isLoading = true;
      if (this.ideaBoard) {
        this.ideaBoard.loaded = 0;
      }
      this.ideas = await this.ideaBoardService.getIdeas(0, 12, category.value).toPromise();
      this.customerSignupWizardService.markSelectedIdeas(this.ideas);
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }

}
