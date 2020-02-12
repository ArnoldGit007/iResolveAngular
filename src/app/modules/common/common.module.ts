import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component'
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/pagenotfound/page-not-found.component';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    IndexComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    RegistrationComponent,
    IndexComponent
  ]
})
export class CommonProjectModule { }
