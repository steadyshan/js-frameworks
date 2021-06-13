import { DeviImageList } from './data/devi.image.list';
import { MahadevImageList } from './data/mahadev.image.list';
import { PeoplePlacesImageList } from './data/people-places.image.list';
import { LatestUploadsImageList } from './data/latest-uploads.list';
import { PlanesImageList } from './data//planes.image.list';
import { LabeledStatement } from 'typescript';
import { GaneshImageList } from './data/ganesh.image.list';
import { SwamiSamarthaImageList } from './data/swami-samartha.image.list'
import { DattavatarImageList } from './data/dattavatar.image.list';
import { ShirdiSaiQ1Q22021ImageList} from './data/shirdi-sai-q2-2020.list';
import { TrainImageList } from './data/trains.list'
import { GeneralImageList } from './data/general.image.list';
import { allImageList, ImageElement } from './data/image.list';
import { CompileMetadataResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
// import * as fs from 'fs';
// import { MockStringBundlerHost } from '../../../../node_modules_1/@angular/tsc-wrapped/test/bundler_spec';
/* interface DataDetail {
  fileName:string;
  type:string;// 'img'
  folder:string;
}
*/

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  iterativeText = 'ITERATIONS';
  allImageList:ImageElement[] = [];
  sortThumbnails:string = '';
  genImageList:any = null ;
  selectedImageList:any[] = [ ];
  currentImage =  this.selectedImageList[0]; // `assets/all-images-demo/starters/su-30-1.jpeg`;
  iterationIndex = 0;
  themeHeader:string ='';
  themeSummary:string = '';
  currentIndex:number = 0 ;
  _actualSize:boolean = false;
  _iterations:boolean = false ;
  constructor(private activatedRoute:ActivatedRoute) { }
  get ActualSize():boolean {
    return this._actualSize;
  }
  set ActualSize(val:boolean) {
    this._actualSize = val ;
  }
  get Iterations():boolean {
    return this._iterations;
  }
  set Iterations(val:boolean) {
    this._iterations = val ;
  }
  get CurrentImage(): string {
    return JSON.stringify(this.currentImage);
  }
  ngOnInit() {
    let themed:any = null ;
    let foundList:ImageElement[] = [] ;
    this.activatedRoute.paramMap.subscribe(param => 
      { 
        themed = param; console.log(param.get('theme'));
        let strParam = (param.get('theme'));
        this.genImageList =  null;
        console.log(themed);
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
          case 'people-places': this.genImageList = new PeoplePlacesImageList();
                             this.allImageList = this.genImageList.allImageList ;
                             break;
          default: this.allImageList = allImageList ; break;
        }
        foundList = this.allImageList.filter(x => x.folder === param.get('theme'));// themed.params.theme.toString());
        if (foundList !== null && foundList.length > 0) {
          let foundFolder = foundList[0].folder;
          this.themeHeader = '';
          this.themeSummary = '';
          if(foundList[0].theme) this.themeHeader = foundList[0].theme; 
          if(foundList[0].themeSummary) this.themeSummary = foundList[0].themeSummary; 
          this.selectedImageList = [];
          foundList[0]
              .files
              .forEach( (fileData:any) => {
                fileData.fullFileName? 
                  this.selectedImageList.push({ 
                    iterativeText: fileData.iterativeText?`${fileData.iterativeText}`:'',
                    image: `${fileData.fullFileName}`, 
                    title: fileData.description,
                    iterations: fileData.iterations? fileData.iterations:[],
                    iterationIndex:0 }):
                  this.selectedImageList.push({ 
                    image: `assets/all-images/${foundFolder}/${fileData.fileName}`, 
                    title: fileData.description,
                    iterations: fileData.iterations? fileData.iterations:[],
                    iterationIndex:0 
                   });
              });
          }
          this.currentIndex = 0;
          this.currentImage = this.selectedImageList[0];
          if (this.currentImage.iterations !== null && this.currentImage.iterations.length > 0) {
            //this.currentImage.iterations.unshift(this.currentImage.image );
            this.currentImage.iterationIndex = 0;
          
          }
          
      });
    
  
  }
  toggleSort(){
    // let tempList = JSON.parse(JSON.stringify(this.selectedImageList)
    let downCount = JSON.parse(JSON.stringify(this.selectedImageList));
    this.selectedImageList = [];
    for (let m of downCount){
      this.selectedImageList.unshift(m);
    }
    this.currentIndex = 0;
          this.currentImage = this.selectedImageList[0];
          if (this.currentImage.iterations !== null && this.currentImage.iterations.length > 0) {
            // this.currentImage.iterations.unshift(this.currentImage.image );
            this.currentImage.iterationIndex = 0;
          }
  }
  headerStyle():any {
     let currentHeight = '40px';
     let paddinghTop = '-5px';
     if (this.themeSummary !== '')
        currentHeight = '100px';
     return  { height:  currentHeight, 'padding-top': paddinghTop } ;
  }
  prevImage() {
    this.currentIndex-- ;
    if (   this.currentIndex < 0 ) {
      this.currentIndex = this.selectedImageList.length -1;
   
    }

    this.currentImage = this.selectedImageList[this.currentIndex];
    this.currentImage.iterationIndex = 0;
  }
  navigatedIteration() {
    this.currentImage.iterationIndex++;
    if (this.currentImage.iterationIndex > (this.currentImage.iterations.length -1))
      this.currentImage.iterationIndex = 0;
    this.currentImage.inage =  this.currentImage.iterations[this.currentImage.iterationIndex].fullFileName;
  }
  nextImage() {
    this.currentIndex++ ;
    if (this.currentIndex >= this.selectedImageList.length ) {
      this.currentIndex = 0;
    }

    this.currentImage = this.selectedImageList[this.currentIndex];
    this.currentImage.iterationIndex = 0;
  }
  showFullSize(source:string) {
    if (this.currentImage.iterativeText) {
      this.iterativeText = this.currentImage.iterativeText;
    } else {
      this.iterativeText = 'Iterations';
    }
    this.currentImage = source;

    this.currentImage.iterationIndex = 0;
    console.log (JSON.stringify(this.currentImage));
    
  }

}
