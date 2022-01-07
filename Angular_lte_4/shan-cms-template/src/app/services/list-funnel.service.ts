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
import { GaneshGTEQ42021ImageList } from '../../assets/data-and-config/data/ganesh-gte-q4-2021.image.list';
import { SwamiSamarthaImageList } from '../../assets/data-and-config/data/swami-samartha.image.list'
import { DattavatarImageList } from '../../assets/data-and-config/data/dattavatar.image.list';
import { ShirdiSaiQ1Q22021ImageList} from '../../assets/data-and-config/data/shirdi-sai-q2-2020.list';
import { ShirdiSaiQ3Q42021ImageList} from '../../assets/data-and-config/data/shirdi-sai-q3-q4-2021.list';
import { ShirdiSaiThemeList1} from '../../assets/data-and-config/data/baba-theme.images-list';

import { TrainImageList } from '../../assets/data-and-config/data/trains.list'
import { GeneralImageList } from '../../assets/data-and-config/data/general.image.list';
import { ShowpieceImageList } from '../../assets/data-and-config/data/showpiece.image.list';
import { allImageList, ImageElement } from '../../assets/data-and-config/data/image.list';
@Injectable({
  providedIn: 'root'
})
export class ListFunnelService {

  allImageList:ImageElement[] = [];
  sortThumbnails:string = '';
  genImageList:any = null ;
  latestLimit = 40 ;
  constructor() { }
  daysAgoUploaded(source:any, customLimit = -1) {
    const firstDayOfYear =  source.dateUploaded ? new Date(source.dateUploaded): new Date('01-01-1990') ;
    const today = new Date();
  
    const diff = Math.abs(today.getTime() - firstDayOfYear.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    return customLimit === -1 ?  diffDays <= this.latestLimit: diffDays <= customLimit;
  }
  loadSelectedContent(strParam:any):any {
    switch(strParam) {
      case 'showpiece': this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'showpiece',
              themeSummary: `Ones I consider my best efforts`,
              files: [],
            }
        ]} ;
        /*
        this.loadTopUploads(new GaneshImageList()) ;
        this.loadTopUploads(new GaneshGTEQ42021ImageList()) ;
        this.loadTopUploads(new DeviImageList()) ;
        this.loadTopUploads(new MahadevImageList()) ;
        this.loadTopUploads(new MahadevFamilyImageList()) ;
        this.loadTopUploads(new LaxmiVishnuHanumanList()) ;
        this.loadTopUploads(new DattavatarImageList()) ;
        this.loadTopUploads(new SwamiSamarthaImageList()) ;
        this.loadTopUploads(new ShirdiSaiQ1Q22021ImageList()) ;
        this.loadTopUploads(new ShirdiSaiQ3Q42021ImageList()) ;
        this.loadTopUploads(new ShirdiSaiThemeList1()) ;
        this.loadTopUploads(new PeopleImageList()) ;
        this.loadTopUploads(new TrainImageList()) ;
        this.loadTopUploads(new PlacesScenesObjectsImageList()) ;
        this.loadTopUploads(new PlanesImageList()) ;
        this.loadTopUploads(new ThemesMisc());
        */
        this.genImageList = new GaneshImageList();
        this.allImageList = this.genImageList.allImageList ;
        break;
      case 'latest-uploads': 
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'latest-uploads',
              themeSummary: `Uploads of 30 days or less`,
              files: [],
            }
        ]} ;
        this.loadLatestUploads(new GaneshImageList()) ;
        this.loadLatestUploads(new GaneshGTEQ42021ImageList()) ;
        this.loadLatestUploads(new DeviImageList()) ;
        this.loadLatestUploads(new MahadevImageList()) ;
        this.loadLatestUploads(new MahadevFamilyImageList()) ;
        this.loadLatestUploads(new LaxmiVishnuHanumanList()) ;
        this.loadLatestUploads(new DattavatarImageList()) ;
        this.loadLatestUploads(new SwamiSamarthaImageList()) ;
        this.loadLatestUploads(new ShirdiSaiQ1Q22021ImageList()) ;
        this.loadLatestUploads(new ShirdiSaiQ3Q42021ImageList()) ;
        this.loadLatestUploads(new ShirdiSaiThemeList1()) ;
        this.loadLatestUploads(new PeopleImageList()) ;
        this.loadLatestUploads(new TrainImageList()) ;
        this.loadLatestUploads(new PlacesScenesObjectsImageList()) ;
        this.loadLatestUploads(new PlanesImageList()) ;
        this.loadLatestUploads(new ThemesMisc());
        this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
          const aDate = new Date(a.dateUploaded).getTime();
          const bDate = new Date(b.dateUploaded).getTime();
          let c = bDate  -  aDate ; // aDate - bDate ;
          return  c ;
        });
        
        break;
      case 'starters-x': this.genImageList = new GeneralImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shree-ganesh': this.genImageList = new GaneshImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shree-ganesh-gte-q4-2021': this.genImageList = new GaneshGTEQ42021ImageList();
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
      case 'shirdi-sai-q3-q4-2021': this.genImageList = new ShirdiSaiQ3Q42021ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'baba-themes-1': this.genImageList = new ShirdiSaiThemeList1();
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
  sort(fieldName=null) {

  }
  loadLatestUploads(currentList:any)  {
    /*
    this.genImageList = new GaneshGTEQ42021ImageList();
    this.allImageList  = this.genImageList.allImageList ;
    */ 
    
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
        if (!fileItem.duplicate && this.daysAgoUploaded(fileItem, 30)) {
          this.genImageList.allImageList[0].files.push(fileItem);
        }
      });
    }
    this.allImageList  = this.genImageList.allImageList ; 
    this.allImageList[0].folder = '';
    this.allImageList[0].theme = 'latest-uploads';
    this.allImageList[0].themeSummary = 'latest uploads'
    console.log(`Loading latest`);
 //   return latestUploadList ;
  }
  loadTopUploads(currentList:any)  {
    /*
    this.genImageList = new GaneshGTEQ42021ImageList();
    this.allImageList  = this.genImageList.allImageList ;
    */ 
    
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
        if (fileItem.rating  && fileItem.rating === 1) {
          this.genImageList.allImageList[0].files.push(fileItem);
        }
      });
    }
    this.allImageList  = this.genImageList.allImageList ; 
    this.allImageList[0].folder = '';
    this.allImageList[0].theme = 'showpiece';
    this.allImageList[0].themeSummary = 'My top uploads'
    console.log(`Loading Tops`);
 //   return latestUploadList ;
  }
}
