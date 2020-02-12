import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperDashboardComponent } from './components/developer-dashboard/developer-dashboard.component';

@NgModule({
  declarations: [DeveloperDashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DeveloperDashboardComponent
  ]
})
export class DeveloperModule { }
