import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  private userNotLoggedIn:boolean;
  private  _userId:string ;
  private menus:any[] = [
    {path: '/', label:'Home page', param:[]}
  ]
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
  navigateStoragelogin() {
    localStorage.setItem('userId',this.userId);
    this.menus = [ {path: '/', label:'Home page', param:[]}];
    if (this.userId === 'steadyshan' || this.userId === 'songads') {
      this.menus.push({path: '/content-manage', label:'Manage Content', param:[]})
    }
    for (let i = 0; i < 5 ; i++){
      this.menus.push({path: 'view', label:'View', param:[i]})
    }
    // hard code 
    /*
     <ul>
      <li> <a routerLink="/view/1">Theme1</a></li>
      <li> <a routerLink="/view/2">Theme2</a></li>
      <li> <a routerLink="/view/3">Theme3</a></li>
      <li> <a routerLink="/view/4">Theme4</a></li>
      <li> <a routerLink="/">Home</a></li>
      <li> <a routerLink="content-manage">Content Management</a></li>
    </ul>
    */
    this.userNotLoggedIn = false ;
    
  }
  navigateStoragelogout() {
    localStorage.removeItem('userId');
    this.userNotLoggedIn = true ;
  }
  navigateStorageRegisterUser() {
    localStorage.setItem('userRegister','true'); 
  }
}
