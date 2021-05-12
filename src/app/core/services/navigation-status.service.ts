import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { BehaviorSubject } from 'rxjs';

import { NavigationStatus } from '../enums/navigation-status.enum';
import { SessionCategory } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class NavigationStatusService {
  navigationStatus = this.sessionStorageService.retrieve(SessionCategory.Partners) ?
    NavigationStatus.PartnersLandingPage : NavigationStatus.CustomerLandingPage;
  navigationStatus$ = new BehaviorSubject<NavigationStatus>(this.navigationStatus);

  constructor(
    private sessionStorageService: SessionStorageService
  ) {
  }

  setNavigationStatus(status: NavigationStatus): void {
    this.navigationStatus$.next(status);
  }
}
