import { introContentList } from '../../../../assets/data-and-config/menus-and-other-contexts/summary-page-content-list';
import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { ListFunnelService  } from '../../../services/list-funnel.service';
// import { SideNavBarComponent } from  'compo / './components/side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'landing-page-introduction',
  templateUrl: './landing-page-introduction.component.html',
  styleUrls: ['./landing-page-introduction.component.css']
})
export class LandingPageIntroduction implements OnInit {
  context:number =  0;
  introContent:string = '';
  constructor(private listFunnelService: ListFunnelService) {
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
    let uploadStats  = `current statistics as of ${new Date()}`;
    const summaryStats = this.listFunnelService.getStats();
    // Date = 
    const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const getDate = `${month_names[new Date().getMonth()]} ${new Date().getFullYear()}`
    uploadStats = `${uploadStats}<br/><strong>'non compiled' themes:</strong> ${summaryStats.subjects}, <strong>total counts</strong>${summaryStats.totalCounts}`;
    this.introContent = `${introContentList[this.context]}<p  style='{color:red}'> - Shantanu, ${getDate}</p> </em>${uploadStats}`; // ${JSON.stringify(this.listFunnelService.getStats())}`   ;
    // window.setInterval(() => { this.context++ ; if (this.context > 1) this.context = 0 ; this.introContent = introContentList[this.context];}, 1000);
  }
  ngOnChanges() {
    alert(JSON.stringify(this.listFunnelService.getStats()));
    this.introContent = `${this.context} hsalidfewojfewjrl<br/>${introContentList[this.context]}<br/>${JSON.stringify(this.listFunnelService.getStats())}` ;
     
  }
  get isLoggedIn():boolean {
    return localStorage.getItem('userId') !== null ;
  }
}
