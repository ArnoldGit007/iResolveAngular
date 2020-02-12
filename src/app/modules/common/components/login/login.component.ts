import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm
  loggedInUser: User
  @Output() updateLoggedInUser = new EventEmitter<User>();
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl('wayfinder_admin@gmail.com'),
      Password: new FormControl('wayfinder@123'),
    });
  }

  login() {

    console.log(this.loginForm)
    let _self = this;
    this.loginService.login({
      Email: this.loginForm.value.Email,
      Password: this.loginForm.value.Password
    })
      .subscribe(response => {
        if (response.IsSuccess && response.ResponseData.length) {
          console.log('[Response in the login component] :- ', response)
          this.loggedInUser = response.ResponseData[0];
          if (!this.loggedInUser.IsActivated) {
            alert('User is not activated')
          } else {
            console.log('[]', this.loggedInUser)
            this.updateLoggedInUser.emit(this.loggedInUser)
            if (this.loggedInUser.RoleCode) {
              switch (this.loggedInUser.RoleCode) {
                case "TESTER":
                  debugger
                  this.router.navigate(['/tester-dashboard'])
                  break;
                case "PM":
                  this.router.navigate(['/pm-dashboard'])
                  break;
                case "DEVELOPER":
                  this.router.navigate(['/developer-dashboard'])
                  break;
                case "ADMIN":
                  this.router.navigate(['/admin-dashboard'])
                  break;
                default:
                  break;
              }
            }
          }
        }
      }, error => {
        console.log(error)
      })
  }
}
