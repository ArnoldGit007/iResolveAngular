import { Component, OnInit } from '@angular/core';
import { User } from '../app/modules/common/models/user.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedInUser: User;

  constructor() { }

  ngOnInit() {
  }

  logOutUser(){
    debugger
    this.loggedInUser = null;
    console.log('[Inside App Component ] :- ', this.loggedInUser)
  }
}
