import { GaneshImageList } from './data/ganesh.image.list';
import { DattavatarImageList } from './data/dattavatar.image.list';
import { ShirdiSaiQ1Q22021ImageList} from './data/shirdi-sai-q2-2020.list';
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
  allImageList:ImageElement[] = [];
  genImageList:any = null ;
  selectedImageList:any[] = [ ];
  currentImage =  this.selectedImageList[0]; // `assets/all-images-demo/starters/su-30-1.jpeg`;
  themeHeader:string ='';
  themeSummary:string = '';
  currentIndex:number = 0 ;
  _actualSize:boolean = false;
  constructor(private activatedRoute:ActivatedRoute) { }
  get ActualSize():boolean {
    return this._actualSize;
  }
  set ActualSize(val:boolean) {
    this._actualSize = val ;
  }
  ngOnInit() {
    let themed:any = null ;
    let foundList:ImageElement[] = [] ;
    this.activatedRoute.paramMap.subscribe(param => 
      { 
        themed = param; console.log(param.get('theme'));
        let strParam = (param.get('theme'));
        switch(strParam) {
          case 'starters-x': this.genImageList = new GeneralImageList();
                             this.allImageList = this.genImageList.allImageList ;
                             break;
          case 'shree-ganesh': this.genImageList = new GaneshImageList();
                             this.allImageList = this.genImageList.allImageList ;
                             break;
          case 'dattavatar': this.genImageList = new DattavatarImageList();
                             this.allImageList = this.genImageList.allImageList ;
                             break;
          case 'shirdi-sai-q1-q2-2021': this.genImageList = new ShirdiSaiQ1Q22021ImageList();
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
                  this.selectedImageList.push({ image: `${fileData.fullFileName}`, title: fileData.description }):
                  this.selectedImageList.push({ image: `assets/all-images/${foundFolder}/${fileData.fileName}`, title: fileData.description });
              });
          }
          this.currentIndex = 0;
          this.currentImage = this.selectedImageList[0];
          
      });
    
  
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
  }
  nextImage() {
    this.currentIndex++ ;
    if (this.currentIndex >= this.selectedImageList.length ) {
      this.currentIndex = 0;
    }

    this.currentImage = this.selectedImageList[this.currentIndex];
  }
  showFullSize(source:string) {
    this.currentImage = source;
  }

}