import { HttpHeaders } from '@angular/common/http';

export function setHeader(accessToken: string): HttpHeaders {
  return  new HttpHeaders().set('Authorization', accessToken ? 'bearer ' + accessToken : 'bearer');
}


