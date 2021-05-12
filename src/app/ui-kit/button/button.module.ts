import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { IconModule } from '../icon/icon.module';
import { CommonUiKitModule } from '../common-ui-kit/common-ui-kit.module';

import { RequestEstimateButtonComponent } from './request-estimate-button/request-estimate-button.component';
import { PaymentButtonComponent } from './payment-button/payment-button.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { ToggleButtonGroupComponent } from './toggle-button-group/toggle-button-group.component';

@NgModule({
  declarations: [
    RequestEstimateButtonComponent,
    PaymentButtonComponent,
    LikeButtonComponent,
    ToggleButtonGroupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ScrollToModule.forRoot(),
    IconModule,
    CommonUiKitModule
  ],
  exports: [
    RequestEstimateButtonComponent,
    PaymentButtonComponent,
    LikeButtonComponent,
    ToggleButtonGroupComponent,
  ]
})
export class ButtonModule { }
