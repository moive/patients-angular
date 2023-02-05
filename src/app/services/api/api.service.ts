import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../../models/login.interface';
import { IResponse } from '../../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = 'http://solodata.es/';

  constructor(private http: HttpClient) {}

  loginByEmail(form: ILogin): Observable<IResponse> {
    let uri = this._url + 'auth';
    return this.http.post<IResponse>(uri, form);
  }
}
