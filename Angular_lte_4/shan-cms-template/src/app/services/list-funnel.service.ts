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
import { GaneshGTEQ12023ImageList } from '../../assets/data-and-config/data/ganesh-gte-q1-2023.image.list';
import { SwamiSamarthaImageList } from '../../assets/data-and-config/data/swami-samartha.image.list'
import { DattavatarImageList } from '../../assets/data-and-config/data/dattavatar.image.list';
import { ShirdiSaiPreQ32021ImageList} from '../../assets/data-and-config/data/shirdi-sai-pre-q3-2021.list';
import { ShirdiSaiQ3Q42021ImageList} from '../../assets/data-and-config/data/shirdi-sai-q3-q4-2021.list';
import { ShirdiSaiQ2Q32022ImageList} from '../../assets/data-and-config/data/shirdi-sai-q2-q3-2022.list';
import { ShirdiSaiQ42022Q12023ImageList} from '../../assets/data-and-config/data/shirdi-sai-q4-2022-q1-2023.list';
import { ShirdiSaiQ2Q32023ImageList} from '../../assets/data-and-config/data/shirdi-sai-q2-q3-2023.list';
import { ShirdiSaiThemeList1} from '../../assets/data-and-config/data/baba-theme.images-list';

import { TrainImageList } from '../../assets/data-and-config/data/trains.list';
import { TrainsIndianRailwayAlcos} from '../../assets/data-and-config/data/trains-indian-railway-alcos'
import { TrainsIndianRailwaySpecialTrains} from '../../assets/data-and-config/data/trains-indian-railway-special-trains'
import { GeneralImageList } from '../../assets/data-and-config/data/general.image.list';
import { ShowpieceImageList } from '../../assets/data-and-config/data/showpiece.image.list';
import {MumbaiMeriJaanList} from '../../assets/data-and-config/data/mumbai-meri-jaan.list';
import {MumbaiMeriJaan2List} from '../../assets/data-and-config/data/mumbai-meri-jaan-2.list';
import { allImageList, ImageElement } from '../../assets/data-and-config/data/image.list';
//#### Unorganized #### 
import { AnimateToBeOrganized1ImageList } from  '../../assets/data-and-config/data/animate-to-be-organized-1.list';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
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
  canvassSize = [
    'A3', 'A4', 'soft'
  ];
  content = [
    'color-pencil',
    'black-white',
    'color-crayon',
    'color-pencil black-white',
    'poem black-white',
  ]
  // show sketch stats
  public techStatsDiv(fileDetail:any):string {
    let returnHTML = '';
    if ((fileDetail.canvassSize && fileDetail.canvassSize.trim() !== '') || 
        (fileDetail.content && fileDetail.content.trim() !== '')){
      returnHTML = '<ul>'
      if (fileDetail.canvassSize && fileDetail.canvassSize.trim() !== '') {
        switch(fileDetail.canvassSize) {
          case 'A3': returnHTML = `${returnHTML}<li>on A3 (11x17) paper</li>`; break ;
          case 'A4': returnHTML = `${returnHTML}<li>on A4 (8.5x11) paper</li>`; break ;
          case 'soft': returnHTML = `${returnHTML}<li>soft copy only</li>`; break ;
          default: returnHTML = `${returnHTML}<li>other size</li>`; break ;
        }
      }
      if (fileDetail.content && fileDetail.content.trim() !== '') {
        switch(fileDetail.canvassSize) {
          case 'A3': returnHTML = `${returnHTML}<li>on A3 (11x17) paper</li>`; break ;
          case 'A4': returnHTML = `${returnHTML}<li>on A4 (8.5x11) paper</li>`; break ;
          case 'soft': returnHTML = `${returnHTML}<li>soft copy only</li>`; break ;
          default: returnHTML = `${returnHTML}<li>other size</li>`; break ;
        }
      }
      returnHTML = `${returnHTML}<ul>`;
      
    }
    return returnHTML ;
  }
  public techStatsSpan(fileDetail:any):string {
    if (!fileDetail || !fileDetail.canvassSize) {
      return `<p>..</p>`;
    }
    let returnHTML = '';
    if ((fileDetail.canvassSize && fileDetail.canvassSize.trim() !== '') || 
        (fileDetail.content && fileDetail.content.trim() !== '')){
      if (fileDetail.canvassSize && fileDetail.canvassSize.trim() !== '') {
        returnHTML = `${returnHTML} Canvass: `;
        switch(fileDetail.canvassSize) {
          case 'A3': returnHTML = `${returnHTML}A3 (11x17)  `; break ;
          case 'A4': returnHTML = `${returnHTML}A4 (8.5x11)  `; break ;
          case 'soft': returnHTML = `${returnHTML}soft copy only`; break ;
          case 'portion': returnHTML = `${returnHTML}part of larger drawing`; break ;
          default: returnHTML = `${returnHTML}other size`; break ;
        }
      }
      if (fileDetail.content && fileDetail.content.trim() !== '') {
        returnHTML = `${returnHTML}, Content: `;
       /* 'color-pencil',
        'black-white',
        'color-crayon',
        'color-pencil black-white',
        'poem black-white',
       */
        switch(fileDetail.content) {
          case 'color-pencil': returnHTML = `${returnHTML}Color Pencils`; break ;
          case 'black-white': returnHTML = `${returnHTML}Black and white with possible shading`; break ;
          case 'color-crayon': returnHTML = `${returnHTML}Color Crayons`; break ;
          case 'color-pencil black-white': returnHTML = `${returnHTML}Combination of color + B&W`; break ;
          case 'poem black-white': returnHTML = `${returnHTML}Drawing + poetry`; break ;
          default: returnHTML = `${returnHTML}Other`; break ;
        }
      }
      returnHTML = `${returnHTML}`;
      
    }
    console.log(`RRR ${returnHTML}`);
    return returnHTML ;
  }
  getStats() {
    let sketchStats = {
      subjects: 0,
      totalCounts :0 ,
      canvassSize:[],
      content:[],
      themBasedCounts: [{name:'', count:0}],
    };
    sketchStats.themBasedCounts[0] = (this.getThemeCounts(new GaneshImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new GaneshGTEQ42021ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new GaneshGTEQ12023ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new AnimateToBeOrganized1ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new DeviImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MahadevImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MahadevFamilyImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new LaxmiVishnuHanumanList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new DattavatarImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new SwamiSamarthaImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiPreQ32021ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ3Q42021ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ2Q32022ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ42022Q12023ImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ShirdiSaiQ2Q32023ImageList(), sketchStats.canvassSize,sketchStats.content));
    
    sketchStats.themBasedCounts.push(this.getThemeCounts((new ShirdiSaiThemeList1()), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PeopleImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new TrainImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new TrainsIndianRailwayAlcos(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new TrainsIndianRailwaySpecialTrains(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MumbaiMeriJaanList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new MumbaiMeriJaan2List(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PlacesScenesObjectsImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new PlanesImageList(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.push(this.getThemeCounts(new ThemesMisc(), sketchStats.canvassSize,sketchStats.content));
    sketchStats.themBasedCounts.forEach((theme:any)=> {
      sketchStats.subjects++;
      sketchStats.totalCounts += theme.count;
    });
    return sketchStats ;
  }
  //... later
  loadMultipleThemes(functionProto: any, optionalArg=null) {
    functionProto(new GaneshImageList()) ;
    functionProto(new GaneshGTEQ42021ImageList()) ;
    functionProto(new GaneshGTEQ12023ImageList()) ;
    functionProto(new DeviImageList()) ;
    functionProto(new MahadevImageList()) ;
    functionProto(new MahadevFamilyImageList()) ;
    functionProto(new LaxmiVishnuHanumanList()) ;
    functionProto(new DattavatarImageList()) ;
    functionProto(new SwamiSamarthaImageList()) ;
    functionProto(new ShirdiSaiPreQ32021ImageList()) ;
    functionProto(new ShirdiSaiQ3Q42021ImageList()) ;
    functionProto(new ShirdiSaiQ2Q32022ImageList()) ;
    functionProto(new ShirdiSaiQ42022Q12023ImageList()) ;
    functionProto(new ShirdiSaiQ2Q32023ImageList()) ;
    functionProto(new ShirdiSaiThemeList1()) ;
    functionProto(new PeopleImageList()) ;
    functionProto(new TrainImageList()) ;
    functionProto(new TrainsIndianRailwayAlcos()) ;
    functionProto(new TrainsIndianRailwaySpecialTrains()) ;
    functionProto(new MumbaiMeriJaanList()) ;
    functionProto(new MumbaiMeriJaan2List()) ;
    functionProto(new PlacesScenesObjectsImageList()) ;
    functionProto(new PlanesImageList()) ;
    functionProto(new ThemesMisc());
    functionProto(new AnimateToBeOrganized1ImageList());
  }
  // optimize 
  loadLists(imageList:any = [])  {
    imageList.push(new GaneshImageList()) ;
    imageList.push(new GaneshGTEQ42021ImageList()) ;
    imageList.push(new GaneshGTEQ12023ImageList()) ;
    imageList.push(new DeviImageList()) ;
    imageList.push(new MahadevImageList()) ;
    imageList.push(new MahadevFamilyImageList()) ;
    imageList.push(new LaxmiVishnuHanumanList()) ;
    imageList.push(new DattavatarImageList()) ;
    imageList.push(new SwamiSamarthaImageList()) ;
    imageList.push(new ShirdiSaiPreQ32021ImageList()) ;
    imageList.push(new ShirdiSaiQ3Q42021ImageList()) ;
    imageList.push(new ShirdiSaiQ2Q32022ImageList()) ;
    imageList.push(new ShirdiSaiQ42022Q12023ImageList()) ;
    imageList.push(new ShirdiSaiQ2Q32023ImageList()) ;
    imageList.push(new ShirdiSaiThemeList1()) ;
    imageList.push(new PeopleImageList()) ;
    imageList.push(new TrainImageList()) ;
    imageList.push(new TrainsIndianRailwayAlcos()) ;
    imageList.push(new TrainsIndianRailwaySpecialTrains()) ;
    imageList.push(new MumbaiMeriJaanList()) ;
    imageList.push(new MumbaiMeriJaan2List()) ;
    imageList.push(new PlacesScenesObjectsImageList()) ;
    imageList.push(new PlanesImageList()) ;
    imageList.push(new ThemesMisc());
    imageList.push(new AnimateToBeOrganized1ImageList()) ;
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
        // later this.loadMultipleThemes(this.loadTopUploads) ;
        const imageLists:any = [];
        this.loadLists(imageLists) ;
        imageLists.forEach((imageList:any) => {
          this.loadTopUploads(imageList);
        })
        /* optimized code - we can now simply add new themelists in the 'this.loadLists' function
        this.loadTopUploads(new GaneshImageList()) ;
        this.loadTopUploads(new GaneshGTEQ42021ImageList()) ;
        this.loadTopUploads(new DeviImageList()) ;
        this.loadTopUploads(new MahadevImageList()) ;
        this.loadTopUploads(new MahadevFamilyImageList()) ;
        this.loadTopUploads(new LaxmiVishnuHanumanList()) ;
        this.loadTopUploads(new DattavatarImageList()) ;
        this.loadTopUploads(new SwamiSamarthaImageList()) ;
        this.loadTopUploads(new ShirdiSaiPreQ32021ImageList()) ;
        this.loadTopUploads(new ShirdiSaiQ3Q42021ImageList()) ;
        this.loadTopUploads(new ShirdiSaiQ2Q32022ImageList()) ;
        
        this.loadTopUploads(new ShirdiSaiThemeList1()) ;
        this.loadTopUploads(new PeopleImageList()) ;
        this.loadTopUploads(new TrainImageList()) ;
        this.loadTopUploads(new MumbaiMeriJaanList()) ;
        this.loadTopUploads(new PlacesScenesObjectsImageList()) ;
        this.loadTopUploads(new PlanesImageList()) ;
        this.loadTopUploads(new ThemesMisc());
        */
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
        const latestImageLists:any = [];
        this.loadLists(latestImageLists) ;
        latestImageLists.forEach((latestImageList:any) => {
          this.loadLatestUploads(latestImageList);
        })
        /*
        if(!this.genImageList.allImageList[0].files || this.genImageList.allImageList[0].files.length <  5) {
          latestImageLists.forEach((latestImageList2:any) => {
            if(latestImageList2.allImageList && latestImageList2.allImageList[0].files) {
              latestImageList2.allImageList[0].files.sort(function(a:any, b:any) {
                const aDate = new Date(a.dateUploaded).getTime();
                const bDate = new Date(b.dateUploaded).getTime();
                let c = bDate  -  aDate ; // aDate - bDate ;
                return  c ;
              });
            }
            latestImageList2.allImageList[0].files.forEach((element:any, index:number) => {
              if (index < 2 && index < latestImageList2.allImageList[0].files.length){
                this.genImageList.allImageList[0].files.push(latestImageList2.allImageList[0].files[index]);
              }
            });
          });
          this.sortImages();
          this.genImageList.allImageList[0].themeSummary = 
            `Latest Uploads - normally a collection of sketches uploaded 30 days or less. 
             However this time around there arent so many, so this becomes (additionally) a collection of latest 2 sketches from the themes on the right` ;
        }
        */
        /* optimized code - we can now simply add new themelists in the 'this.loadLists' function
        this.loadLatestUploads(new GaneshImageList()) ;
        this.loadLatestUploads(new GaneshGTEQ42021ImageList()) ;
        this.loadLatestUploads(new DeviImageList()) ;
        this.loadLatestUploads(new MahadevImageList()) ;
        this.loadLatestUploads(new MahadevFamilyImageList()) ;
        this.loadLatestUploads(new LaxmiVishnuHanumanList()) ;
        this.loadLatestUploads(new DattavatarImageList()) ;
        this.loadLatestUploads(new SwamiSamarthaImageList()) ;
        this.loadLatestUploads(new ShirdiSaiPreQ32021ImageList()) ;
        this.loadLatestUploads(new ShirdiSaiQ3Q42021ImageList()) ;
        this.loadLatestUploads(new ShirdiSaiQ2Q32022ImageList()) ;
        this.loadLatestUploads(new ShirdiSaiThemeList1()) ;
        this.loadLatestUploads(new PeopleImageList()) ;
        this.loadLatestUploads(new TrainImageList()) ;
        this.loadLatestUploads(new MumbaiMeriJaanList());
        this.loadLatestUploads(new PlacesScenesObjectsImageList()) ;
        this.loadLatestUploads(new PlanesImageList()) ;
        this.loadLatestUploads(new ThemesMisc());
        */
        console.log(`#### LATEST UPLOAD .. LOADED`);
        
        this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
          const aDate = new Date(a.dateUploaded).getTime();
          const bDate = new Date(b.dateUploaded).getTime();
          let c = bDate  -  aDate ; // aDate - bDate ;
          return  c ;
        });
        console.log(`#### LATEST UPLOAD .. RETURN AFTER SORT`);
        
        break;
      case 'starters-x': 
      /* This page attempts to capture points 
      in my journey from third quarter 2020, when I started sketching, to approx June 2021, 
      when I finally got off my butt to put these up on a website in a sort of orderly manner*/ 
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'INTRODUCTION: Milestones in a Journey.. (Before 2021)',
              themeSummary: `These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                              <i><u>These may not be my best efforts</u></i> but are a new element or entity that was introduced in these drawings.`,
              files: [],
            }
        ]} ;
        let milestoneImageLists:any = [];
        this.loadLists(milestoneImageLists) ;
        milestoneImageLists.forEach((milestoneImageList:any) => {
          this.getMilestoneSketches(milestoneImageList,1);
        })
        
      this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
        const aDate = new Date(a.evolutionDate).getTime();
        const bDate = new Date(b.evolutionDate).getTime();
        let c = aDate  -  bDate ; // aDate - bDate ;
        return  c ;
      });
     /* this.genImageList = new GeneralImageList();
                         this.allImageList = this.genImageList.allImageList ;*/   
      break;
      case 'starters-x2': 
      /* This page attempts to capture points 
      in my journey from third quarter 2020, when I started sketching, to approx June 2021, 
      when I finally got off my butt to put these up on a website in a sort of orderly manner*/ 
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'INTRODUCTION: Milestones in a Journey.. ( 2022)',
              themeSummary: `These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                              <i><u>These may not be my best efforts</u></i> but are a new element or entity that was introduced in these drawings.`,
              files: [],
            }
        ]} ;
        let milestoneImageLists2:any = [];
        this.loadLists(milestoneImageLists2) ;
        milestoneImageLists2.forEach((milestoneImageList:any) => {
          this.getMilestoneSketches(milestoneImageList,2);
        })
        
      this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
        const aDate = new Date(a.evolutionDate).getTime();
        const bDate = new Date(b.evolutionDate).getTime();
        let c = aDate  -  bDate ; // aDate - bDate ;
        return  c ;
      });
     /* this.genImageList = new GeneralImageList();
                         this.allImageList = this.genImageList.allImageList ;*/   
      break;
      case 'starters-x3': 
      /* This page attempts to capture points 
      in my journey from third quarter 2020, when I started sketching, to approx June 2021, 
      when I finally got off my butt to put these up on a website in a sort of orderly manner*/ 
      this.genImageList = { 
        allImageList: [ 
            { 
              folder:'',
              theme:'INTRODUCTION: Milestones in a Journey..  ( 2023)',
              themeSummary: `These are landmark sketches which I consider a significant change or turn in the progress of my sketches, or maybe a special reason. 
                              <i><u>These may not be my best efforts</u></i> but are a new element or entity that was introduced in these drawings.`,
              files: [],
            }
        ]} ;
        let milestoneImageLists3:any = [];
        this.loadLists(milestoneImageLists3) ;
        milestoneImageLists3.forEach((milestoneImageList:any) => {
          this.getMilestoneSketches(milestoneImageList,3);
        })
     
      this.genImageList.allImageList[0].files.sort(function(a:any, b:any) {
        const aDate = new Date(a.evolutionDate).getTime();
        const bDate = new Date(b.evolutionDate).getTime();
        let c = aDate  -  bDate ; // aDate - bDate ;
        return  c ;
      });
     /* this.genImageList = new GeneralImageList();
                         this.allImageList = this.genImageList.allImageList ;*/   
      break;

      case 'shree-ganesh': this.genImageList = new GaneshImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shree-ganesh-gte-q4-2021': this.genImageList = new GaneshGTEQ42021ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shree-ganesh-gte-q1-2023': this.genImageList = new GaneshGTEQ12023ImageList();
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
      case 'trains-ir-alcos': this.genImageList = new TrainsIndianRailwayAlcos();
                        this.allImageList = this.genImageList.allImageList ;
                        break;
      case 'trains-ir-special-trains': this.genImageList = new TrainsIndianRailwaySpecialTrains();
                        this.allImageList = this.genImageList.allImageList ;
                        break;
      case 'mumbai-meri-jaan': this.genImageList = new MumbaiMeriJaanList();
        this.allImageList = this.genImageList.allImageList ;
        break;
      case 'mumbai-meri-jaan-2': this.genImageList = new MumbaiMeriJaan2List();
        this.allImageList = this.genImageList.allImageList ;
        break;
      case 'shirdi-sai-q1-q2-2021': this.genImageList = new ShirdiSaiPreQ32021ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shirdi-sai-q3-q4-2021': this.genImageList = new ShirdiSaiQ3Q42021ImageList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      case 'shirdi-sai-q2-q3-2022': this.genImageList = new ShirdiSaiQ2Q32022ImageList();
                          this.allImageList = this.genImageList.allImageList ;
                          break;
      case 'shirdi-sai-q4-2022-q1-2023': this.genImageList = new ShirdiSaiQ42022Q12023ImageList() ;
                          this.allImageList = this.genImageList.allImageList ;
                          break;
      case 'shirdi-sai-q2-q3-2023': this.genImageList = new ShirdiSaiQ2Q32023ImageList() ;
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
      case 'animate-to-be-oragnized1': this.genImageList = new  AnimateToBeOrganized1ImageList() ;
                                      this.allImageList = this.genImageList.allImageList ;
                                      break;
      default: this.allImageList = allImageList ; break;
    }
   // this.sortImages(false);
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
    this.allImageList[0].themeSummary = 'latest uploads of 30 days or less'
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
  // 4. Load landmark sketches - not neccessarily the top sketches but a 'milestone' in my progress
  getMilestoneSketches(currentList:any, sequence=0)  {
    /*
    evolution: `<ul><li><b>Not the first</b>, but traditionally, one starts something with Lord Ganesh.</li>
                                <li>(as will be repeated later)My first color pencil sketch and, also duplicated with black and white sketch using 'glass trace'</li>`,
                evolutionDate
    */
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
        // get evolution text
        if (fileItem.evolution ) {
          if (fileItem.evolutionSequence && fileItem.evolutionSequence === sequence){
              if (fileItem.iterations && fileItem.iterations.length > 0) {
                fileItem.iterations[0].description = `${fileItem.evolution} ${fileItem.iterations[0].description}`;
              } else {
                fileItem.description = `${fileItem.evolution} ${fileItem.description}`;
              
              }
              if(!fileItem.dateUploaded) {
                fileItem.dateUploaded = fileItem.evolutionDate;
              }
              this.genImageList.allImageList[0].files.push(fileItem);
          }
        }
      });
    }
     //   return latestUploadList ;
  }
  // 5. Get counts of each theme - 1st iteration, NOT FACTORING IN DUPLICATES
  getThemeCounts(currentList:any, canvass:any=null, content:any=null)  {
    let themeCount = {
      name: currentList.allImageList[0].theme,
      count: 0
    };
    if(currentList.allImageList && currentList.allImageList[0].files) {
      currentList.allImageList[0].files.forEach((fileItem:any) => {
        if(!fileItem.duplicate || fileItem.duplicate === false) themeCount.count++ ;
      });
    }
    return themeCount ;
  }
}
