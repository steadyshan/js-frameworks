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
import {MumbaiMeriJaanList} from '../../assets/data-and-config/data/mumbai-meri-jaan.list';
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
  sortSelectedContent(field='dateUploaded') {
    this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
      const aDate = a.DateUploaded ? 
              new Date(a.dateUploaded).getTime():
              new Date('09-02-2015').getTime();
              ;
      const bDate =  a.DateUploaded ? 
                  new Date(a.dateUploaded).getTime():
                  new Date('09-02-2015').getTime();new Date(b.dateUploaded).getTime();
      let c = bDate  -  aDate ; // aDate - bDate ;
      return  c ;
    });
  }
  getStats() {
    let sketchStats = {
      subjects: 0,
      totalCounts :0 ,
      themBasedCounts: [{name:'', count:0}],
    };
    sketchStats.themBasedCounts[0] = (this.getThemeCounts(new GaneshImageList()));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new GaneshGTEQ42021ImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new DeviImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MahadevImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MahadevFamilyImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new LaxmiVishnuHanumanList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new DattavatarImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new SwamiSamarthaImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ1Q22021ImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ3Q42021ImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts((new ShirdiSaiThemeList1())) );
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PeopleImageList()) );
    sketchStats.themBasedCounts.push(this.getThemeCounts(new TrainImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MumbaiMeriJaanList()));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PlacesScenesObjectsImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PlanesImageList())) ;
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ThemesMisc()));
    sketchStats.themBasedCounts.forEach((theme:any)=> {
      sketchStats.subjects++;
      sketchStats.totalCounts += theme.count;
    });
    return sketchStats ;
  }
  loadSelectedContent(strParam:any):any {
    switch(strParam) {
      case 'showpiece': 
      
        this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'Showpiece',
              themeSummary: `&nbsp;&nbsp;These are some which are, what I consider my best efforts. Almost all the better ones, I have taken my time over..<br/>
                             &nbsp;&nbsp;My attitude and approach to sketching have changed; I RARELY try to finish a sketch at one sitting, but do it in bits and pieces..`,
              files: [],
            }
        ]} ; 
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
        this.loadTopUploads(new MumbaiMeriJaanList()) ;
        this.loadTopUploads(new PlacesScenesObjectsImageList()) ;
        this.loadTopUploads(new PlanesImageList()) ;
        this.loadTopUploads(new ThemesMisc());
        this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
          const aDate = a.dateUploaded ? 
                  new Date(a.dateUploaded).getTime():
                  new Date('01-01-1990').getTime();
          const bDate = b.dateUploaded ? 
                  new Date(b.dateUploaded).getTime():
                  new Date('01-01-1990').getTime(); // new Date(b.dateUploaded).getTime();
          console.log(`compared: A: ${a.dateUploaded ? new Date(a.dateUploaded) :  new Date('01-01-1990')}, ${a.fullFileName}`);
          console.log(`compared: B: ${b.dateUploaded ? new Date(b.dateUploaded) :  new Date('01-01-1990')}, ${b.fullFileName}`);
          let c = bDate  -  aDate ; // aDate - bDate ;
          return  c ;
        });
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
        this.loadLatestUploads(new MumbaiMeriJaanList());
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
      case 'starters-x':  this.genImageList = new GeneralImageList();
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
      case 'mumbai-meri-jaan': this.genImageList = new MumbaiMeriJaanList();
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
  
  // Custom List functions
  // Process compilations from existing theme based list
  // 1. find images loaded 'latestLimit/customLimit' or less days ago
  daysAgoUploaded(source:any, customLimit = -1) {
    const firstDayOfYear =  source.dateUploaded ? new Date(source.dateUploaded): new Date('01-01-1990') ;
    const today = new Date();
  
    const diff = Math.abs(today.getTime() - firstDayOfYear.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    return customLimit === -1 ?  diffDays <= this.latestLimit: diffDays <= customLimit;
  }
  sortImages(asc=true) {
    this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
      const aDate = a.dateUploaded ? 
              new Date(a.dateUploaded).getTime():
              new Date('12-01-2015').getTime();
      const bDate = b.dateUploaded ? 
              new Date(b.dateUploaded).getTime():
              new Date('12-01-2015').getTime(); // new Date(b.dateUploaded).getTime();
      let c = asc === true ? bDate  -  aDate : aDate - bDate ; // aDate - bDate ;
      return  c ;
    });
  }
  // 2. used to extract latest uploads per theme 
  loadLatestUploads(currentList:any)  {
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
  // 3. used to extract top rated uploads per theme 
  loadTopUploads(currentList:any)  {
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
        if (fileItem.rating  && fileItem.rating === 1) {
          this.genImageList.allImageList[0].files.push(fileItem);
        }
      });
    }
     //   return latestUploadList ;
  }
  // 4. Get counts of each theme - 1st iteration, NOT FACTORING IN DUPLICATES
  getThemeCounts(currentList:any)  {
    let themeCount = {
      name: currentList.allImageList[0].theme,
      count: 0
    };
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
        themeCount.count++ ;
      });
    }
    return themeCount ;
  }
}
