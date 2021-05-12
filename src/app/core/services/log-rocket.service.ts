import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LogRocketRecording } from '../models/log-rocket-recording';

@Injectable({
  providedIn: 'root'
})
export class LogRocketService {

  constructor(
    private http: HttpClient
  ) { }

  async saveSession(recordingId: string, email?: string): Promise<void> {
    try {
      await this.saveLogRocketSession(recordingId, email).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  saveLogRocketSession(recordingId: string, email?: string): Observable<LogRocketRecording> {
    const url = `${environment.api}/log-rocket`;
    const payload: any = { recordingId };
    if (email) {
      payload.email = email;
    }
    return this.http.post<LogRocketRecording>(url, payload);
  }

}
