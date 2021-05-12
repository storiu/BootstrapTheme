import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Base64 } from 'js-base64';

import { confirmPasswordValidator } from '../../core/utils/validators.util';
import { toAbsolutePath, archincerRoutes } from '../../core/data/routes';
import { CustomerSignupWizardService } from '../../core/services/customer-signup-wizard.service';
import { CustomerService } from '../../core/services/customer.service';
import { ToastrService } from '../../core/services/toastr.service';
import { ScrollPosition } from '../../core/data/scroll-pos';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'archincer-customer-register-dialog',
  templateUrl: './customer-register-dialog.component.html',
  styleUrls: ['./customer-register-dialog.component.scss'],
})
export class CustomerRegisterDialogComponent implements OnInit {

  uhLandingRoutes = archincerRoutes;
  isLoading = false;
  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
    terms: [false, Validators.requiredTrue]
  });

  ngOnInit(): void {
  }

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private scrollToService: ScrollToService,
    private customerSignupWizardService: CustomerSignupWizardService,
    private customerService: CustomerService,
  ) {
  }

  navigate(path: string): void {
    this.router.navigateByUrl(toAbsolutePath(path)).then(() => {
      this.scrollToService.scrollTo({ target: ScrollPosition.Root });
    });
  }

  async register(): Promise<void> {
    try {
      this.isLoading = true;
      const ideas = this.customerSignupWizardService.getFromStorage('ideas') || [];
      const user = { ...this.form.value, ideas };
      const response = await this.customerService.register({ projects: [], user }).toPromise();
      const payload = {
        route: 'app/my-projects',
        hasProject: false,
        showWelcomeDialog: true,
        accessToken: response.accessToken
      };
      const base64EncodedPayload = Base64.encode(JSON.stringify(payload));
      this.customerSignupWizardService.clearStorage();
      window.location.href = `${environment.archincerAppUrl}/${archincerRoutes.externalLinks.redirect}/${base64EncodedPayload}`;
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to register your account. Please try again.');
    } finally {
      this.isLoading = false;
    }
  }

  showLegalNoticeDialog($event): void {
    $event.preventDefault();
    // this.dialog.open(LegalNoticeDialogComponent, {
    //   panelClass: 'full-panel',
    //   closeOnNavigation: true
    // });
  }

  showPrivacyDialog($event): void {
    $event.preventDefault();
    // this.dialog.open(PrivacyDialogComponent, {
    //   panelClass: 'full-panel',
    //   closeOnNavigation: true
    // });
  }

}
