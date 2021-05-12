import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { PageName, PageVisitHistory } from '../models/page-name';

import { environment } from '../../../environments/environment';
import { SuccessResponse } from '../models/success-response';
import { SpringSavingsContact } from '../models/marketing';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  countyName = '';
  countyName$: BehaviorSubject<string> = new BehaviorSubject<string>(this.countyName);

  constructor(
    private http: HttpClient
  ) { }

  pageVisit(page: PageName, id?: string, sub?: string): Promise<string> {
    return new Promise<string>((resolve) => {
      this.logPageVisit(page, id, sub).toPromise()
        .then(res => resolve(res.id))
        .catch(err => resolve(null));
    });
  }


  private logPageVisit(page: PageName, id?: string, sub?: string): Observable<PageVisitHistory> {
    const url = `${ environment.api }/marketing/page-visit`;
    const payload: any = { page };
    if (id) {
      payload.id = id;
    }
    if (sub) {
      payload.sub = sub;
    }
    return this.http.post<PageVisitHistory>(url, payload);
  }

  setCountryName(countyName: string): void {
    this.countyName = countyName;
    this.countyName$.next(this.countyName);
  }

  sendContact(payload: SpringSavingsContact): Observable<SuccessResponse> {
    const url = `${ environment.api }/request-discussion`;
    return this.http.post<SuccessResponse>(url, payload);
  }

}
