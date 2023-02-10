import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ILogin } from '../../models/login.interface';
import { IResponse } from '../../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = environment.API_URI;

  constructor(private http: HttpClient) {}

  loginByEmail(form: ILogin): Observable<IResponse> {
    let uri = this._url + '/auth';
    console.log('uri', uri);
    return this.http.post<IResponse>(uri, form);
  }
}
