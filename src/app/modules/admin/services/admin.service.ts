import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../../common/models/project.model'
import { APIResponse } from '../../common/models/api-response.model';
import { RequestResolverService } from '../../common/services/request-resolver.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private requestResolver: RequestResolverService) {
  }

  public getAllProjects(): Observable<APIResponse> {
    return this.requestResolver.MakeGetRequest(`https://wayfindersapi.azurewebsites.net/projects`)
      .pipe(map(response => {
        if (response.IsSuccess) {
          response.ResponseData = response.ResponseData.map(project => new Project().deserialize(project))
        }
        console.log(response)
        return response
      }));
  }

  
  public getProjectById(): Observable<APIResponse> {
    return this.requestResolver.MakeGetRequest(`https://wayfindersapi.azurewebsites.net/projects/1`)
      .pipe(map(response => {
        if (response.IsSuccess) {
          response.ResponseData = response.ResponseData.map(project => new Project().deserialize(project))
        }
        console.log(response)
        return response
      }));
  }
}