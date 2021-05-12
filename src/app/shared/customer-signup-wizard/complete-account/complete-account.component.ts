import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { LegalNoticeDialogComponent } from '../../../landing/legal-notice/legal-notice-dialog/legal-notice-dialog.component';
import { PrivacyDialogComponent } from '../../../landing/privacy-policy/privacy-dialog/privacy-dialog.component';

import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { confirmPasswordValidator } from '../../../core/utils/validators.util';
import { enumToOptions } from '../../../core/utils/enum.util';
import { SourceFoundUs } from '../../../core/models/base';
import { archincerRoutes } from '../../../core/data/routes';
import { personalDetailForm } from '../../../core/data/form-labels';

@Component({
  selector: 'archincer-complete-account',
  templateUrl: './complete-account.component.html',
  styleUrls: ['./complete-account.component.scss']
})
export class CompleteAccountComponent implements OnInit {

  prefix = personalDetailForm.prefix;
  uhLandingRoutes = archincerRoutes;
  sourceFoundUsOptions = enumToOptions<SourceFoundUs>(SourceFoundUs);
  user = this.customerSignupWizardService.getFromStorage('user') || {};

  form: FormGroup = this.fb.group({
    user: this.fb.group({
      firstName: [this.user.firstName || '', Validators.required],
      lastName: [this.user.lastName || '', Validators.required],
      email: [this.user.email || '', [Validators.required, Validators.email]],
      phone: [this.user.phone || '', Validators.required],
      password: [this.user.password || '', Validators.required],
      confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
    }),
    sourceFoundUs: [this.customerSignupWizardService.getFromStorage('sourceFoundUs') || '', Validators.required],
    terms: [this.customerSignupWizardService.getFromStorage('terms'), Validators.requiredTrue],
  });

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private customerSignupWizardService: CustomerSignupWizardService
  ) {
  }

  ngOnInit(): void {
  }

  showLegalNoticeDialog($event): void {
    $event.preventDefault();
    this.dialog.open(LegalNoticeDialogComponent, {
      panelClass: 'full-panel',
      closeOnNavigation: true
    });
  }

  showPrivacyDialog($event): void {
    $event.preventDefault();
    this.dialog.open(PrivacyDialogComponent, {
      panelClass: 'full-panel',
      closeOnNavigation: true
    });
  }
}
