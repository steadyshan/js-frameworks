import { Injectable } from '@angular/core';
import { DeviImageList } from '../../assets/data-and-config/data/devi.image.list' //'../assets/data-/../components/viewers/data/devi.image.list';
import { MahadevImageList } from '../../assets/data-and-config/data/mahadev.image.list';
import { MahadevFamilyImageList } from '../../assets/data-and-config/data/mahadev-family.image.list';
import { LaxmiVishnuHanumanList} from '../../assets/data-and-config/data/laxmi-vishnu-hanuman.list';
import { PeopleImageList } from '../../assets/data-and-config/data/people.image.list';
import { PlacesScenesObjectsImageList} from '../../assets/data-and-config/data/places-scenes-objects.image.list';
import { ThemesMisc } from '../../assets/data-and-config/data/themes-misc.list';
import { LatestUploadsImageList } from '../../assets/data-and-config/data/latest-uploads.list';
import { PlanesImageList } from '../../assets/data-and-config/data/planes.image.list';
import { GaneshImageList } from '../../assets/data-and-config/data/ganesh.image.list';
import { SwamiSamarthaImageList } from '../../assets/data-and-config/data/swami-samartha.image.list'
import { DattavatarImageList } from '../../assets/data-and-config/data/dattavatar.image.list';
import { ShirdiSaiQ1Q22021ImageList} from '../../assets/data-and-config/data/shirdi-sai-q2-2020.list';
import { TrainImageList } from '../../assets/data-and-config/data/trains.list'
import { GeneralImageList } from '../../assets/data-and-config/data/general.image.list';
import { allImageList, ImageElement } from '../../assets/data-and-config/data/image.list';
@Injectable({
  providedIn: 'root'
})
export class ListFunnelService {

  allImageList:ImageElement[] = [];
  sortThumbnails:string = '';
  genImageList:any = null ;
  constructor() { }
  loadSelectedContent(strParam:any):any {
    switch(strParam) {
      case 'latest-uploads': this.genImageList = new LatestUploadsImageList();
                             this.allImageList = this.genImageList.allImageList ;
                             break;
      case 'starters-x': this.genImageList = new GeneralImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
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
      case 'dattavatar': this.genImageList = new DattavatarImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'swami-samartha': this.genImageList = new SwamiSamarthaImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'planes':  this.genImageList = new PlanesImageList();  
      this.allImageList = this.genImageList.allImageList ;
      break;        
      case 'trains': this.genImageList = new TrainImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shirdi-sai-q1-q2-2021': this.genImageList = new ShirdiSaiQ1Q22021ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'people-places': this.genImageList = new PeopleImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'places-scenes-objects': this.genImageList = new PlacesScenesObjectsImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'themes-misc': this.genImageList = new ThemesMisc();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      default: this.allImageList = allImageList ; break;
    }
    return { all:  this.allImageList, gen: this.genImageList };

  }
}
