import { Injectable } from '@angular/core';
import { DeviImageList } from '../components/views-and-lists/data/devi.image.list';
import { MahadevImageList } from '../components/views-and-lists/data/mahadev.image.list';
import { LaxmiVishnuHanumanList} from '../components/views-and-lists/data/laxmi-vishnu-hanuman.list';
import { PeopleImageList } from '../components/views-and-lists/data/people.image.list';
import { PlacesScenesObjectsImageList} from '../components/views-and-lists/data/places-scenes-objects.image.list';
import { ThemesMisc } from '../components/views-and-lists/data/themes-misc.list';
import { LatestUploadsImageList } from '../components/views-and-lists/data/latest-uploads.list';
import { PlanesImageList } from '../components/views-and-lists/data/planes.image.list';
import { GaneshImageList } from '../components/views-and-lists/data/ganesh.image.list';
import { SwamiSamarthaImageList } from '../components/views-and-lists/data/swami-samartha.image.list'
import { DattavatarImageList } from '../components/views-and-lists/data/dattavatar.image.list';
import { ShirdiSaiQ1Q22021ImageList} from '../components/views-and-lists/data/shirdi-sai-q2-2020.list';
import { TrainImageList } from '../components/views-and-lists/data/trains.list'
import { GeneralImageList } from '../components/views-and-lists/data/general.image.list';
import { allImageList, ImageElement } from '../components/views-and-lists/data/image.list';
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
