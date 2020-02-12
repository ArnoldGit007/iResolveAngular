import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service'
import { Project } from 'src/app/modules/common/models/project.model';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminService: AdminService) {
    console.log('[Inside constructor]')
  }
  private projects: Project[]

  ngOnInit() {
    this.adminService.getAllProjects().subscribe(response => {
      if (response.IsSuccess) {
        this.projects = response.ResponseData;
      }
      console.log(this.projects)
    })

    this.adminService.getProjectById().subscribe(response => {
      if (response.IsSuccess) {
        this.projects = response.ResponseData;
      }
      console.log(this.projects)
    })
  }
}
