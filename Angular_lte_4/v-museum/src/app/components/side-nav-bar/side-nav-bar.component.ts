import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  private userNotLoggedIn:boolean;
  private  _userId:string ;
  get userId():string {
    return this._userId;
  } 
  set userId(val :string) {
    this._userId = val;
  } 
  constructor() { 
    this._userId = localStorage.getItem('userId') ;
    this.userNotLoggedIn = localStorage.getItem('userId') === null;
  }

  ngOnInit() {
  }
  login() {
    localStorage.setItem('userId',this.userId);
    this.userNotLoggedIn = false ;
  }
  logout() {
    localStorage.removeItem('userId');
    this.userNotLoggedIn = true ;
  }
}
