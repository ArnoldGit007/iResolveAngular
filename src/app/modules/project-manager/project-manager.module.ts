import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PMDashboardComponent } from './components/pm-dashboard/pm-dashboard.component';

@NgModule({
  declarations: [PMDashboardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PMDashboardComponent
  ]
})
export class ProjectManagerModule { }
