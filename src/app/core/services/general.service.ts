import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { HardscapeQuestion, Lead } from '../models/lead';
import { SuccessResponse } from '../models/success-response';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) {
  }

  sendContactUsMessage(payload: Lead): Observable<SuccessResponse> {
    const url = environment.api + '/contact';
    return this.http.post<SuccessResponse>(url, payload);
  }

  sendRequestApplicationMessage(payload: Lead): Observable<SuccessResponse> {
    const url = environment.api + '/partner-request';
    return this.http.post<SuccessResponse>(url, payload);
  }

  sendQuestion(payload: HardscapeQuestion): Observable<SuccessResponse> {
    const url = environment.api + '/hardscape-question';
    return this.http.post<SuccessResponse>(url, payload);
  }
}
