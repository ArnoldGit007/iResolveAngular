import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service'
import { RoleService } from '../../../common/services/role.service';
import { Project } from 'src/app/modules/common/models/project.model';
import { UnRegisteredUser} from '../../models/unregistered-user-model'
import { Role } from 'src/app/modules/common/models/role.model';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminService: AdminService, private roleService: RoleService) {
    console.log('[Inside constructor]')
  }
  private projects: Project[]
  private availableRoles: Role[]
  private inactivatedUsers : UnRegisteredUser[]
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  alertMessage = '';

  ngOnInit() {
    // this.adminService.getAllProjects().subscribe(response => {
    //   if (response.IsSuccess) {
    //     this.projects = response.ResponseData;
    //   }
    //   console.log(this.projects)
    // })

    // this.adminService.getProjectById().subscribe(response => {
    //   if (response.IsSuccess) {
    //     this.projects = response.ResponseData;
    //   }
    //   console.log(this.projects)
    // })


    this.adminService.getAllInActivatedUsers().subscribe(data => {
      console.log('[All InActivated Users.] :- ');
      this.inactivatedUsers = data.ResponseData;
      console.log(data);
      this.collectionSize = this.inactivatedUsers.length;
    })

    this.roleService.getAllAvailableRoles().subscribe(data => {
      if(data.IsSuccess) this.availableRoles = data.ResponseData
    })
  }

  activateUser(selectedUser: UnRegisteredUser){
    console.log(selectedUser)
    let activateUserModel = {
      UserId: selectedUser.Id,
      RoleId: selectedUser.RoleId
    }

    this.adminService.activateUser(activateUserModel).subscribe(data => {
      if(data.IsSuccess){
        alert('User Activated Successfully.')
      }
    })
  }

  selecteRoleForUser(event, selectedUser: UnRegisteredUser){
    console.log('Value Selected :- ', event.target.value )
    console.log('User For Selection :- ', selectedUser )
    let selectedRoleId = event.target.value;
    selectedUser.RoleId = selectedRoleId
  }
}
