import { Component, OnInit } from '@angular/core';
import { ListFunnelService } from 'src/app/services/list-funnel.service';
@Component({
  selector: 'app-tabbing-container',
  templateUrl: './tabbing-container.component.html',
  styleUrls: ['./tabbing-container.component.css']
})
export class TabbingContainerComponent implements OnInit {
  
  ly:string='horizontal';
  constructor(private listFunnelService: ListFunnelService) { }
  selectedCat(tab:string) {
    return tab === this.CurrentTab ? {'background':'aliceblue', 'color': 'darkslateblue', 'border':'2px blue inset;'}: {};
  }
  changeTab(tabItem:string) {
    this.listFunnelService.CurrentTab = tabItem ;
    console.log( this.listFunnelService.CurrentTab) ;
  //  this.listFunnelService.loadSelectedContent('showpiece');
  }
  ngOnInit(): void {
    console.log(JSON.stringify(this.listFunnelService.tabs));
  }
  get CurrentTab():string {
    return this.listFunnelService.CurrentTab ;
  }
  get Tabs():string[] {
    return  this.listFunnelService.tabs  ;
      ;
    return localStorage.getItem('role') === 'Admin' ?
      this.listFunnelService.tabs :
      this.listFunnelService.tabs.filter(tab => tab.toLowerCase().indexOf('admin') <0) ;
      ;
  }
}
