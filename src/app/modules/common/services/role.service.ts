import { Injectable } from '@angular/core';
import { User } from '../../common/models/user.model';
import { Role } from '../../common/models/role.model';

import { RequestResolverService } from './request-resolver.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private requestResolverService: RequestResolverService) { }

  getAllAvailableRoles() {
    return this.requestResolverService.MakeGetRequest(`https://wayfindersapi.azurewebsites.net/roles`)
      .pipe(map(response => {
        console.log(response)
        response.ResponseData = response.ResponseData.map(project => new Role().deserialize(project))
        return response
      }));
  }
}
