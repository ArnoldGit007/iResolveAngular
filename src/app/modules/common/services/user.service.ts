import { Injectable } from '@angular/core';
import { User } from '../../common/models/user.model';
import { RequestResolverService } from './request-resolver.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private requestResolverService: RequestResolverService) { }

  // login(body) {
  //   return this.requestResolverService.MakeGetRequest(`https://wayfindersapi.azurewebsites.net/login`, body)
  //     .pipe(map(response => {
  //       if (response.IsSuccess) {
  //         response.ResponseData = response.ResponseData.map(project => new User().deserialize(project))
  //       }
  //       return response
  //     }));
  // }

}
