import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  currentJustify = 'fill';
  constructor() { }

  ngOnInit() {
  }


  setLoggedInUser(loggedInUser:User){
    //this.loggedInUser = loggedInUser;
    console.log('[Response coming from Index Component]')
    console.log(loggedInUser)
  }

}
