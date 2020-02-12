import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonProjectModule } from './modules/common/common.module'
import { AdminModule } from './modules/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { TesterModule } from './modules/tester/tester.module';
import { DeveloperModule } from './modules/developer/developer.module';
import { ProjectManagerModule } from './modules/project-manager/project-manager.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonProjectModule,
    AdminModule,
    TesterModule,
    DeveloperModule,
    ProjectManagerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
