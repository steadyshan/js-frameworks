/*eslint-disable */
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
interface ParamElement {
  label:string;
  key:string;
}
@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  userNotLoggedIn:boolean;
  private  _userId:string = '';
  private _categories:any;
  private menus:any[] = [
    {path: '/', label:'Home page', param:[]}
  ]
  get Menus():any[] {
    return this.menus;
  }
  get userId():string {
    return this._userId? this._userId : '';
  } 
  set userId(val :string) {
    this._userId = val;
  } 
  constructor(private categoryServices: CategoriesService) { 
    let  a:any  = ''; //
    a = localStorage.getItem('userId');
    if (a)this._userId = a;
    this.userNotLoggedIn = localStorage.getItem('userId') === null;
    let storedMenus = localStorage.getItem('userMenu');
    if (storedMenus !== null) {
      this.menus = JSON.parse(storedMenus);
    }
    // ts-lint:disable
    this._categories = localStorage.getItem('categories'); // ts-lint:disable
  }

  ngOnInit() {
  }
  navigateStoragelogin() {
    this._categories = (this.categoryServices.Categories);
    localStorage.setItem('userId',this.userId);
    this.menus = [ {path: '/', label:'Home page', param:[]}];
    if (this.userId === 'steadyshan' || this.userId === 'songads') {
      this.menus.push({path: '/content-manage', label:'Manage Content', param:[]})
    }
    for (let i = 0; i < this._categories.length ; i++){
      this.menus.push({path: 'view', label:`${this._categories[i].label}`, param:this._categories[i].key})
    }
    // alert(JSON.stringify(this.menus));
    localStorage.setItem('userMenu', JSON.stringify(this.menus));
    this.userNotLoggedIn = false ;
    
  }
  navigateStoragelogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userMenu');
    this.userNotLoggedIn = true ;
  }
  navigateStorageRegisterUser() {
    localStorage.setItem('userRegister','true'); 
  }
}
