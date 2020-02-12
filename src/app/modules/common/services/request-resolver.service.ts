import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { APIResponse } from '../../common/models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class RequestResolverService {
  constructor(private httpClient: HttpClient) { }

  public MakeGetRequest(apiEndPoint:string): Observable<APIResponse> {
    return this.httpClient.get<APIResponse>(apiEndPoint)
      .pipe(map(data => data),
        catchError(
          err => {
            return throwError(err);
          }
      ));
  }


  public MakePostRequest(apiEndPoint:string, body): Observable<APIResponse> {
    return this.httpClient.post<APIResponse>(apiEndPoint, body)
      .pipe(map(data => data),
        catchError(
          err => {
            return throwError(err);
          }
      ));
  }

  public MakePutRequest(apiEndPoint:string, body): Observable<APIResponse> {
    return this.httpClient.put<APIResponse>(apiEndPoint, body)
      .pipe(map(data => data),
        catchError(
          err => {
            return throwError(err);
          }
      ));
  }
}
