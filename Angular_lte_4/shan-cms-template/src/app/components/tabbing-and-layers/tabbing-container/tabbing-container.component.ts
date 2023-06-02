import { Component, OnInit } from '@angular/core';
import { RegularViewerComponent } from '../../viewers/regular-viewer/regular-viewer.component';
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
    return tab === this.CurrentTab ? {'background':'yellow'}: {};
  }
  changeTab(tabItem:string) {
    this.listFunnelService.CurrentTab = tabItem ;
  //  this.listFunnelService.loadSelectedContent('showpiece');
  }
  ngOnInit(): void {
    console.log(JSON.stringify(this.listFunnelService.tabs));
  }
  get CurrentTab():string {
    return this.listFunnelService.CurrentTab ;
  }
  get Tabs():string[] {
    return this.listFunnelService.tabs ;
  }
}
