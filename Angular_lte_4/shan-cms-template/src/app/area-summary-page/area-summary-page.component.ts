import { introContentList } from './../../assets/data-and-config/menus-and-other-contexts/summary-page-content-list';
import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
// import { SideNavBarComponent } from  'compo / './components/side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'area-summary-page',
  templateUrl: './area-summary-page.component.html',
  styleUrls: ['./area-summary-page.component.css']
})
export class AreaSummaryPageComponent implements OnInit {
  context:number =  0;
  introContent:string = '';
  constructor() {
   }
  get showRegister() : boolean {
    return localStorage.getItem('userRegister') === null ; 
  }
  ngOnInit() {
    let cachedContext:any = '0';
    if (localStorage.getItem('context') !== null && localStorage.getItem('context') !== cachedContext) {
      cachedContext = localStorage.getItem('context') ;
      this.context = Number(cachedContext);
    }
    
    this.introContent = introContentList[this.context]  ;
    // window.setInterval(() => { this.context++ ; if (this.context > 1) this.context = 0 ; this.introContent = introContentList[this.context];}, 1000);
  }
  ngOnChanges() {
    this.introContent = `${this.context} <br/>${introContentList[this.context]}` ;
  }
  get isLoggedIn():boolean {
    return localStorage.getItem('userId') !== null ;
  }
}
