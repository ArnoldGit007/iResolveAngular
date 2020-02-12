import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesterDashboardComponent } from './components/tester-dashboard/tester-dashboard.component';

@NgModule({
  declarations: [TesterDashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TesterDashboardComponent
  ]
})
export class TesterModule { }