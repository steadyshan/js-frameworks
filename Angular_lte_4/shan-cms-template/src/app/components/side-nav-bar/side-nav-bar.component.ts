import { Router } from '@angular/router';
/*eslint-disable */
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NumberLiteralType } from 'typescript';
import { CategoriesService } from '../../services/categories.service';
import { ListFunnelService  } from '../../services/list-funnel.service';
interface MenuItem {
  label:string;
  key:string;
  uniqueKey:string;
  parentKey:string;
  
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
  private _unplugged: boolean = false ;
  private _viewLink:string = `/view`;
  unpluggedSet() {
    this._unplugged = true ;
  }
  private menus:any[] = [
    {path: '/', label:'Home page', param:[]}
  ]
  get ViewLink():string {
    return this._viewLink;
  }
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
  get LoggedInClass():string {
    return localStorage.getItem('userId') !== null? 'right-nav' :  'right-nav full-size';
  }
  set password(val :string) {
    this._password = val;
  } 
  menuStyle(menu:any) {
    console.log(`${JSON.stringify(menu)}`);
    const dateuploaded = menu.dateUploaded? menu.dateUploaded: '01-01-1990'
    return  this.listFunnelService.daysAgoUploaded({dateUploaded: dateuploaded}) === true ? 
    { 'text-decoration': 'none', 'background': 'skyblue', 'border': '1px brown outset'} : {  'text-decoration': 'none',  'background': 'beige', 'border': '1px yellow inset'}
  }
  
  constructor(private categoryServices: CategoriesService, private router: Router, private listFunnelService: ListFunnelService) { 
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
  setContext(contextNum:string) {
    localStorage.setItem('context', contextNum) ;
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
    this._viewLink = this._unplugged === true ? `/unplugged-view` : `/view`;
    for (let i = 0; i < this._categories.length ; i++){
      //this._unplugged === true ?
      this.menus.push({
          path: this._viewLink, 
          label:`${this._categories[i].label}`, 
          uniqueKey: `${this._categories[i].uniqueKey}`, 
          dateUploaded:  `${this._categories[i].dateUploaded? this._categories[i].dateUploaded: '01-01-1990' }`, 
          parentKey: `${this._categories[i].parentKey}`, 
          param:this._categories[i].key
        }) ;
      // this.menus.push({path: 'view', label:`${this._categories[i].label}`, param:this._categories[i].key});
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
    let viewLink = this._unplugged === true ? `/unplugged-view` : `/view`;
    //if(this.smallScreenIndex === 0 ? factor < 0 
    const route = this.smallScreenIndex > 0 ?  viewLink : '/' ;//'/view' : '/';
    const params = this.smallScreenIndex > 0 ?  this.menus[this.smallScreenIndex].param : '';
    this.router.navigate([route, params]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
    // alert(JSON.st ringify(this.menus[this.smallScreenIndex].param));
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
    localStorage.removeItem('context');
    localStorage.removeItem('userId');
    localStorage.removeItem('userMenu');
    localStorage.removeItem('categories');
    this.router.navigate(['']);
    this.userNotLoggedIn = true ;
    this._unplugged  = false ;
    this._viewLink  = `/view`;
  }
  navigateStorageRegisterUser() {
    localStorage.setItem('userRegister','true'); 
  }
}
