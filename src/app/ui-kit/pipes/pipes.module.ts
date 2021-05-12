import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';

import { RouteToAbsolutePipe } from './route-to-absolute.pipe';
import { HasNextPatioPackagePipe } from './has-next-patio-package.pipe';
import { HasPrevPatioPackagePipe } from './has-prev-patio-package.pipe';
import { NextPatioPackagePipe } from './next-patio-package.pipe';
import { ColorPipe } from './color.pipe';
import { OptionLabelPipe } from './option-label.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { UntilPipe } from './until.pipe';
import { AfterPipe } from './after.pipe';
import { DashCasePipe } from './dash-case.pipe';
import { GetIndexFromEnumPipe } from './get-index-from-enum.pipe';
import { ProductImagePathPipe } from './product-image-path.pipe';

@NgModule({
  declarations: [
    RouteToAbsolutePipe,
    HasNextPatioPackagePipe,
    HasPrevPatioPackagePipe,
    NextPatioPackagePipe,
    ColorPipe,
    OptionLabelPipe,
    SafeHtmlPipe,
    UntilPipe,
    AfterPipe,
    DashCasePipe,
    GetIndexFromEnumPipe,
    ProductImagePathPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouteToAbsolutePipe,
    HasNextPatioPackagePipe,
    HasPrevPatioPackagePipe,
    NextPatioPackagePipe,
    ColorPipe,
    OptionLabelPipe,
    SafeHtmlPipe,
    UntilPipe,
    AfterPipe,
    DashCasePipe,
    GetIndexFromEnumPipe,
    ProductImagePathPipe
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    OptionLabelPipe
  ]
})
export class PipesModule { }
