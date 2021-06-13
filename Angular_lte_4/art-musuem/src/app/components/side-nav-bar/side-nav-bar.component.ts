import { Router } from '@angular/router';
/*eslint-disable */
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NumberLiteralType } from 'typescript';
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
  smallScreenIndex:number = 0;
  private  _userId:string = '';
  private  _password:string = '';
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
  get password():string {
    return this._password? this._password : '';
  } 
  set password(val :string) {
    this._password = val;
  } 
  constructor(private categoryServices: CategoriesService, private router: Router) { 
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
    console.log(`${this._categories}`)
    localStorage.setItem('userId',this.userId);
    localStorage.setItem('password',this.password);
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
  setMenuIndex(factor:number) {
    this.smallScreenIndex += factor;
    if(this.smallScreenIndex < 1) {
      this.smallScreenIndex = this.Menus.length - 1;
    } else if (this.smallScreenIndex === this.menus.length) {
      this.smallScreenIndex = 1;
    }
    //if(this.smallScreenIndex === 0 ? factor < 0 
    const route = this.smallScreenIndex > 0 ?  '/view' : '/';
    const params = this.smallScreenIndex > 0 ?  this.menus[this.smallScreenIndex].param : '';
    this.router.navigate([route, params]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
    // alert(JSON.stringify(this.menus[this.smallScreenIndex].param));
    // this.router.navigate(['view'], { queryParams: { key: 'starters-x' } });
      
  }
  getMenuIndex(factor:number):number {
    this.smallScreenIndex += factor;
    if(this.smallScreenIndex < 0) {
      this.smallScreenIndex = this.Menus.length - 1;
    } else if (this.smallScreenIndex === this.menus.length) {
      this.smallScreenIndex = 0;
    }
    alert(JSON.stringify(this.menus[this.smallScreenIndex].param));
   return this.smallScreenIndex;
      
  }
  navigateStoragelogout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('userMenu');
    this.router.navigate(['']);
    this.userNotLoggedIn = true ;
  }
  navigateStorageRegisterUser() {
    localStorage.setItem('userRegister','true'); 
  }
}
