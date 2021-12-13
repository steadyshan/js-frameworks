import { Injectable } from '@angular/core';
import { DeviImageList } from '../../assets/data-and-config/data/devi.image.list' //'../assets/data-/../components/viewers/data/devi.image.list';
import { MahadevImageList } from '../../assets/data-and-config/data/mahadev.image.list';
import { MahadevFamilyImageList } from '../../assets/data-and-config/data/mahadev-family.image.list';
import { LaxmiVishnuHanumanList} from '../../assets/data-and-config/data/laxmi-vishnu-hanuman.list';
import { GaneshImageList } from '../../assets/data-and-config/data/ganesh.image.list';

import { allImageList, ImageElement } from '../../assets/data-and-config/data/image.list';
@Injectable({
  providedIn: 'root'
})
export class ListFunnelService {

  allImageList:ImageElement[] = [];
  sortThumbnails:string = '';
  genImageList:any = null ;
  constructor() { }
  daysAgoUploaded(source:any) {
    const firstDayOfYear =  source.dateUploaded ? new Date(source.dateUploaded): new Date('01-01-1990') ;
    const today = new Date();
    
  
    const diff = Math.abs(today.getTime() - firstDayOfYear.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    return diffDays;
  }
  loadSelectedContent(strParam:any):any {
    switch(strParam) {
      case 'shree-ganesh': this.genImageList = new GaneshImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'devi': this.genImageList = new DeviImageList();
      this.allImageList = this.genImageList.allImageList ;
      break;
      case 'mahadev': this.genImageList = new MahadevImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'mahadev-family': this.genImageList = new MahadevFamilyImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'laxmi-vishnu-hanuman': this.genImageList = new LaxmiVishnuHanumanList();
                           this.allImageList = this.genImageList.allImageList ;
                           break;
      default: this.allImageList = allImageList ; break;
    }
    return { all:  this.allImageList, gen: this.genImageList };

  }
}
