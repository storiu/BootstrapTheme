import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';

import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { DeleteConfirmDialogComponent } from './delete-confirm-dialog/delete-confirm-dialog.component';
import { YesNoDialogComponent } from './yes-no/yes-no-dialog.component';
import { NotifyDialogComponent } from './notify-dialog/notify-dialog.component';

@Injectable()
export class AlertService {

  constructor(
    private dialog: MatDialog,
    private overlay: Overlay
  ) { }

  alert(title: string, content: string): void {
    this.dialog.open(AlertDialogComponent, {
      width: '570px',
      data: {
        title,
        content
      }
    });
  }

  confirmDelete(title: string, content: string): Observable<boolean> {
    const dialog = this.dialog.open(DeleteConfirmDialogComponent, {
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      width: '570px',
      data: {
        title,
        content
      }
    });
    return dialog.afterClosed();
  }

  yesNo(title: string, content: string): Observable<boolean> {
    const dialog = this.dialog.open(YesNoDialogComponent, {
      width: '370px',
      data: { title, content }
    });
    return dialog.afterClosed();
  }

  notify(title: string, content: string): Observable<boolean> {
    const dialog = this.dialog.open(NotifyDialogComponent, {
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      width: '570px',
      data: {
        title,
        content
      }
    });
    return dialog.afterClosed();
  }
}
