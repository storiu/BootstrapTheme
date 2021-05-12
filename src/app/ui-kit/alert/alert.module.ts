import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { PipesModule } from '../pipes/pipes.module';
import { AlertService } from './alert.service';

import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { YesNoDialogComponent } from './yes-no/yes-no-dialog.component';
import { NotifyDialogComponent } from './notify-dialog/notify-dialog.component';

@NgModule({
  declarations: [
    AlertDialogComponent,
    DeleteConfirmDialogComponent,
    YesNoDialogComponent,
    NotifyDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    PipesModule
  ]
})
export class AlertModule {
  static forRoot(): ModuleWithProviders<AlertModule> {
    return {
      ngModule: AlertModule,
      providers: [ AlertService ]
    };
  }
}
