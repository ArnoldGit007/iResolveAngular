import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from '../app/modules/admin/components/admin-dashboard/admin-dashboard.component'
import { IndexComponent } from './modules/common/components/index/index.component';
import { PageNotFoundComponent } from './modules/common/components/pagenotfound/page-not-found.component';
import { TesterDashboardComponent } from './modules/tester/components/tester-dashboard/tester-dashboard.component';
import { PMDashboardComponent } from './modules/project-manager/components/pm-dashboard/pm-dashboard.component';
import { DeveloperDashboardComponent } from './modules/developer/components/developer-dashboard/developer-dashboard.component';

const routes: Routes = [
  { path: 'admin-dashboard', component: AdminDashboardComponent, pathMatch: 'full' },
  { path: 'tester-dashboard', component: TesterDashboardComponent, pathMatch: 'full' },
  { path: 'developer-dashboard', component: DeveloperDashboardComponent, pathMatch: 'full' },
  { path: 'pm-dashboard', component: PMDashboardComponent, pathMatch: 'full' },
  { path: 'login', component: IndexComponent },
  { path: 'registration', redirectTo: '/login', pathMatch: 'full' },
  { path: 'index', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })], // enableTracing only for debugging purpose
  exports: [RouterModule]
})
export class AppRoutingModule { }
