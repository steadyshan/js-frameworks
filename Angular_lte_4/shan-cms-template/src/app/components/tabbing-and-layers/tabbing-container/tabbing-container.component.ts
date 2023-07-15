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
    // Saving option 'optionSelect' - this is to preserve the selection if a tab change is encountered..
    // See *-viewer component where it is set in the ngOnInit
    // See tabbing container component where it will be reset if tab is clicked
    // See top nav bar component where its value is checked
    console.log(`##### Cache menu ${localStorage.getItem('optionSelect')}`) ;
    localStorage.removeItem('optionSelect');
    console.log(`##### Cache menu ${localStorage.getItem('optionSelect')}`) ;
    
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
