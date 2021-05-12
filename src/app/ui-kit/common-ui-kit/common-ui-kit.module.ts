import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { IconModule } from '../icon/icon.module';
import { PipesModule } from '../pipes/pipes.module';

import { SpinnerComponent } from './spinner/spinner.component';
import { ImageRendererComponent } from './image-renderer/image-renderer.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    ImageRendererComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    IconModule,
    PipesModule,
    LazyLoadImageModule
  ],
  exports: [
    SpinnerComponent,
    ImageRendererComponent,
  ]
})
export class CommonUiKitModule {
}
